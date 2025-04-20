import { defineStore } from 'pinia'

export const useUserWarehousesStore = defineStore('user-warehouse', () => {
    const warehouse = [
        { name: "Кардиган", url: "cardigan.jpg", quantity: 10 },
        { name: "Свитер", url: "sweater.jpg", quantity: 5 },
        { name: "Шапка", url: "cap.jpg", quantity: 15 }
    ]

    return { warehouse }
})