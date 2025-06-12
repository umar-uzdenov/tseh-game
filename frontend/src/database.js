import { reactive } from 'vue'

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
}

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

        const sturm = Array(3).fill(0)
            .map(_=> speedInRange(0.9, 1.1))
            .map((speed, id) => {
                console.log({speed, id, price: Math.floor(Math.pow(speed / 0.8, 4) * 800) * 1000})
                return {
                    id: id, speed, price: Math.floor(Math.pow(speed / 0.8, 4) * 800) * 1000,
                    name: "Sturm", img: "sturm", state: states.random(),
                }
            })
        const arashi = Array(3).fill(0)
            .map(_=> speedInRange(1.0, 1.2))
            .map((speed, id) => {
                return {
                    id: id, speed, price: Math.floor(Math.pow(speed / 0.8, 4) * 800) * 1000,
                    name: "Arashi", img: "arashi", state: states.random(),
                }
            })
        const fengbao = Array(3).fill(0)
            .map(_=> speedInRange(0.8, 1.0))
            .map((speed, id) => {
                return {
                    id: id, speed, price: Math.floor(Math.pow(speed / 0.8, 4) * 800) * 1000,
                    name: "Fengbao", img: "fengbao", state: states.random(),
                }
            })



        const machines = [...sturm, ...arashi, ...fengbao]
            .sort(_=> Math.random())
            // .map((price, id) => {
            //     const machine = brands.random()
            //     return {
            //         id, price: price * 1000000,
            //         name: machine.name, img: machine.img, state: states.random(),
            //     }
            // })
    
        return machines
    })(),
})

let databaseCount = 0

launch(async () => {
    // if (count++ < 3) window.alert(JSON.stringify({where:"database launch"}))

    // const isTg = tg.initData != ''
    const auth = await authTg({
        hash: window.Telegram.WebApp.initDataUnsafe.hash,
        initData: window.Telegram.WebApp.initData,
        user: window.Telegram.WebApp.initDataUnsafe?.user
    })
    // const auth = await authTg(window.Telegram.WebApp.initDataUnsafe)
    // const auth = await authTg({
    //     id: 1,
    //     hash: "ae129d20bb1d730a5177abb20f4742f6c7e1d093cfa22dd55615172fdd7f9d1f",
    //     user: {
    //         "id": 893065688,
    //         "first_name": "عمر",
    //         "last_name": "الأزدني",
    //         "username": "umar_uzden",
    //         "language_code": "ru",
    //         "is_premium": true,
    //         "allows_write_to_pm": true,
    //         "photo_url": "https://t.me/i/userpic/320/MAJoSgg3bCNEMRN4cd_U2B_xhvOXRlyg5rTLsJ0HWFk.svg"
    //     }
    // })
    // if (count++ < 3) window.alert(JSON.stringify({where:"database launch", auth}))

    if (auth.success) {
        // if (count++ < 3) window.alert(JSON.stringify({where:"database auth success", auth}))

        // database.auth = true
        try {
        setInterval(async () => {
            // if (count++ < 3) window.alert(JSON.stringify({where:"database launch loop", auth}))


        //     // const params = { tgId: 0, hash: 0 }
        //     const params = { tgId: i, hash: "ae129d20bb1d730a5177abb20f4742f6c7e1d093cfa22dd55615172fdd7f9d1f" }
        //     // const params = isTg ? { superId: 233 } : tg.initData
        //     // console.log("params is ", params)
        //     // const user = 
        //     // console.log(params)
        //     if (count++ < 3) window.alert({where:"database loop"})
            let user = await getUser()
            database.user = user
        //     // console.log({user})
        //     // database.user = {...(await post("/get-user", params))}
        //     // console.log(database.user)
        }, 100)
        } catch (error) {
            // if (count++ < 3) window.alert(JSON.stringify({where:"error setting interval", auth, error}))

        }
        // if (count++ < 3) window.alert(JSON.stringify({where:"database after setting interval", auth}))


    }

    // console.log(database.auth)
})
// console.log(database.test)

        
function speedInRange(start, end) {
	const size = Math.round((end - start) / 0.01) + 1 // (1.2 - 0.8) / 0.01 + 1 = 41
    // console.log({start, end, size})
	return +(Math.floor(Math.random() * size) * 0.01 + start).toFixed(2)
}

function numberCompare(first, second) {
	if (first > second)
		return 1
	else if (second > first)
		return -1
	else
		return 0
}