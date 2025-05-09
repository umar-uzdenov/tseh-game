<script setup>
const { state, animation, name, duration } =
    defineProps(['state', 'animation', 'name', 'duration'])
</script>

<template>
    <div :class="`model-name-block ${state} ${animation}`" :style="`--duration: ${duration}`">
        <div class="model-label" v-if="state == 'expand'">Модель:</div>
        <div class="model-name">{{ name }}</div>
    </div>
</template>

<style scoped>

.model-name-block {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    left: 8px;
    bottom: 40px;
    height: 24px;
    width: calc((100vw - 8px * 4) / 3 - 16px);
}

.expand .model-name-block {
    left: 12px;
    bottom: 196px;
    width: calc(100vw - 72px);
    height: 28px;
    font-size: 20px;
    justify-content: space-between;
}

</style>