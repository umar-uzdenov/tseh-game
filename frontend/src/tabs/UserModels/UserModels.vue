<script setup>
import Select from '@/tabs/UserModels/ModelSelect.vue'
import { useUserModelsStore } from '@/stores/user/user-models'
import { computed, reactive, ref } from 'vue'

const userModels = computed(() => window.database.user.models)
const database = window.database

const form = reactive({
    visible: false, name: '', description: '', models: [],
    current: { type: 0, id: 0 },
    toggle() {
        if (this.visible) {
            this.visible = false
        } else {
            const models = window.database.user.models.map(model => model.type + "_" + model.id)
            this.models = database.models
                .map(type => ({
                    name: type.name, description: type.description,
                    ids: [...Array(type.quantity).keys()]
                        .filter(id => models.indexOf(type.name + "_" + id) == -1)
                    })
                ).filter(type => type.ids.length > 0)

            this.visible = true
        }
    },
    select(type) {
        this.current.type = this.models.findIndex(model => model.name === type.name);
        this.current.id = this.models[this.current.type].ids.random()
    },
    add() {
        post('add-model', {
            type: this.models[this.current.type].name,
            id: this.current.id,
            name: this.name,
            description: this.description,
        })
        this.toggle()
        // console.log("model", this.current, this.name, this.description)
    }
})


function addModel() {
    useUserModelsStore().addModel(form.name, form.description)
    form.visible = false
}

const model = reactive({
    current: database.models[1],
    id: Math.floor(Math.random() * 7)
})

function selectType(type) {
    model.current = database.models.find(model => model.description == type)
    model.id = Math.floor(Math.random() * 7)
}

</script>

<template>
    <div
        v-for="(model, index) in userModels" :key="index"
        class="card"
    >
        <img
            class="model-img"
            :src="`img/model/${model.img}/${model.img}_${model.imgId}.jpg`"
            :alt="`${model.img}_${model.imgId}`"
        />
        <div class="card-column">
            <div class="model-name">{{model.name}}</div>
            <div class="model-description">{{model.description}}</div>
            <div class="model-yarn">Материал: {{model.yarn}}</div>
            <div class="model-time">Время: {{model.time}} минут</div>
        </div>
    </div>
    <button v-if="!form.visible" class="open-form-button" @click="form.toggle()">+</button>
    <div v-if="form.visible" class="form-background" @click="form.visible=false">
        <div class="model-form" @click.stop="true">
            <img
                class="model-form-img"
                :src="`img/model/${
                    form.models[form.current.type].name
                }/${form.models[form.current.type].name}_${form.current.id}.jpg`"
                :alt="form.models[form.current.type].description"
            />
            <Select :form="form" />
            <input v-model="form.name" placeholder="Название модели">
            <textarea v-model="form.description" placeholder="Описание модели" rows="3"></textarea>
            <div class="card-row">
                <button class="form-cancel-button" @click="form.visible=false">Отменить</button>
                <button class="form-add-button" @click="form.add">Добавить</button>
            </div>
        </div>
    </div>

</template>

<style scoped>


.card {
    cursor: pointer;
    overflow: hidden;

    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -webkit-touch-callout: none;

    border-radius: 8px;
    color: rgb(223, 223, 223);
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 2px 2px black inset;

    padding: 12px;
    display: flex;
    gap: 8px;
}

.model-img {
    width: 132px;
    height: 132px;
    border-radius: 8px;
}

.model-name {
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.model-description {
    height: 40px;
    line-height: 20px;
    overflow: hidden;
}

.model-yarn, .model-time {
    height: 20px;
}

.open-form-button {
    
    position: fixed;
    left: calc(50vw - 64px);
    bottom: 48px;
    width: 128px;
    height: 48px;
    border: none;
    border-radius: 24px;
    z-index: 10;
    background-color: #000a;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    color: #3bb43f;
    outline: none;
    box-shadow: 0 0 2px 5px #228725 inset;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
    font-size: 48px;
}

.form-add-button, .form-cancel-button {
    border: none;
    width: 100%;
    height: 32px;
    background-color: #0009;
    border-radius: 8px;
}

.form-cancel-button {
    box-shadow: 0 0 2px 1px #F44336 inset;
    color: #ff2515;
}

.form-add-button {
    box-shadow: 0 0 2px 1px #4CAF50 inset;
    color: #3bb43f;
}

.form-background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
}

.model-form {
    position: absolute;
    z-index: 20;
    left: 24px;
    top: calc((100vh - 100vw - 140px) / 2);
    width: calc(100vw - 48px - 24px);
    height: calc(100vw + 140px);
    border-radius: 8px;
    padding: 12px;
    background-color: rgb(15, 15, 15);
    box-shadow: 0 0 14px 3px rgba(95, 95, 95, 0.5) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

}

.model-form-img {
    width: calc(100vw - 48px - 24px);
    height: calc(100vw - 48px - 24px);
    border-radius: 8px;
}

.model-form input, .model-form textarea {
    width: calc(100% - 16px);
    padding: 8px;
    background-color: #333;
    color: white;
    border: 1px solid #444;
    border-radius: 4px;
}

.model-form textarea {
    height: 60px;
}


</style>