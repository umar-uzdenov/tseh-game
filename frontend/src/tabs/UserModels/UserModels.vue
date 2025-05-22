<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import AddModelCard from './AddModelCard.vue'
import AddModelForm from './AddModelForm.vue'

const userModels = computed(() => window.database.user.models)
const database = window.database

function modelTime(time) {
    return `${time} ${minuteSpell(time)}`
}

const form = ref(null)

function toggleForm() {
    form.value.toggle()
    // console.log(form.value)
    console.log("toggled form")
}

function modelImg(model) {
    return `img/model/256/${model.img}/${model.img}_${model.imgId}.jpg`
}


// setTimeout(() => console.log(data), 1000)

</script>

<template>
    <div class="main-grid">
        <div
            v-for="(model, index) in userModels" :key="index"
            class="model-card-container"
        >
            <div class="model-card">
                
                <div class="model-img">
                    <img
                        :src="modelImg(model)"
                        :alt="`${model.img}_${model.imgId}`"
                    />
                </div>
                
                <div class="model-name">{{model.name}}</div>
                
                <div class="model-params">
                    <div class="model-price">{{model.price}} ₽</div>
                    <div class="model-time">{{ modelTime(model.time) }}</div>
                </div>

                <!-- <div class="model-description">{{model.description}}</div> -->
            </div>
            <!-- <div class="card-column">
                <div class="model-name">{{model.name}}</div>
                <div class="model-yarn">Материал: {{model.yarn}}</div>
                <div class="model-time">Время: {{model.time}} минут</div>
            </div> -->
        </div>
        <AddModelCard @click="toggleForm()" />
    </div>
    <AddModelForm ref="form" />
    <!-- <button v-if="!form.visible" class="open-form-button" @click="form.toggle()">+</button> -->


</template>

<style scoped>

.main-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(108px, 1fr));
    gap: 8px;
    padding: 8px;
}


.model-card-container {
    cursor: pointer;
    overflow: hidden;

    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    outline: none;

    color: rgb(223, 223, 223);
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3) inset;

    min-height: auto;
    container-type: inline-size;

    /*
    border-radius: 8px;
    */
    display: flex;
}

.model-card {
    background-color: rgba(210, 26, 26, 0);
    width: 100cqw;
    height: calc(8px + 20px + 8px + 100cqw - 16px + 8px + 16px + 8px);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.model-img {
    width: calc(100cqw - 16px);
    aspect-ratio: 1/1;
}

.model-img img {
    width: calc(100cqw - 16px);
    height: calc(100cqw - 16px);
}

.model-name {
    height: 20px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.model-params {
    display: flex;
    justify-content: space-between;
    height: 16px;
    font-size: 12px;
}

.model-price, .model-time {
    height: 16px;
}



.model-description {
    height: 48px;
    line-height: 20px;
    font-size: 14px;
    overflow: scroll;
}



/*
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
    -webkit-user-select: none; /* Safari *
    -moz-user-select: none; /* Firefox *
    -ms-user-select: none; /* IE10+/Edge *
    color: #3bb43f;
    outline: none;
    box-shadow: 0 0 2px 5px #228725 inset;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
    font-size: 48px;
} */


</style>