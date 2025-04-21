import { defineStore } from 'pinia'

export const useTgStore = defineStore('tg', () => {
    const tg = window.Telegram.WebApp
    const data = {
        userName: 'User info not available.',
        userID: 'User info not available.',
        openLink() {
            tg.openLink('https://core.telegram.org/bots/webapps')
        },
        sendData() {
            tg.sendData('Hello from Web App!')
        }
    }

    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const user = tg.initDataUnsafe.user
        data.userName = `${user.first_name || ''} ${user.last_name || ''}`
        data.userID = `ID: ${user.id}`
    }

    tg.ready()
    // tg.expand();
    // tg.close();

  // Ready

    return { tg, data }
})