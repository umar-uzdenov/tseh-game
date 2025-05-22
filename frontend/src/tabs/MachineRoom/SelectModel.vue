<script setup>
import { computed, ref } from 'vue'

const { machine, card } = defineProps(['machine', 'card'])

const models = computed(() => window.database.user.models)
// card.modelId = 0

function selectModel(modelId) {
    card.order.model = modelId
    card.order.modelError = false
    // console.log(card.order)
    // console.log({model: modelId, quantity: card.modelQuantity})
}

function modelTime(time) {
    return `Время: ${time} ${minuteSpell(time)}`
}

function setQuantity(number) {
    card.order.quantity = card.order.quantity * 10 + number
    if (card.order.quantity > 0 && card.order.quantity <= 1000) card.order.quantityError = false
}

function erase() {
    card.order.quantity = Math.floor(card.order.quantity / 10)
    if (card.order.quantity > 0 && card.order.quantity <= 1000) card.order.quantityError = false
}

</script>

<template>
  <div class="select-model" :class="{ error: card.order.modelError == true }">
    <div
        v-for="(model, index) in models" :key="index"
        class="model-line"
        :class="{ selected: card.order.model == model.id }"
        @click="selectModel(model.id)"
    >
        <img
            class="model-img"
            :src="`img/model/64/${model.img}/${model.img}_${model.imgId}.jpg`"
            alt="model image"
        />

        <div class="model-column">
            <div class="model-name">{{model.name}}</div>
            <div class="model-time">{{ modelTime(model.time) }}</div>
        </div>
    </div>
    
    
  </div>
  <div class="quantity-input">
    <div class="quantity-line">
        <span>Количество ( 1 - 1000 ) :</span>
        <input
            :class="{ error: card.order.quantityError }"
            id="quantity" type="number" v-model.number="card.order.quantity"
        />
        <div class="erase" @click="erase()">⌫</div>
    </div>
    <div class="quantity-buttons">
        <div v-for="num in 10" :key="num" @click="setQuantity(num - 1)">{{ num - 1 }}</div>
    </div>
  </div>
</template>

<style scoped>
.select-model {
    position: absolute;


    left: 12px;
    top: 88px;
    width: calc(100vw - 72px);
    height: calc(100vw - 12px);
    display: flex;
    flex-direction: column;
    overflow: scroll;
}

.error {
    box-shadow: 0 0 2px 2px #ff2515;
}

.model-line {
    width: 100%;
    height: 88px;
    display: flex;
    padding: 12px;
    gap: 12px;
}

.model-line.selected {
    background-color: rgb(63, 63, 63);
}

.model-img {
    width: 64px;
    height: 64px;
}

.model-column {
    display: flex;
    flex-direction: column;
    gap: 8px
}


.quantity-input {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    position: absolute;
    top: calc(100vw + 72px);
    width: calc(100vw - 72px);
    left: 12px;
    height: 110px;
}

.quantity-line {
    display: flex;
    width: 100%;
    height: 32px;
}

.quantity-line span {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quantity-input input {
    width: 20%;
    padding: 4px 8px;
    font-size: 16px;
}

.erase {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quantity-buttons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 72px;
}

.quantity-buttons div {
    height: 36px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    border: none;
    outline: none;
    width: 100%;
    user-select: none;
}
</style>
