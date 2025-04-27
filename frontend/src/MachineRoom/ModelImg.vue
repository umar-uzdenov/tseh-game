<script setup>
const { size, animation, model, duration } =
    defineProps(['size', 'animation', 'model', 'duration'])
</script>

<template>
    <div
        :class="`model-icon ${size} ${animation}`"
        :style="`
            --img-url: url('img/model/${model.img}');
            --animation-duration: ${duration};
        `"
    ></div>
</template>

<style scoped>

@keyframes compact-frames {
    0% {
        left: 12px;
        top: 52px;
        width: 136px;
        height: 136px;
    }
    65% {
        left: 84px;
        top: 52px;
        width: 64px;
        height: 64px;
    }
    100% {
        left: 84px;
        top: 12px;
        width: 64px;
        height: 64px;
    }
}

@keyframes expand-frames {
    0% {
        left: 84px;
        top: 12px;
        width: 64px;
        height: 64px;
    }
    35% {
        left: 84px;
        top: 52px;
        width: 64px;
        height: 64px;
    }
    100% {
        left: 12px;
        top: 52px;
        width: 136px;
        height: 136px;
    }
}

.model-icon {
    position: absolute;
    background-image: var(--img-url);
    background-size: cover;
    background-position: center;
    border-radius: 4px;
}

.model-icon.compact {
    left: 84px;
    top: 12px;
    width: 64px;
    height: 64px;
}

.model-icon.compact-animation {
    animation: compact-frames ease-in-out;
    animation-duration: var(--animation-duration);
}

.model-icon.expand {
    left: 12px;
    top: 52px;
    width: 136px;
    height: 136px;
}

.model-icon.expand-animation {
    animation: expand-frames ease-in-out;
    animation-duration: var(--animation-duration);
}


</style>