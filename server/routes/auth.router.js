const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("../common/config");

const User = require("../models/User");

const router = express.Router();

// api/auth/register
router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Некорректный password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации.",
        });
      }

      const { email, password } = req.body;

      const isExist = await User.findOne({
        where: {
          email,
        },
      });

      if (isExist) {
        return res.status(400).json({
          message: "Такой пользователь существует.",
        });
      }

      const encryptedPassword = await bcrypt.hash(password, 12);

      await User.create({
        email,
        password: encryptedPassword,
      });

      return res.status(200).json({
        message: "Создан пользователь.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Что-то пошло не так.",
      });
    }
  }
);

// api/auth/login
router.post(
  "/login",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Некорректный password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе.",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(400).json({
          message: "неверный email",
        });
      }

      const isEqualPassword = await bcrypt.compare(password, user.password);

      if (!isEqualPassword) {
        return res.status(400).json({ message: "Неверный пароль." });
      }

      const token = jwt.sign({ userId: user.id }, config.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      return res.status(200).json({ token, userId: user.id });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;
