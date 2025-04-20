const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to the Telegram Bot!');
});
