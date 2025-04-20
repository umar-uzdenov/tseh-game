<script setup>
import { useUserModelsStore } from '@/stores/user/user-models'
import { reactive } from 'vue'

const userModels = useUserModelsStore().models
const form = reactive({ visible: false, name: '', description: '' })

function addModel() {
    useUserModelsStore().addModel(form.name, form.description)
    form.visible = false
}

</script>

<template>
    <div
        v-for="(model, index) in userModels" :key="index"
        class="card"
    >
        <div class="card-icon" :style="`--icon-url: url('img/model/${model.url}');`"></div>
        <div class="card-column">
            <div class="model-name">{{model.name}}</div>
            <div class="model-description">{{model.description}}</div>
        </div>
    </div>
    <button class="ok-button" @click="form.visible=true">Добавить модель</button>
    <div v-if="form.visible" class="model-form card vertical">
        <input v-model="form.name" placeholder="Название модели">
        <textarea v-model="form.description" placeholder="Описание модели"></textarea>
        <div class="card-row">
            <button class="ok-button" @click="addModel">Добавить</button>
            <button class="cancel-button" @click="form.visible=false">Отменить</button>
        </div>
    </div>

</template>