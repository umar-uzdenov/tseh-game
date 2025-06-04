import path from "path"
import fs from "fs"
import { sleep, launch, now } from './util.js'
import { fileURLToPath } from 'node:url';
// import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dbPath = path.resolve(__dirname, '../database')

async function readData(...filename) {
    const filePath = path.join(dbPath, ...filename)
    const file = fs.readFileSync(filePath)
    return JSON.parse(file.toString())
}

async function writeData(data, ...filename) {
    const filePath = path.join(dbPath, ...filename)
    // console.log("filePath", filePath)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4))
}

const userMain = await readData("user.json")
const blockSize = 100
const loaded = []

launch(async () => {
    let counterToWrite = 0
    while (true) {
        await sleep(300) // game loop
        await writeData(userMain, "user.json")
        
        let toUnload = []
        for (let i = 0; i < userMain.tgToId.length; i++) {
            const user = userMain.tgToId[i]
            let loadedUserIndex = loaded.findIndex(lu => lu.id == user.id) // loaded user
            if (loadedUserIndex == -1) break

            const loadedUser = loaded[loadedUserIndex]
            const index = Number((loadedUser.id / blockSize).toFixed(0))
            processUser(loadedUser)
            
            counterToWrite++
            if (counterToWrite > 100) {
                await writeData(loadedUser, `user`, `block_${index}`, `user_${loadedUser.id}.json`)
                counterToWrite = 0
            }
            

            if (new Date().getTime() - user.last > 10000) {
                toUnload.push(loadedUserIndex)
                console.log({toUnload})
            }
        }

        toUnload.reverse().forEach(index => loaded.splice(index, 1))
        toUnload = []
    }
})

function processUser(user) {
    // console.log(user.machines.length)
    // user.lastProcess = new Date().getTime()
    if (now() - user.lastProcess > 1000) {
        for (const machine of user.machines) {
            // continue
        // user.machines.forEach(machine => {
            if (machine.currentItemId == -1) continue

            const currentModel = user.models.find(model => model.id == machine.currentModelId)
            const currentItem = user.items.find(item => item.id == machine.currentItemId)

            if (currentItem === undefined) {
                user.items.push({
                // console.log({
                    "id": machine.currentItemId,
                    "price": currentModel.price, // get from model info
                    "name": currentModel.name, // getFrom
                    "img": currentModel.img,
                    "quantity": 1000,
                    "quantityProduced": 0,
                    quantityLeft: 1000,
                    time: currentModel.time,
                    timeLeft: 0
                })
                continue
            }

            currentItem.quantityProduced = currentItem.quantity - currentItem.quantityLeft
            while (now() - machine.lastProcess > 1000) {
                if (currentItem.quantityLeft > 0) {
                    if (currentItem.timeLeft > 0) {
                        currentItem.timeLeft -= 1
                    } else if (currentItem.timeLeft == 0) {
                        currentItem.quantityLeft -= 1
                        currentItem.timeLeft = currentModel.time
                    }
                } else if (currentItem.quantityLeft == 0) {
                    machine.currentItemId = -1
                    machine.currentModelId = -1
                }
                machine.lastProcess += 1000
            }
        }
    }
}

async function get(tgId) {
    try {
        // console.log(userMain)
        // console.log("tgId", tgId)
        // console.log({tgId})
        const tgToId = userMain.tgToId.find(item => item.tg == tgId)
        const { id, last } = tgToId
        // console.log({id,last})
        if (new Date().getTime() - last > 1000) {
            // console.log("1s")
            tgToId.last = new Date().getTime() // replace with game cycle
        }
        // console.log({id,last})
        const loadedUser = loaded.find(lu => lu.id == id)
        // console.log(loadedUser)

        if (loadedUser) {
            // console.log(loadedUser)
            return loadedUser
        }
        else {
            const index = Math.floor(id / blockSize) // find block index
            const user = await readData(`user`, `block_${index}`, `user_${id}.json`)
            loaded.push(user)
            // console.log(user.id)
            return user
        }
    } catch (error) {
        return { error }
    }
}

async function add(user) {
    console.log("add function")
    const id = userMain.lastId + 1
    userMain.lastId = id
    userMain.tgToId.push({ tg: user.tgId, id, last: new Date().getTime() })
    

    user.id = id // rewrite to generate new user
    loaded.push(user)

    const index = Number((id / blockSize).toFixed(0))
    console.log("index", index)
    writeData(user, `user`, `block_${index}`, `user_${id}.json`)
    console.log("new user must be added")

    return { success: "user added" } // replace with some response
}

export default { get, add, userList: userMain }
