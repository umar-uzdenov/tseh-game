// const https = require('https');
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import crypto from 'crypto'
import database from './database.js';

const app = express();
app.use(express.json());



// API routes
app.get('/api/test', (req, res) => {
    res.json({ message: 'Баланс: многа денег' });
});

app.get('/api/user', async (req, res) => {
    try {
        const tgId = Number(req.query.tgid)
        res.json(await database.user.get(tgId))
    } catch (error) {
        console.error('Error fetching user:', error);
    }
});


app.post('/api/auth', async (req, res) => {
    const { initData } = req.body;

    // Parse initData into key-value pairs
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    const authDate = parseInt(params.get('auth_date')) * 1000; // Convert to ms

    // Basic checks
    //   if (Date.now() - authDate > 86400000) { // 24 hours
    //     return res.status(401).json({ error: 'Expired' });
    //   }

    // Generate data-check-string
    const dataCheckString = [...params]
        .filter(([key]) => key !== 'hash')
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, val]) => `${key}=${val}`)
        .join('\n');
        // console.log(dataCheckString)

    // Compute secret key from bot token
    const secret = crypto.createHmac('sha256', 'WebAppData')
        .update(process.env.TELEGRAM_BOT_TOKEN)
        .digest();
    
    //   console.log(process.env.TELEGRAM_BOT_TOKEN)
    // Validate hash
    const computedHash = crypto
        .createHmac('sha256', secret)
        .update(dataCheckString)
        .digest('hex');

    if (computedHash !== hash) {
        return res.status(401).json({ error: 'Invalid hash' });
    }

    // Extract user data
    const user = JSON.parse(params.get('user'));

    const dbUser = await database.user.get(Number(params.get("id")))
    console.log(dbUser)
    // if (dbUserif (dbUser.error) {
    //     await database.user.add({
    //         tgId: user.id, 
    //         username: user.username, 
    //         lastRequest: Date.now(),
    //         balance: 0, 
    //         models: [], 
    //         yarns: [], 
    //         machines: [], 
    //         items: []
    //     })
    // }
  
    // Example: Use cookies or JWT
    //   res.cookie('userId', user.id, { httpOnly: true });
    res.json({ success: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});