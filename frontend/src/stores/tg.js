import { defineStore } from 'pinia'

export const useTgStore = defineStore('tg', () => {
    const tg = window.Telegram.WebApp

    return { tg }
})