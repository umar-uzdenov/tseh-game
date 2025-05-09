import path from "path"
import fs from "fs"

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

setTimeout(async () => {
    while (true) {
        await new Promise(res => setTimeout(res, 3000))
        await writeData(userMain, "user.json")
        
        let toUnload = []
        for (let i = 0; i < userMain.tgToId.length; i++) {
            const user = userMain.tgToId[i]
            let loadedUserIndex = loaded.findIndex(lu => lu.id == user.id) // loaded user
            if (loadedUserIndex == -1) break

            const loadedUser = loaded[loadedUserIndex]
            const index = Number((loadedUser.id / blockSize).toFixed(0))
            await writeData(loadedUser, `user`, `block_${index}`, `user_${loadedUser.id}.json`)

            if (new Date().getTime() - user.last > 10000) {
                toUnload.push(loadedUserIndex)
                console.log({toUnload})
            }
        }

        toUnload.reverse().forEach(index => loaded.splice(index, 1))
        toUnload = []
    }
}, 0)

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

        if (!user) {
            const index = Math.floor(id / blockSize) // find block index
            user = readData(`user`, `block_${index}`, `user_${id}.json`)
            loaded.push(user)
        }
        // console.log(user)

        // console.log("user found and loaded")

        return user
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

export default { get, add }
