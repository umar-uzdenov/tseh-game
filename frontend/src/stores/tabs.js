import { defineStore } from 'pinia'

export const useTabsStore = defineStore('main', () => {
    const tabs = [
        {
            name: "workshop", description: "Цех", active: "machines", sub: [
                { name: "machines", description: "Машины" },
                { name: "models", description: "Модели" },
                { name: "warehouse", description: "Склад" },
                { name: "yarns", description: "Пряжа" },
            ] },
        {
            name: "store", description: "Магазин", active: "machines", sub: [
                { name: "machines", description: "Машины" },
                { name: "spares", description: "Запчасти" },
                { name: "yarns", description: "Пряжа" },
            ]
        },
        {
            name: "market", description: "Рынок", active: "bazaar", sub: [
                { name: "bazaar", description: "Базар" },
                { name: "online", description: "Маркетплейсы" },
                { name: "social", description: "Соцсети" },
            ]
        },
        {
            name: "profile", description: "Профиль", active: "main", sub: [
                { name: "main", description: "Главная" },
                { name: "friends", description: "Друзья" },
                { name: "raing", description: "Рейтинг" }
            ]
        },
    ]

    const state = { tab: "workshop", sub: "machines" }


    return { tabs, state }
})