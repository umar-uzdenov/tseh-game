import { defineStore } from 'pinia'

export const useTgStore = defineStore('tg', () => {
    const tg = window.Telegram.WebApp
    const data = {
        userName: 'Default User',
        userId: 0,
        hash: "451c4c181086ced43181873b6fadce90b8192ad3a01a62bc3e182a80452201f8",
    }

    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const user = tg.initDataUnsafe.user
        data.userName = `${user.first_name || ''} ${user.last_name || ''}`
        data.userId = `ID: ${user.id}`
    }

    data.user

    tg.ready()

    launch(async () => {
        const isAuth = await authTg(tg.initData)
        if (isAuth) data.hash = tg.initDataUnsafe.user.hash
        data.user = await get("/api/user", { tgId: data.userId })
    })

    if (["ios", "android"].includes(tg.platform.toLowerCase())) tg.requestFullscreen() // on mobile
    // if (platform == "tdesktop")
    // tg.requestFullscreen()
    // tg.expand();
    // tg.close();

  // Ready


//   openLink() {
//     tg.openLink('https://core.telegram.org/bots/webapps')
// },
// sendData() {
//     tg.sendData('Hello from Web App!')
// },

    return { tg, data }
})