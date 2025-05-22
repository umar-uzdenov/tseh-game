<script setup>
import { computed } from 'vue';

const { state, animation, model, duration } =
    defineProps(['state', 'animation', 'model', 'duration'])

const img = computed(() => {
    let prefix = "img/model/"
    if (state == "compact") prefix += "256/"
    if (state == "expand") prefix += "1024/"
    return `${prefix}${model.img}/${model.img}_${model.imgId}.jpg`
})
</script>

<template>
    <img
        :class="`model-img ${state} ${animation}`"
        :src="img"
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
