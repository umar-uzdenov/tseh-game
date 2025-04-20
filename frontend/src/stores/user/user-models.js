import { defineStore } from 'pinia'

export const useUserModelsStore = defineStore('user-models', () => {
    const models = [
        { id: 1, name: "Кардиган", url: "cardigan.jpg", description: "Молодёжный кардиган" },
        { id: 2, name: "Свитер", url: "sweater.jpg", description: "Классический свитер" },
        { id: 3, name: "Шапка", url: "cap.jpg", description: "Жаккардовая шапка" }
    ];

    function addModel(name, description) {
        models.push({ id: models.length, name, description });
    }

    return { models, addModel }
})