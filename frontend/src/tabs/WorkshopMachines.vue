<script setup defer>
import { useUserMachinesStore } from '@/stores/user/user-machines.js'
const machines = useUserMachinesStore().machines
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
            <span :class="`status-${machine.status.style}`">
                {{ machine.status.description }}
            </span>
        </div>

        <div class="machine-maintenance">
            <span>Обслуживание:</span>
            <span>{{ machine.lastMaintenance }}</span>
        </div>
    </div>
</template>