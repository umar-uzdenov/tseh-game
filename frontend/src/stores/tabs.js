import { defineStore } from 'pinia'

export const useTabsStore = defineStore('main', () => {
    // const tabs = [
    //     {
    //         name: "workshop", description: "Цех", active: "machines", sub: [
    //             { name: "machines", description: "Машины" },
    //             { name: "models", description: "Модели" },
    //             { name: "warehouse", description: "Склад" },
    //             { name: "yarns", description: "Пряжа" },
    //         ] },
    //     {
    //         name: "store", description: "Магазин", active: "machines", sub: [
    //             { name: "machines", description: "Машины" },
    //             // { name: "spares", description: "Запчасти" },
    //             { name: "yarns", description: "Пряжа" },
    //         ]
    //     },
    //     // {
    //     //     name: "market", description: "Рынок", active: "bazaar", sub: [
    //     //         { name: "bazaar", description: "Базар" },
    //     //         { name: "online", description: "Маркетплейсы" },
    //     //         { name: "social", description: "Соцсети" },
    //     //     ]
    //     // },
    //     {
    //         name: "profile", description: "Профиль", active: "main", sub: [
    //             { name: "main", description: "Главная" },
    //             { name: "friends", description: "Друзья" },
    //             { name: "raing", description: "Рейтинг" }
    //         ]
    //     },
    // ]
    const tabs = [
        { name: "workshop", description: "Вязальный цех" },
        { name: "models", description: "Модели" },
        { name: "warehouse", description: "Склад" },
        { name: "yarns", description: "Пряжа" },
        { name: "machine-store", description: "Магазин станков" },
        { name: "yarn-store", description: "Магазин пряжи" },
        { name: "profile", description: "Профиль" },
        { name: "rating", description: "Рейтинг" },
        // {
        //     name: "market", description: "Рынок", active: "bazaar", sub: [
        //         { name: "bazaar", description: "Базар" },
        //         { name: "online", description: "Маркетплейсы" },
        //         { name: "social", description: "Соцсети" },
        //     ]
        // },
        // {
        //      active: "main", sub: [
        //         { name: "main", description: "Главная" },
        //         { name: "friends", description: "Друзья" },
                
        //     ]
        // },
    ]

    // tabs.workshop = "workshop"
    // tabs.store = "store"
    // tabs.market = "market"
    // tabs.profile = "profile"


    tabs.workshop = "workshop"
    tabs.models = "models"
    tabs.warehouse = "warehouse"
    tabs.yarns = "yarns"
    tabs.machineStore = "machine-store"
    tabs.yarnStore = "yarn-store"
    tabs.profile = "profile"
    tabs.rating = "rating"

    return { tabs }
})