import { defineStore } from 'pinia'
import { useMachinesStore } from '../database/machines.js'


export const useStoreMachinesStore = defineStore('store-machines', () => {
    const brands = useMachinesStore().machineBrands
    const states = useMachinesStore().machineStates
    const machines = [
        1.5, 1.2, 1.8, 1.6, 1.4, 1.55, 1.65, 1.75, 1.85, 1.95,2.05,
        2.15, 2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95
    ].map((price, id) => ({
        id, name: brands.random().name, state: states.random(), price
    }))

    return { machines }
})