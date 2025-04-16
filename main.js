const express = require('express');
const app = express();
const path = require('path');

// Отдача статики
// app.use(express.static('static')); // Папка с HTML/CSS/JS
app.use(express.static(path.join(__dirname, 'static')));

// Телеграм-бот
// const TelegramBot = require('node-telegram-bot-api');
// const bot = new TelegramBot('ВАШ_ТОКЕН', {polling: true});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

