<script setup>
import { computed, reactive } from 'vue'
import MachineIcon from './MachineImg.vue'
import ModelIcon from './ModelImg.vue'
import MachineName from './MachineName.vue'
import ModelName from './ModelName.vue'
import ModelDescription from './ModelDescription.vue'
import ModelQuantity from './ModelQuantity.vue'
import ManageButtons from './ManageButtons.vue'
import MachineCard from './MachineCard.vue'
import MachineLine from './MachineLine.vue'

const database = window.database

const lines = computed(() => {
    // console.log("machines", database.user.machines.length)
    try {
        const lines = []
        for (let index = 0; index < window.database.user.machines.length; index += 3) {
            lines.push(window.database.user.machines.slice(index, index + 3))
        }
        return lines
    } catch (error) {
        console.log(error)
    }
})

</script>

<template>
    <div class="main-grid>">
        <MachineLine v-for="(line, index) in lines" :key="index" :machines="line" />
    </div>
</template>

<style scoped>

.main-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    padding-top: calc(var(--top-height) + 24px);
    padding-bottom: 160px;
}
</style>