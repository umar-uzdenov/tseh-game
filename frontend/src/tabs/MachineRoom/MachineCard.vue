<script setup>
import { reactive } from 'vue'
import MachineImg from './MachineImg.vue'
import ModelImg from './ModelImg.vue'
import MachineName from './MachineName.vue'
import ModelName from './ModelName.vue'
import ModelDescription from './ModelDescription.vue'
import ModelQuantity from './ModelQuantity.vue'
import ManageButtons from './ManageButtons.vue'
import CloseButton from './CloseButton.vue'

const { machine, index } = defineProps(['machine', 'index'])
const database = window.database

const card = reactive({
    rect: {},
    state: "compact",
    animation: "",
    duration: '.7s',
    compact() {
        this.state = "compact"
        this.animation = "compact-animation"
    },
    expand(event) {
        this.rect = event.currentTarget.getBoundingClientRect()
        this.state = "expand"
        this.animation = "expand-animation"
    },
    toggle(event) {
        if (this.state == "compact") this.expand(event)
        else if (this.state == "expand") this.compact()
    }
})

</script>

<template>
    <div
        :class="`card card-${index} ${card.state} ${card.animation}`"
        :style="`--duration: ${card.duration}`"
    >
        <div class="background" @click="card.toggle"></div>
        <div class="window">
            <CloseButton :card="card" />
            <MachineImg
                :state="card.state"
                :animation="card.animation"
                :machine="machine"
                :duration="card.animationDuration"
            />
            <ModelImg
                :state="card.state"
                :animation="card.animation"
                :model="database.user?.models[machine?.currentModelId]"
                :duration="card.animationDuration"
            />
            <MachineName
                :state="card.state"
                :animation="card.animation"
                :name="machine.name"
                :distinct="machine.distinctName"
                :duration="card.animationDuration"
            />
            <ModelName
                :state="card.state"
                :animation="card.animation"
                :name="database.user?.models[machine?.currentModelId]?.name"
                :duration="card.animationDuration"
            />
            <ModelDescription
                :state="card.state"
                :animation="card.animation"
                :model="database.user?.models[machine?.currentModelId]"
                :duration="card.animationDuration"
            />
            <ModelQuantity
                :state="card.state"
                :animation="card.animation"
                :quantity-left="machine.quantityLeft"
                :quantity="machine.quantity"
                :duration="card.animationDuration"
            />
            <ManageButtons
                :state="card.state"
                :animation="card.animation"
                :model="database.user?.models[machine?.currentModelId]"
                :duration="card.animationDuration"
            />
        </div>
    </div>
</template>

<style scoped>

.card {
    position: absolute;
    cursor: pointer;
    overflow: hidden;

    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -webkit-touch-callout: none;

    border-radius: 8px;
    color: rgb(223, 223, 223);
}

.card, .background, .window {
    width: calc((100vw - 32px) / 3);
    height: calc((100vw - 13 * 8px) / 6 + 112px);
}

.card-0 {
    left: 0px;
    background-color: rgba(0, 128, 0, 0);
}

.card-1 {
    left: calc((100vw - 32px) / 3 + 8px);
    background-color: rgba(0, 0, 255, 0);
}

.card-2 {
    left: calc((100vw - 32px) / 3 * 2 + 8px * 2);
    background-color: rgba(255, 255, 0, 0);
}

.card-x {
    position: relative;
    background-color: rgba(255, 0, 204, 0);
}

.background, .window {
    position: absolute;
}

.compact .background {
    backdrop-filter: unset;
    z-index: 10;
}

.expand .background {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 20;
}


.window {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 2px 2px black inset;
}

.compact .window {
    width: calc((100vw - 32px) / 3);
    height: calc((100vw - 13 * 8px) / 6 + 112px);
}

.expand .window {
    position: fixed;
    z-index: 30;
    left: 24px;
    top: calc((100vh - 100vw - 252px) / 2);
    width: calc(100vw - 48px);
    height: calc(100vw + 252px);
    background-color: rgb(15, 15, 15);
    box-shadow: 0 0 14px 3px rgba(95, 95, 95, 0.5) inset;
}

</style>