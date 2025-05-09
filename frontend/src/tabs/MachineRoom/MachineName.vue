<script setup>
const { state, animation, name, distinct, duration } =
    defineProps(['state', 'animation', 'name', 'distinct', 'duration'])

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
const expandScaleX = (width - 96)

</script>

<template>
    <div
        :class="`machine-name ${state} ${animation}`"
    >
        <span class="">{{ name }}</span>
        <span>{{ distinct }}</span>
    </div>
</template>

<style scoped>

.machine-name {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-timing-function: ease-in-out;
    animation-duration: var(--duration);

    left: 8px;
    top: 8px;
    width: calc((100vw - 8px * 4) / 3 - 16px);
    height: 24px;
}

.machine-name.compact {
    font-size: 12px;
    gap: 8px;
}

.machine-name.expand {
    font-size: 24px;
    flex-direction: column;
    gap: 12px;

    left: 88px;
    top: 12px;
    width: calc(100vw - 96px * 2);
    height: 64px;
}

</style>