<script setup>
const { size, animation, name, distinct, duration } =
    defineProps(['size', 'animation', 'name', 'distinct', 'duration'])

</script>

<template>
    <div :class="`machine-name ${size} ${animation}`" :style="`--duration: ${duration}`">
        <span class="machine-name">{{ name + " " + distinct }}</span>
    </div>
</template>

<style scoped>

@keyframes machine-name-compact-frames {
    0% {
        left: 96px;
        top: 12px;
        right: 96px;
        height: 32px;
        font-size: 24px;
    }
    65% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 32px;
        font-size: 16px;
    }
    100% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 28px;
        font-size: 16px;
    }
}

@keyframes machine-name-expand-frames {
    0% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 28px;
        font-size: 16px;
    }
    35% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 32px;
        font-size: 16px;
    }
    100% {
        left: 96px;
        top: 12px;
        right: 96px;
        height: 32px;
        font-size: 24px;
    }
}

.machine-name {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.machine-name.compact {
    left: 156px;
    top: 12px;
    right: 12px;
    height: 28px;
    font-size: 16px;
}

.machine-name.compact-animation {
    animation: machine-name-compact-frames ease-in-out;
    animation-duration: var(--duration);
}

.machine-name.expand {
    left: 96px;
    top: 12px;
    right: 96px;
    height: 32px;
    font-size: 24px;
}

.machine-name.expand-animation {
    animation: machine-name-expand-frames ease-in-out;
    animation-duration: var(--duration);
}

</style>