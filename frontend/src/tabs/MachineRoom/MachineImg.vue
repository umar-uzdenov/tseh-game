<script setup>
const { state, animation, machine, duration } =
    defineProps(['state', 'animation', 'machine', 'duration'])
</script>

<template>
    <img
        :class="`machine-img ${state} ${animation}`"
        :src="`img/machine/${machine.img}`"
        alt="machine image"
    />
</template>

<style scoped>

.machine-img {
    transform-origin: left top;

    position: absolute;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;

    left: 8px;
    top: 40px;
    width: calc((100vw - 8px * 13) / 6);
    height: calc((100vw - 8px * 13) / 6);
}

.expand.machine-img {
    left: 12px;
    top: 12px;
    width: 64px;
    height: 64px;
}
</style>