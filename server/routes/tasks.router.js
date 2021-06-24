const express = require("express");
const User = require("../models/User");
const Task = require("../models/Task");

const router = express.Router();

router.get("/tasks/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "Пользователя не существует." });
    }
    const tasks = await user.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так.",
    });
  }
});

router.post("/tasks/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { title, content, date } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "Пользователя не существует." });
    }
    const task = await user.createTask({ title, content, date });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так.",
    });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, content, date, done } = req.body;
    const isExist = await Task.findByPk(taskId);
    if (!isExist) {
      return res
        .status(404)
        .json({ status: false, message: "Задачи не существует." });
    }
    const task = await Task.update(
      { title, content, date, done },
      { where: { id: taskId } }
    );
    res.status(200).json({ status: true, message: "Задача обновлена." });
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так.",
    });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const isExist = await Task.findByPk(taskId);
    if (!isExist) {
      return res
        .status(404)
        .json({ status: false, message: "Задачи не существует." });
    }
    const result = await Task.destroy({ where: { id: taskId } });
    res.status(200).json({ status: true, message: "Задача удалена." });
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так.",
    });
  }
});

module.exports = router;
