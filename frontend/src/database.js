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
    stopOrder(data) {
        post('/stop-order', data)
    },
    machines: (() => {
        const brands = [
            { id: 0, img: "sturm", name: "Sturm", country: "Германия" },
            { id: 1, img: "arashi", name: "Arashi", country: "Япония" },
            { id: 2, img: "fengbao", name: "Fengbao", country: "Китай" },
        ]
        const states = [
            { state: "new", transcription: "Новая" },
            { state: "used", transcription: "Б/У" },
        ]

        const machines = [
            1.5, 1.2, 1.8, 1.6, 1.4, 1.55, 1.65, 1.75, 1.85, 1.95,2.05,
            2.15, 2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95
        ].map((price, id) => {
            const machine = brands.random()
            return {
                id, price: price * 1000000,
                name: machine.name, img: machine.img, state: states.random(),
            }
        })
    
        return machines
    })(),
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