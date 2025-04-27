<script setup>
import { reactive } from 'vue'
import MachineIcon from './MachineImg.vue'
import ModelIcon from './ModelImg.vue'
import MachineName from './MachineName.vue'
import ModelName from './ModelName.vue'
import ModelDescription from './ModelDescription.vue'
import ModelQuantity from './ModelQuantity.vue'
import ManageButtons from './ManageButtons.vue'

const database = window.database

const card = reactive({
    class: [],
    animation: [],
    animationDuration: '1s',
    async toggle(index) {
        if (this.class[index] == "compact") {
            this.class[index] = "expand"
            this.animation[index] = "expand-animation"
        } else if (this.class[index] == "expand") {
            this.class[index] = "compact"
            this.animation[index] = "compact-animation"
        }
    }
})

launch(async () => { // todo: simplify
    for (let i = 0; i <= 9; i++) {
        try {
            console.log("index", i)
            if (database?.user?.machines?.length && card.class[0] === undefined) {
                card.class = database.user.machines.map(() => "compact")
                card.animation = database.user.machines.map(() => "")
                return
            } else {
                await sleep(10)
            }
        } catch (e) {
            console.log("index", i, "lol")
            await sleep(10)
        }
    }
})

</script>

<template>
    <div
        v-for="(machine, index) in database.user.machines" :key="index"
        :class="`machine-card ${card.class[index]} ${card.animation[index]}`"
        @click="card.toggle(index)"
    >
        <MachineIcon
            :size="card.class[index]"
            :animation="card.animation[index]"
            :machine="machine"
            :duration="card.animationDuration"
        />

        <ModelIcon
            :size="card.class[index]"
            :animation="card.animation[index]"
            :model="database.user?.models[machine?.currentModelId]"
            :duration="card.animationDuration"
        />

        <MachineName
            :size="card.class[index]"
            :animation="card.animation[index]"
            :name="machine.name"
            :distinct="machine.distinctName"
            :duration="card.animationDuration"
        />

        <ModelName
            :size="card.class[index]"
            :animation="card.animation[index]"
            :name="database.user?.models[machine?.currentModelId]?.name"
            :duration="card.animationDuration"
        />

        <ModelDescription
            :size="card.class[index]"
            :animation="card.animation[index]"
            :model="database.user?.models[machine?.currentModelId]"
            :duration="card.animationDuration"
        />

        <ModelQuantity
            :size="card.class[index]"
            :animation="card.animation[index]"
            :quantity-left="machine.quantityLeft"
            :quantity="machine.quantity"
            :duration="card.animationDuration"
        />

        <ManageButtons
            :size="card.class[index]"
            :animation="card.animation[index]"
            :model="database.user?.models[machine?.currentModelId]"
            :duration="card.animationDuration"
        />
    </div>
</template>

<style scoped>

/* card */

:root {
    --animation-duration: 1s;
}

@keyframes machine-card-compact-frames {
    0% {
        height: 240px;
    }
    60% {
        height: 240px;
    }
    100% {
        height: 88px;
    }
}

@keyframes machine-card-expand-frames {
    0% {
        height: 88px;
    }
    40% {
        height: 240px;
    }
    100% {
        height: 240px;
    }
}

.machine-card {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */

    border-radius: 8px;
    background: rgba(0, 10, 0, 0.7);
    color: rgb(223, 223, 223);
    box-shadow: 0 0 32px 2px black inset;
    height: 88px;
}

.compact.machine-card {
    height: 88px;
}

.compact-animation.machine-card {
    animation: machine-card-compact-frames 1s ease-in-out;
}

.expand.machine-card {
    height: 240px;
}

.expand-animation.machine-card {
    animation: machine-card-expand-frames 1s ease-in-out;
}

.machine-card div {
    transition: all 1s ease-in-out;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
}

</style>