import { defineStore } from 'pinia'

export const useMachinesStore = defineStore('database-machines', () => {
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)];
    }
    
    const machineBrands = [
        { id: 0, name: "Sturm", country: "Германия" },
        { id: 1, name: "Arashi 嵐", country: "Япония" },
        { id: 2, name: "Fēngbào 风暴", country: "Китай" },
        { id: 3, name: "Tempête", country: "Швейцария" },
        { id: 4, name: "Tempesta", country: "Италия" }
    ]

    const machineStates = [
        { state: "new", transcription: "Новая" },
        { state: "used", transcription: "Б/У" },
    ]

    const machineStatuses = [
        { style: "active", description: "Работает" },
        { style: "active", description: "Работает" },
        { style: "active", description: "Работает" },
        { style: "maintenance", description: "Нужен ремонт" },
    ]

    return { machineBrands, machineStates, machineStatuses }
})