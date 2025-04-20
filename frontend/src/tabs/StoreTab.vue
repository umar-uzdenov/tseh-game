<script setup>
import { useTabsStore } from '../stores/tabs.js'
import { reactive } from 'vue'

const subs = useTabsStore().tabs.find(tab => tab.name == 'store').sub
console.log(subs.map(sub => sub.name))

const current = reactive({
    value : 'machines',
    is(name) { return this.value == name },
    select(name) { this.value = name },
})

</script>

<template>
    <div class="main-grid">
        <StoreMachines v-if="current.is('machines')" />
        <StoreSpares v-if="current.is('spares')" />
        <StoreYarns v-if="current.is('yarns')" />
    </div>
    <SubTabButtons :subs="subs" :current="current"/>
</template>