<script setup>
import { useUserWarehousesStore } from '@/stores/user/user-warehouse'
const warehouse = useUserWarehousesStore().warehouse

function sell(item) {
    console.log("Продано: " + item.name + " " + item.quantity + " штук")
}
</script>

<template>
    <div v-if="warehouse.length == 0" class="empty-message">Склад изделий пуст</div>
    <div v-if="warehouse.length != 0" class="main-grid">
        <div
            v-for="(item, index) in warehouse" :key="index"
            class="card horizontal"
        >
        <div class="card-icon" :style="`--icon-url: url('../img/model/${item.url}');`"></div>
        <div class="card-column">
            <div class="card-row">
                <span>{{item.name}}</span>
                <span>{{item.quantity}} шт</span>
            </div>
            <button class="ok-button" @click="sell(item)">Продать</button>
        </div></div>
    </div>
</template>