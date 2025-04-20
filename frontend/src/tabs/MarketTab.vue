<script setup>
import { useMarketStore } from '@/stores/market/market'
const market = useMarketStore().market
</script>

<template>
    <div class="main-grid">
        <div v-if="market.length == 0" class="empty-message">Склад изделий пуст</div>
        <div
            v-if="market.length != 0"
            v-for="(item, index) in market" :key="index"
            class="card horizontal"
        >
            <div class="card-icon" :style="`--icon-url: url('../img/model/${item.url}');`"></div>
            <div class="card-row">
                <span>{{item.name}}</span>
                <span>{{item.quantity}} шт</span>
                <span>{{item.price}} ₽</span>
            </div>
        </div>
    </div>
</template>