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

function writeData(data, ...filename) {
    const filePath = path.join(dbPath, ...filename)
    console.log("filePath", filePath)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4))
}

// function get(name, id) {
//     if (blocks[name + ".json"].lastId < id) return { error: "item not found" }
//     return blocks[name + ".json"].items.find(item => item.id == id)
// }

const userMain = await readData("user.json")
const blockSize = 100
const loaded = []

async function get(tgId) {
    try {
        // console.log(userMain)
        console.log("tgId", tgId)
        let id = 0
        const tgToId = userMain.tgToId.find(item => item.tg == tgId)
        if (tgToId) id = tgToId.id
        else return { error: "user not found" }
        // const id = 0; //
        // console.log(id)
        // console.log("lastid", userMain.lastId)
        if (userMain.lastId < id) return { error: "user not found" }

        let user = loaded.find(lu => lu.id == id) // loaded user
        // console.log(user)
        console.log("user is loaded?")

        if (!user) {
            const index = Math.floor(id / blockSize) // find block index
            user = readData(`user`, `block_${index}`, `user_${id}.json`)
            loaded.push(user)
        }
        // console.log(user)

        console.log("user found and loaded")

        return user
    } catch (error) {
        return { error }
    }
}

async function add(user) {
    console.log("add function")
    const id = userMain.lastId + 1
    userMain.lastId = id
    userMain.tgToId.push({ tg: user.tgId, id })
    writeData(userMain, "user.json")

    user.id = id // rewrite to generate new user
    loaded.push(user)

    const index = Number((id / blockSize).toFixed(0))
    console.log("index", index)
    writeData(user, `user`, `block_${index}`, `user_${id}.json`)
    console.log("new user must be added")

    return { success: "user added" } // replace with some response
}

export default { get, add }
