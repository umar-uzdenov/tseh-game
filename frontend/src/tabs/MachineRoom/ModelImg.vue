<script setup>
const { state, animation, model, duration } =
    defineProps(['state', 'animation', 'model', 'duration'])
</script>

<template>
    <img
        :class="`model-img ${state} ${animation}`"
        :src="`img/model/${model.img}/${model.img}_${model.imgId}.jpg`"
        alt="model image"
    />
</template>

<style scoped>

.model-img {
    position: absolute;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
    transform-origin: left top;
    animation-duration: var(--duration);
    animation-timing-function: ease-in-out;

    left: calc((100vw - 8px * 13) / 6 + 2 * 8px);
    top: 40px;
    width: calc((100vw - 8px * 13) / 6);
    height: calc((100vw - 8px * 13) / 6);
}

.expand.model-img {
    left: 12px;
    top: 88px;
    width: calc(100vw - 72px);
    height: calc(100vw - 72px);
}

</style>
