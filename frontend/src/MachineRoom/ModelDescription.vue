<script setup>
const { size, animation, model, duration} =
    defineProps(['size', 'animation', 'model', 'duration'])
</script>

<template>
    <div :class="`block ${size} ${animation}`" :style="`--duration: ${duration}`">
        <div class="yarn">{{ model.yarn }}</div>
        <div class="time">{{ model.time }} мин</div>
        <div class="description">{{ model.description }}</div>
    </div>
</template>

<style scoped>

@keyframes yarn-compact-frames {
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

@keyframes yarn-expand-frames {
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

@keyframes time-compact-frames {
    0% {
        transform: translateX(0%);
    }
    65% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(100%);
    }
}

@keyframes time-expand-frames {
    0% {
        transform: translateX(100%);
    }
    35% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes description-compact-frames {
    0% {
        transform: translateY(0%);
    }
    65% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(100%);
    }
}

@keyframes description-expand-frames {
    0% {
        transform: translateY(100%);
    }
    35% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
    }
}

.block {
    position: absolute;
    left: 156px;
    top: 84px;
    right: 12px;
    height: 72px;
    overflow: hidden;
}

.block div {
    display: flex;
    line-height: 22px;
    word-wrap: normal;
}

.block .yarn {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 22px;
}

.compact.block .yarn {
    transform: translateX(-100%);
}

.compact-animation.block .yarn {
    animation: yarn-compact-frames ease-in-out;
    animation-duration: var(--duration);
}

.expand.block .yarn {
    transform: translateX(0%);
}

.expand-animation.block .yarn {
    animation: yarn-expand-frames ease-in-out;
    animation-duration: var(--duration);
}

.block .time {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 22px;
}

.compact.block .time {
    transform: translateX(-100%);
}

.compact-animation.block .time {
    animation: time-compact-frames ease-in-out;
    animation-duration: var(--duration);
}

.expand.block .time {
    transform: translateX(0%);
}

.expand-animation.block .time {
    animation: time-expand-frames ease-in-out;
    animation-duration: var(--duration);
}

.block .description {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 25px;
    height: 47px;
}

.compact.block .description {
    transform: translateY(100%);
}

.compact-animation.block .description {
    animation: description-compact-frames ease-in-out;
    animation-duration: var(--duration);
}

.expand.block .description {
    transform: translateY(0%);
}

.expand-animation.block .description {
    animation: description-expand-frames ease-in-out;
    animation-duration: var(--duration);
}


</style>