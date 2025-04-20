<script setup defer>
import { useStoreMachinesStore } from '@/stores/store/store-machines.js'
const machines = useStoreMachinesStore().machines
</script>

<template>
    <div
        v-for="(machine, index) in machines" :key="index"
        class="card vertical"
    >
        <div class="card-row">
            <div class="icon-img" style="--icon-img-url: url('img/sturm.jpg');">
                <!-- todo: Поставить загрузку изображения из данных машины -->
            </div>
            <span class="machine-name">{{ machine.name }}</span>
            <span>{{ machine.state.description }}</span>
        </div>

        <div class="card-row">
            <span>Цена: {{machine.price}} млн ₽</span>
            <button class="buy-btn">Купить</button>
        </div>
    </div>
</template>