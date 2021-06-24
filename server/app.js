const express = require("express");
const path = require("path");
const config = require("./common/config.js");
require("./models/relationships");

const app = express();

app.use(express.json());

app.use("/", require("./routes/auth.router"));
app.use("/", require("./routes/tasks.router"));

app.use("/", express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(config.PORT, () => {
  console.log(`Сервер работае на порте ${config.PORT}`);
});
