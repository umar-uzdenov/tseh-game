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


// app.get('/api/user', async (req, res) => {
//     try {
//         if (+req.query.superId == 233) {
//             // console.log("get user super id 233")
//             const user = await database.user.get(0)
//             // console.log("user id is", user.tgUser.username)
//             return res.json(await database.user.get(0))
//         }

//         const tgId = +req.query.tgId
//         // console.log(typeof tgId)
//         const user = await database.user.get(tgId)
//         // console.log("user", user.tgUser.username)
//         res.json(user)
//     } catch (error) {
//         console.error('Error fetching user:', error);
//     }
// });

app.post('/api/get-user', async (req, res) => {
    try {
        const { tgId, hash} = req.body.user // check user by tgId and hash
        // console.log({tgId})
        const user = await database.user.get(tgId) // add check for hash
        // console.log("user", user)
        res.json(user)
    } catch (error) {
        console.error(error)
    }
})

app.post('/api/add-model', async (req, res) => {
    try {
        const { tgId, hash} = req.body.user // check user by tgId and hash
        const user = await database.user.get(tgId)
        console.log("user", user.models.length)
        const reqModel = req.body.data
        user.models.push({
            id: 0,
            type: reqModel.type,
            img: reqModel.type,
            imgId: reqModel.id,
            name: reqModel.name,  
            description: reqModel.description,
            time: Math.floor(Math.random() * 4) * 10 + Math.floor(Math.random() * 5 + 5),
            price: Math.floor(Math.random() * 30) * 10 + 100,
            yarnId: 0, // replace with actual data
            yarn: "Хлопок", // replace with actual data
            consumption: 500
        })
        // console.log(model)
    } catch (error) {
        console.error(error)
    }
})

app.post('/api/sell-item', async (req, res) => {
    const { tgId, hash } = req.body.user // check user by tgId and hash
    const { itemId } = req.body.data
    const user = await database.user.get(tgId)
    const item = user.items.find(item => item.id === itemId)

    user.balance += item.price * (item.quantityProduced - item.quantitySold)
    user.totalEarned += item.price * (item.quantityProduced - item.quantitySold)

    if (item.quantityLeft) {
        item.quantitySold = item.quantityProduced
    } else {
        const itemIndex = user.items.findIndex(item => item.id === itemId)
        user.items.splice(itemIndex, 1)
    }
    res.json({success: "success"})
})

app.post('/api/create-order', async (req, res) => {
    const { tgId, hash } = req.body.user // check user by tgId and hash
    const data = req.body.data
    console.log(data)
    const user = await database.user.get(tgId)
    const machine = user.machines.find(machine => machine.id == data.machineId)
    if (machine.currentItemId != -1) {
        // типа античит
        return res.json({ error: "Order already exist on this machine" })
    }
    const model = user.models.find(model => model.id == data.modelId)
    user.lastItemId += 1

    user.items.push({
        "id": user.lastItemId, // set last item id + 1 after assigning
        "price": model.price,
        "name": model.name,
        "img": model.img,
        "imgId": model.imgId,
        "quantity": data.quantity,
        "quantityLeft": data.quantity,
        "quantityProduced": 0,
        "quantitySold": 0,
        "time": model.time,
        "timeLeft": model.time
    })
    machine.currentModelId = model.id
    machine.currentItemId = user.lastItemId
    machine.lastProcess = new Date().getTime()
    console.log("creating order")
    // const item = user.items.find(item => item.id === itemId)
    // const itemIndex = user.items.findIndex(item => item.id === itemId)
    // console.log({itemIndex})
    // user.items.splice(itemIndex, 1)
    // // добавить поведение, чтобы карточка не удалялась, когда есть ещё товары для производства 
    // // ну или нет
    // // console.log(user.balance)
    // console.log({price: item.price * item.quantityProduced})
    // user.balance += item.price * item.quantityProduced
    res.json({success: "success"})
})



app.post('/api/stop-order', async (req, res) => {
    const { tgId, hash } = req.body.user // check user by tgId and hash
    const data = req.body.data
    const user = await database.user.get(tgId)
    const machine = user.machines.find(machine => machine.id == data.machineId)
    const item = user.items.find(item => item.id == machine.currentItemId)
    machine.currentItemId = -1
    machine.currentModelId = -1

    item.quantity = item.quantity - item.quantityLeft
    item.quantityProduced = item.quantity
    item.quantityLeft = 0

    res.json({success: "success"})
})


app.post('/api/buy-machine', async (req, res) => {
    const { tgId, hash } = req.body.user // check user by tgId and hash
    const machine = req.body.data
    const user = await database.user.get(tgId)

    if (user.balance < machine.price) return res.json({ fail: "fail" })

    user.lastMachineId++
    
    user.machines.push({
        id: user.lastMachineId,
        name: machine.name,
        img: machine.img + ".jpg",
        distinctName: "№" + (user.lastMachineId + 1),
        currentModelId: -1,
        currentItemId: -1,
        lastProcess: new Date().getTime()
    })
    user.balance -= machine.price

    res.json({success: "success"})
})

app.post('/api/auth', async (req, res) => {
    // console.log('POST /api/auth');
    // const { initData } = req.body;
    // console.log(`Received initData: ${initData}`);
    // console.log("req.body", req.body)
    // return res.json({ success: "You authentificated" })
    // Parse initData into key-value pairs
    console.log({ "req body": req.body })
    if (req.body.id == 0) {
        console.log("user 0 auth")
        return res.json({ success: "You authentificated" })
    }
    // console.log(`Parsed params: ${params}`);
    // const hash = params.get('hash');
    // const authDate = parseInt(params.get('auth_date')) * 1000; // Convert to ms

    // Basic checks
    //   if (Date.now() - authDate > 86400000) { // 24 hours
    //     return res.status(401).json({ error: 'Expired' });
    //   }

    // Generate data-check-string
    const dataCheckString = req.body
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
    const user = JSON.parse(req.body['user']);
    console.log(`User data: ${user}`);

    const tgId = +JSON.parse(req.body['user']).id
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