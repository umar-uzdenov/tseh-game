<script setup>
import { reactive, ref } from 'vue'
import MachineCard from './MachineCard.vue';

const { machines } = defineProps(['machines'])

const swipe = reactive({
    start: 0,
    handleStart(event) {
        this.start = event.changedTouches[0].screenX
    },
    handleEnd(event) {
        const delta = event.changedTouches[0].screenX- this.start

        if (Math.abs(delta) > 50) { // threshold for swipe
            if (delta > 0) {
                console.log('swipe to right')
            } else {
                console.log('swipe to left')
            }
        }
    }
})

</script>

<template>
    <div
        v-if="(machines.length == 3)" class="line"
        @touchstart="swipe.handleStart" @touchend="swipe.handleEnd"
    >
        <MachineCard
            v-for="(machine, index) in machines"
            :key="index"
            :machine="machine"
            :index="index"
        />
    </div>
    <div v-if="machines.length < 3" class="partial-line">
        <MachineCard
            v-for="(machine, index) in machines"
            :key="index"
            :machine="machine"
            index="x"
        />
    </div>
</template>

<style scoped>

.line {
    position: relative;
    width: calc(100vw - 16px);
    height: calc((100vw - 13 * 8px) / 6 + 112px);
    background-color: rgba(255, 0, 0, 0);
    display: flex;
}

.partial-line {
    position: relative;
    width: calc(100vw - 16px);
    height: calc((100vw - 13 * 8px) / 6 + 112px);
    background-color: rgba(0, 255, 238, 0);
    display: flex;
    justify-content: flex-start;
    gap: 8px;
}

</style>