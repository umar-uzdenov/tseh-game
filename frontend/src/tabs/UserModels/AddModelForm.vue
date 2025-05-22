<script setup>
import Select from '@/tabs/UserModels/ModelSelect.vue'
import { computed, reactive } from 'vue';


const userModels = computed(() => window.database.user.models)
const database = window.database

const form = reactive({
    visible: false, name: '', description: '', models: [],
    current: { type: 0, id: 0 },
    toggle() {
        console.log("toggling form")
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
        post('/add-model', {
            type: this.models[this.current.type].name,
            id: this.current.id,
            name: this.name,
            description: this.description,
        })
        this.toggle()
        // console.log("model", this.current, this.name, this.description)
    }
})

const modelImg = computed(() => {
    const name = form.models[form.current.type].name
    return `img/model/1024/${name}/${name}_${form.current.id}.jpg`
})

// form.toggle()

defineExpose({
    toggle() { form.toggle() },
})
</script>

<template>
    <div v-if="form.visible" class="form-background" @click="form.visible=false">
        <div class="model-form" @click.stop="true">
            <img
                class="model-form-img"
                :src="modelImg"
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


.model-form {
    position: absolute;
    z-index: 20;
    --vwh: min(1vw, 1vh);
    left: calc((100vw - 60 * var(--vwh)) / 2);
    top: calc((100vh - 80 * var(--vwh)) / 2);
    width: calc(60 * var(--vwh));
    height: calc(80 * var(--vwh));
    padding: 12px;
    background-color: rgb(15, 15, 15);
    box-shadow: 0 0 14px 3px rgba(95, 95, 95, 0.5) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;


    width: var(--w);
    height: calc(12px + var(--w) - 24px + 196px + 12px);
    left: calc((100vw - var(--w)) / 2);
    top: calc((100vh - (12px + var(--w) - 24px + 196px + 12px)) / 2);
}

@media screen and (min-aspect-ratio: 3/8) {
    .model-form {
        --w: 90vw;
        background-color: red;
    }
}

@media screen and (min-aspect-ratio: 9/20) {
    .model-form {
        --w: 70vw;
        background-color: green;
    }
}

@media screen and (min-aspect-ratio: 2/3) {
    .model-form {
        background-color: blue;
    }
}

.form-add-button, .form-cancel-button {
    border: none;
    width: 100%;
    height: 32px;
    background-color: #0009;
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



.model-form-img {
    width: calc(var(--w) - 24px);
    height: calc(var(--w) - 24px);
}

.model-form input, .model-form textarea {
    width: 100%;
    font-size: 16px;
    padding: 4px;
    background-color: #333;
    color: white;
    border: 1px solid #444;
}

.model-form textarea {
    height: 72px;
}



</style>