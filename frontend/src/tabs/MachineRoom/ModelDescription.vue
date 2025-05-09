<script setup>
const { state, animation, model, duration} =
    defineProps(['state', 'animation', 'model', 'duration'])
</script>

<template>
    <div
        :class="`block ${state} ${animation}`"
        :style="`--duration: ${duration}`"
        v-if="state == 'expand'"
    >
        <div class="top">
            <div class="yarn">{{ model.yarn }}</div>
            <div class="time">{{ model.time }} мин</div>
        </div>
        <div class="description">{{ model.description }}</div>
    </div>
</template>

<style scoped>

.block {
    position: absolute;
    width: 0px;
    height: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.expand.block {
    left: 12px;
    bottom: 92px;
    width: calc(100vw - 72px);
    height: 92px;
    font-size: 20px;
}

.top {
    height: 28px;
    display: flex;
    justify-content: space-between;align-items: center;
}

.description {
    height: 56px;
    line-height: 28px;
    text-align: center;
}

</style>