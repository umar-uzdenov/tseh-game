<script setup>
import { useTabsStore } from './stores/tabs.js'

const tabs = useTabsStore().tabs
const state = useTabsStore().state
function isTabActive(tab) { return state.tab == tab.name ? "active" : "" }
function activateTab(tab) {
    console.log(tab.name)
    state.tab = tab.name
    state.sub = tab.active
}
</script>

<template>
    <div class="header"><div>Баланс: 10 000 000 ₽</div></div>
     
    <div class="tab-content">
        <WorkshopTab v-if="state.tab == 'workshop'" />
        <StoreTab v-if="state.tab == 'store'" />
        <MarketTab v-if="state.tab == 'market'" />
        <ProfileTab v-if="state.tab == 'profile'" />
    </div>
    <div class="tab-btns">
        <button
            v-for="(tab, index) in tabs" :key="`tab-btn ${index}`"
            :class="`tab-btn ${tab.name} ${ isTabActive(tab) }`"
            @click="activateTab(tab)"
        >
            {{ tab.description }}
        </button>
    </div>
</template>
