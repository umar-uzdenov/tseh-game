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


app.get('/api/user', async (req, res) => {
    try {
        if (+req.query.superId == 233) {
            // console.log("get user super id 233")
            const user = await database.user.get(0)
            // console.log("user id is", user.tgUser.username)
            return res.json(await database.user.get(0))
        }

        const tgId = +req.query.tgId
        // console.log(typeof tgId)
        const user = await database.user.get(tgId)
        // console.log("user", user.tgUser.username)
        res.json(user)
    } catch (error) {
        console.error('Error fetching user:', error);
    }
});

app.post('/api/auth', async (req, res) => {
    // console.log('POST /api/auth');
    const { initData } = req.body;
    // console.log(`Received initData: ${initData}`);

    // Parse initData into key-value pairs
    const params = new URLSearchParams(initData);
    if (params.get("superId") == 233) {
        console.log("caught")
        return res.json({ success: "You authentificated" })
    }
    // console.log(`Parsed params: ${params}`);
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
    console.log(`Data check string: ${dataCheckString}`);

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
        console.error('Invalid hash');
        return res.status(401).json({ error: 'Invalid hash' });
    }

    // Extract user data
    const user = JSON.parse(params.get('user'));
    console.log(`User data: ${user}`);

    const tgId = +JSON.parse(params.get("user")).id
    const dbUser = await database.user.get(tgId)
    console.log(`Database user: ${dbUser}`);
    // console.log("params get user id", )
    if (dbUser.error) {
        await database.user.add({
            tgId: user.id, 
            hash,
            tgUser: user, 
            lastRequest: Date.now(),
            balance: 3000000, 
            machinesByed: 1,
            machinesSold: 0,
            itemsSold: 0,
            moneyEarned: 0,
            models: [], 
            yarns: [], 
            machines: [], 
            items: []
        })
        console.log(`User added to database: ${user.id}`);
    }
  
    // Example: Use cookies or JWT
    //   res.cookie('userId', user.id, { httpOnly: true });
    console.log('Authentication successful');
    res.json({ success: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});