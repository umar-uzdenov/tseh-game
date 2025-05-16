<script setup>
import { computed } from 'vue';

const { state, animation, machine, duration } =
    defineProps(['state', 'animation', 'machine', 'duration'])

const item = computed(() => window.database.user.items
    .find(item => item.id == machine.currentItemId))

</script>

<template>
    <div v-if="item" :class="`block ${state} ${animation}`">
        <div class="label" v-if="state == 'expand'">Осталось:</div>
        <div class="quantity">
            {{ item.quantityLeft + " / " + item.quantity }} шт
        </div>
    </div>
</template>

<style scoped>

.block {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.compact.block {
    left: 8px;
    bottom: 8px;
    height: 24px;
    width: calc((100vw - 8px * 4) / 3 - 16px);
}

.expand.block {
    left: 12px;
    bottom: 52px;
    width: calc(100vw - 72px);
    height: 28px;
    font-size: 20px;
    justify-content: space-between;
}


</style>