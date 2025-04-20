import { defineStore } from 'pinia'

export const useMarketStore = defineStore('market', () => {
    const market = [
        { name: "Кардиган", url: "cardigan.jpg", quantity: 10, price: 2000 },
        { name: "Свитер", url: "sweater.jpg", quantity: 5, price: 1500 },
        { name: "Шапка", url: "cap.jpg", quantity: 15, price: 500 },
    ]

    return { market }
})