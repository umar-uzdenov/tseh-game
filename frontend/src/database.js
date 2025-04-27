import { reactive } from 'vue'

window.database = reactive({
    user: {}
})



launch(async () => {
    // const isTg = tg.initData != ''
    // const auth = await authTg(isTg ? tg.initData : { superId: 233 })
    const auth = await authTg({ superId: 233 })
    if (auth.success) {
        database.auth = true

        launchLoop(async () => {
            const params = { superId: 233 }
            // const params = isTg ? { superId: 233 } : tg.initData
            // console.log("params is ", params)
            // const user = 
            database.user = await get("/api/user", params)
            // console.log(database.user)
        })
    }

    // console.log(database.auth)
})
// console.log(database.test)