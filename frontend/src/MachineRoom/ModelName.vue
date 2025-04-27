<script setup>
const { size, animation, name, duration } =
    defineProps(['size', 'animation', 'name', 'duration'])
</script>

<template>
    <div :class="`model-name-block ${size} ${animation}`" :style="`--duration: ${duration}`">
        <div class="model-label">Модель:</div>
        <div class="model-name">{{ name }}</div>
    </div>
    <div v-if="false" class="model-name-block">
        <div class="item">Модель:</div>
        <div class="item-name">{{ database.user?.models[machine?.currentModelId]?.name }}</div>
    </div>
</template>

<style scoped>


@keyframes block-compact-frames {
    0% {
        top: 52px;
    }
    65% {
        top: 48px;
    }
    100% {
        top: 48px;
    }
}

@keyframes block-expand-frames {
    0% {
        top: 48px;
    }
    35% {
        top: 48px;
    }
    100% {
        top: 52px;
    }
}

@keyframes model-name-compact-frames {
    0% {
        left: 100%;
        transform: translateX(-100%);
    }
    65% {
        left: 0%;
        transform: translateX(0%);
    }
    100% {
        left: 0%;
        transform: translateX(0%);
    }
}

@keyframes model-name-expand-frames {
    0% {
        left: 0%;
        transform: translateX(0%);
    }
    35% {
        left: 0%;
        transform: translateX(0%);
    }
    100% {
        left: 100%;
        transform: translateX(-100%);
    }
}

@keyframes item-compact-frames {
    0% {
        transform: translateX(0%);
    }
    65% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes item-expand-frames {
    0% {
        transform: translateX(-100%);
    }
    35% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.model-name-block {
    position: absolute;
    align-items: center;
    overflow: hidden;
    left: 156px;
    right: 12px;
    height: 28px;
}

.model-name-block .model-label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    right: auto;
}

.model-name-block .model-name {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    right: auto;
}

.compact.model-name-block {
    top: 48px;
}

.compact-animation.model-name-block {
    animation: block-compact-frames ease-in-out;
    animation-duration: var(--duration);
}

.compact.model-name-block .model-label {
    top: 0;
    transform: translateX(-100%);
}

.compact-animation.model-name-block .model-label {
    animation: item-compact-frames 1s ease-in-out;
}

.compact.model-name-block .model-name {
    left: 0%;
    top: 0;
    transform: translateX(0%);
}

.compact-animation.model-name-block .model-name {
    animation: model-name-compact-frames 1s ease-in-out;
}

.expand.model-name-block .model-label {
    top: 0;
    transform: translateX(0%);
}

.expand-animation.model-name-block .model-label {
    animation: item-expand-frames 1s ease-in-out;
}

.expand.model-name-block {
    top: 52px;
}

.expand-animation.model-name-block {
    animation: block-expand-frames ease-in-out;
    animation-duration: var(--duration);
}

.expand.model-name-block .model-name {
    left: 100%;
    top: 0;
    transform: translateX(-100%);
}

.expand-animation.model-name-block .model-name {
    animation: model-name-expand-frames 1s ease-in-out;
}


</style>