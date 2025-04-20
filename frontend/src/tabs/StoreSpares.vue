<script setup>
import { useStoreSparesStore } from '@/stores/store/store-spares';
const spares = useStoreSparesStore().spares
</script>

<template>
    <div
        v-for="(spare, index) in spares" :key="index"
        class="card vertical"
    >
        <div class="card-row">
            <span class="product-name">{{spare.transcription}}</span>
            <span class="product-price">{{spare.price}} ₽</span>
        </div>
        <span class="product-name">{{spare.description}}</span>
        <div class="card-row">
            <span class="product-price">Количество</span>
            <input type="number" value="1" min="1" max="999">
            <button class="buy-btn">Купить</button>
        </div>
    </div>
</template>