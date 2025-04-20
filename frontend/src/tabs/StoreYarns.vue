<script setup>
import { useStoreYarnsStore } from '@/stores/store/store-yarns';
const yarns = useStoreYarnsStore().yarns
</script>

<template>
    <div
        v-for="(yarn, index) in yarns" :key="index"
        class="card vertical"
    >
        <div class="card-row">
            <div>{{yarn.name}}</div>
            <div>{{yarn.price.toFixed(0)}} ₽</div>
        </div>
        <div>Состав: {{yarn.composition}}</div>
        <div class="card-row">
            <div>Килограмм</div>
            <input type="number" class="yarn-quantity" value="1" min="1" max="10000">
            <button class="buy-btn">Купить</button>
        </div>
    </div>
</template>