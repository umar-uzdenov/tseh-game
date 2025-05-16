import { reactive } from 'vue'

window.database = reactive({
    user: {},
    models: [
        { name: "cap", description: "Шапка", quantity: 7},
        { name: "cardigan", description: "Кардиган", quantity: 7},
        { name: "dress", description: "Платье", quantity: 7},
        { name: "jacket", description: "Безрукавка", quantity: 7},
        { name: "scarf", description: "Шарф", quantity: 7},
        { name: "snood", description: "Снуд", quantity: 7},
        { name: "sweater", description: "Свитер", quantity: 7},
    ],
    sellItem(itemId) {
        post('/sell-item', { itemId })
    },
    addModel(model) {
        post('/add-model', model)
    },
    createOrder(data) {
        post('/create-order', data)
    },
})



launch(async () => {
    // const isTg = tg.initData != ''
    // const auth = await authTg(isTg ? tg.initData : { superId: 233 })
    const auth = await authTg({ id: 0 })
    if (auth.success) {
        database.auth = true

        launchLoop(async () => {
            const params = { tgId: 0, hash: 0 }
            // const params = isTg ? { superId: 233 } : tg.initData
            // console.log("params is ", params)
            // const user = 
            database.user = {...(await post("/get-user", {}))}
            // console.log(database.user)
        }, 100)
    }

    // console.log(database.auth)
})
// console.log(database.test)