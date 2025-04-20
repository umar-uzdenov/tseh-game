import { defineStore } from 'pinia'

export const useStoreYarnsStore = defineStore('store-yarns', () => {
    const yarns = [
        { id: 1, name: "Объёмка", price: 500, composition: "100% Акрил" },
        { id: 2, name: "Хлопок", price: 700, composition: "50% хлопок / 50% акрил" },
        { id: 3, name: "Вискоза", price: 1300, composition: "80% вискоза, 20% нейлон" },
    ]

    return { yarns }
})