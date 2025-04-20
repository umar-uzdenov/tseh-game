import { defineStore } from 'pinia'

export const useStoreSparesStore = defineStore('store-spares', () => {
    const spares = [
        {
            id: 1,
            name: "consumables",
            transcription: "Расходники",
            description: "Смазка, иголки, щётки",
            price: 5000
        },
        { id: 2,
            name: "repairKits",
            transcription: "Ремкоплект",
            description: "Платы, клинья, детали оттяжки",
            price: 30000
        },
    ]

    return { spares }
})