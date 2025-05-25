import path from "path"
import fs from "fs"
import user from './user-driver.js'

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
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4))
}

const names = []
const blocks = {}
function init() {
    for (let name of this.names) {
        blocks[name] = readData(name)
    }
}

function get(name, id) {
    if (blocks[name + ".json"].lastId < id) return { error: "item not found" }
    return blocks[name + ".json"].items.find(item => item.id == id)
}

function add(name, data) {
    try {
        const id = blocks[name + ".json"].lastId + 1
        blocks[name + ".json"].lastId = id
        blocks[name + ".json"].items.push({ id, ...data })

        return { success: "Item added" }
    } catch (error) {
        return { error }
    }
}

const database = {
    user: {
        get(tgId) { return user.get(tgId) },
        add(userData) { return user.add(userData) },
        getUserList() { return user.userList },
    },
}



async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default database
