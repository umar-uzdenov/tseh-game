<script setup>
const { size, animation, quantityLeft, quantity, duration } =
    defineProps(['size', 'animation', 'quantityLeft', 'quantity', 'duration'])
</script>

<template>
    <div :class="`block ${size} ${animation}`">
        <div class="label">Осталось:</div>
        <div class="quantity">
            {{ quantityLeft + " / " + quantity }} шт
        </div>
    </div>
</template>

<style scoped>

@keyframes block-compact-frames {
    0% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
    65% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
    100% {
        left: 156px;
        top: 48px;
        right: 12px;
        height: 28px;
    }
}

@keyframes block-expand-frames {
    0% {
        left: 156px;
        top: 48px;
        right: 12px;
        height: 28px;
    }
    35% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
    100% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
}

@keyframes label-compact-frames {
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

@keyframes label-expand-frames {
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

.block {
    position: absolute;
    align-items: center;
    overflow: hidden;
}

.block .label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    top: 0px;
    transform: translateX(-100%);
}

.block .quantity {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    right: 0px;
    top: 0px;
}

.compact.block {
    left: 156px;
    top: 48px;
    right: 12px;
    height: 28px;

}

.compact-animation.block {
    animation: block-compact-frames 1s ease-in-out
}

.compact-animation.block .label {
    animation: label-compact-frames 1s ease-in-out;
}

.expand.block .label {
    transform: translateX(0%);
}

.expand-animation.block .label {
    animation: label-expand-frames 1s ease-in-out;
}

.expand.block {
    left: 156px;
    top: 160px;
    right: 12px;
    height: 28px;
}

.expand-animation.block {
    animation: block-expand-frames 1s ease-in-out;
}


</style>