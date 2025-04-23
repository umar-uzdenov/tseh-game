const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');



const app = express();
const path = require('path');


// API routes
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'Hello from Express!' });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../dist')));
//   // Handle client-side routing
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist', 'index.html'));
//   });
// }







// Serve static files (e.g., HTML, CSS, JS)
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'tg-test')));


// SSL Certificate (Replace paths with your certificate files)
const sslOptions = {
  key: fs.readFileSync('../../etc/letsencrypt/live/tseh-game.ru/privkey.pem'),
  cert: fs.readFileSync('../../etc/letsencrypt/live/tseh-game.ru/fullchain.pem')
};

// HTTPS Server
https.createServer(sslOptions, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});

// Redirect HTTP to HTTPS
// http.createServer((req, res) => {
//   res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
//   res.end();
// }).listen(80);










// Телеграм-бот
// const TelegramBot = require('node-telegram-bot-api');
// const bot = new TelegramBot('ВАШ_ТОКЕН', {polling: true});

// Запуск сервера

/*

app.use(express.static(path.join(__dirname, 'tg-test')));


const PORT = process.env.PORT || 3000;
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

*/