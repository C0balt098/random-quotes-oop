// server/server.js
const express = require("express");
const cors = require("cors");
const {Quote, sequelize} = require("./models/Quote");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Случайная цитата
app.get("/api/quote", async (req, res) => {
  try {
    const count = await Quote.count();
    const randomIndex = Math.floor(Math.random() * count);
    const quote = await Quote.findOne({offset: randomIndex});
    res.json(quote);
  } catch (err) {
    res.status(500).json({error: "Ошибка получения цитаты"});
  }
});

// Добавление новой цитаты
app.post("/api/quote", async (req, res) => {
  const {text, author} = req.body;
  try {
    const newQuote = await Quote.create({text, author});
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({error: "Ошибка добавления цитаты"});
  }
});

// Синхронизация БД и запуск сервера
sequelize.sync({force: false}).then(() => {
  console.log("База данных синхронизирована");
  app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
  });
});
