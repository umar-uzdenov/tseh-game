<script setup>
import { useTabsStore } from '@/stores/tabs.js'
import { reactive } from 'vue'

const subs = useTabsStore().tabs.find(tab => tab.name == 'workshop').sub

const current = reactive({
    value : 'machines',
    is(name) { return this.value == name },
    select(name) { this.value = name },
})

</script>

<template>
    <div class="main-grid">
        <WorkshopMachines v-if="current.is('machines')" />
        <WorkshopModels v-if="current.is('models')" />
        <WorkshopWarehouse v-if="current.is('warehouse')" />
    </div>
    <SubTabButtons v-if="false" :subs="subs" :current="current"/>
</template>