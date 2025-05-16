<script setup>
const { state, animation, machine, duration } =
    defineProps(['state', 'animation', 'machine', 'duration'])

function isStopped() {
    return machine.currentItemId == -1 ? "stopped" : ""
}
</script>

<template>
    <img
        :class="`machine-img ${state} ${animation} ${isStopped()}`"
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

.compact.stopped.machine-img {
    width: calc((100vw - 8px * 10) / 3);
    height: calc((100vw - 8px * 10) / 3);
}

.expand.machine-img {
    left: 12px;
    top: 12px;
    width: 64px;
    height: 64px;
}
</style>