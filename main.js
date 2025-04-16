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
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
    console.error("Server error:", err);
});

process.on('unhandledRejection', (err) => {
    console.error("Unhandled Promise Rejection:", err);
    process.exit(1);
});

