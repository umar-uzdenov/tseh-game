import { reactive } from 'vue'

window.database = reactive({
    user: {}
})



launch(async () => {
    const isTg = false // tg.initData == ''
    const auth = await authTg(isTg ? { superId: 233 } : tg.initData)
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