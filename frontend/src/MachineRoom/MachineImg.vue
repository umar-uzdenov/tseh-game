<script setup>
const { size, animation, machine, duration } =
    defineProps(['size', 'animation', 'machine', 'duration'])
</script>

<template>
    <div
        :class="`machine-img ${size} ${animation}`"
        :style="`
            --img-url: url('img/machine/${machine.img}');
            --animation-duration: ${duration};
        `"
    ></div>
</template>

<style scoped>

@keyframes compact-frames {
    0% {
        width: 32px;
        height: 32px;
    }
    65% {
        width: 32px;
        height: 32px;
    }
    100% {
        width: 64px;
        height: 64px;
    }
}

@keyframes expand-frames {
    0% {
        width: 64px;
        height: 64px;
    }
    65% {
        width: 32px;
        height: 32px;
    }
    100% {
        width: 32px;
        height: 32px;
    }
}

.machine-img {
    position: absolute;
    background-image: var(--img-url);
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    left: 12px;
    top: 12px;
}

.machine-img.compact {
    width: 64px;
    height: 64px;
}

.machine-img.compact-animation {
    animation: compact-frames ease-in-out;
    animation-duration: var(--animation-duration);
}

.machine-img.expand {
    width: 32px;
    height: 32px;
}

.machine-img.expand-animation {
    animation: expand-frames ease-in-out;
    animation-duration: var(--animation-duration);

}

</style>