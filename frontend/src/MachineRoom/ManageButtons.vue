<script setup>
const { size, animation, duration } =
    defineProps(['size', 'animation', 'duration'])
</script>

<template>
    <div :class="`manage-buttons ${size} ${animation}`" :style="`--duration: ${duration}`">
        <div class="button stop-button">Отменить</div>
        <div class="button pause-button">Остановить</div>
        <div class="button add-button">Добавить</div>
    </div>
</template>

<style scoped>


/* manage buttons */

@keyframes manage-buttons-compact-frames {
    0% {
        bottom: 12px;
    }
    35% {
        bottom: -36px;
    }
    100% {
        bottom: -36px;
    }
}

@keyframes manage-buttons-expand-frames {
    0% {
        bottom: -36px;
    }
    65% {
        bottom: -36px;
    }
    100% {
        bottom: 12px;
    }
}

.manage-buttons {
    display: flex;
    justify-content:space-between;
    align-items: flex-end;
    gap: 8px;
    position: absolute;
    left: 12px;
    right: 12px;
    height: 32px;
}

.compact.manage-buttons {
    bottom: -36px;
}

.compact-animation.manage-buttons {
    animation: manage-buttons-compact-frames ease-in-out;
    animation-duration: var(--duration);
}

.expand.manage-buttons {
    bottom: 12px;
}

.expand-animation.manage-buttons {
    animation: manage-buttons-expand-frames ease-in-out;
    animation-duration: var(--duration);
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 32px;
    width: 100%;
    overflow: hidden;

    background-color: #0007;
    border-radius: 4px;user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
}

.stop-button {
    box-shadow: 0 0 2px 1px #F44336 inset;
    color: #F44336;
}

.pause-button {
    box-shadow: 0 0 2px 1px #FDD835 inset;
    color: #FDD835;
}

.add-button {
    box-shadow: 0 0 2px 1px #4CAF50 inset;
    color: #4CAF50;
}

</style>