<script setup>
const { state, animation, duration } =
    defineProps(['state', 'animation', 'duration'])
</script>

<template>
    <div
        :class="`manage-buttons ${state} ${animation}`"
        :style="`--duration: ${duration}`"
        v-if="state == 'expand'"
    >
        <div class="button stop-button">Отменить</div>
        <div class="button pause-button">Остановить</div>
        <div class="button add-button">Добавить</div>
    </div>
</template>

<style scoped>

.manage-buttons {
    display: flex;
    justify-content:space-between;
    align-items: flex-end;
    gap: 8px;
    position: absolute;
    left: 12px;
    width: calc(100vw - 72px);
    height: 32px;
}

.expand.manage-buttons {
    bottom: 12px;
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
    color: #ff2515;
}

.pause-button {
    box-shadow: 0 0 2px 1px #FDD835 inset;
    color: #ffd930;
}

.add-button {
    box-shadow: 0 0 2px 1px #4CAF50 inset;
    color: #3bb43f;
}

</style>