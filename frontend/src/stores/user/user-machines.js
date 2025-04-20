import { defineStore } from 'pinia'
import { useMachinesStore } from '../database/machines.js'


export const useUserMachinesStore = defineStore('user-machines', () => {
    const brands = useMachinesStore().machineBrands
    const status = useMachinesStore().machineStatuses
    const machines = [
        "2023-10-15", "2023-09-28", "2023-11-02", "2023-10-20",
        "2023-11-10", "2023-11-10","2023-11-10", "2023-11-10"
    ].map((lastMaintenance, id) => ({
        id, name: brands.random().name, status: status.random(), lastMaintenance
    }))

    return { machines }
})