<script setup>
import { useTgStore } from './stores/tg.js'
import { useTabsStore } from './stores/tabs.js'
import { reactive } from 'vue'
import MachineRoom from './MachineRoom/MachineRoom.vue'

const tg = useTgStore().tg
const data = useTgStore().data

console.log(database.test)


const tabs = useTabsStore().tabs

const current = reactive({
    value : tabs[0],
    change: "",
    is(name) { return this.value.name == name },
    set(tab) {
        if (tab.name == this.value.name) return

        this.change = "change"
        setTimeout(() => {
            this.value = tab
        }, 200)
        setTimeout(() => {
            this.change = ""
        }, 500)
    },
    active(tab) { return this.value.name == tab.name ? "active" : "" }
})

const menu = reactive({
    expanded: false,
    class: "",
    bgClass: "",
    toggle() {
        this.expanded = !this.expanded
        this.class = this.expanded ? "expanded" : ""
        this.bgClass = this.expanded ? "faded" : ""
    }
})



</script>

<template>
    <BalanceButton />
    <div :class="`tab-content ${menu.bgClass} ${current.change}`">
        <div class="main-grid">
            <MachineRoom v-if="current.is(tabs.workshop)" />
            <WorkshopMachines v-if="false" />
            <WorkshopModels v-if="current.is(tabs.models)" />
            <WorkshopWarehouse v-if="current.is(tabs.warehouse)" />
            <WorkshopYarns v-if="current.is(tabs.yarns)" />
            <StoreMachines v-if="current.is(tabs.machineStore)" />
            <StoreYarns v-if="current.is(tabs.yarnStore)" />
            <Profile v-if="current.is(tabs.profile)" />
            <Rating v-if="current.is(tabs.rating)" />
        </div>
    </div>
    <Menu :menu="menu" :current="current"/>
</template>

<style scoped>

.tab-content.faded {
    opacity: .8;
    filter: blur(3px)
}

.tab-content.change {
    animation: change-tab .5s;
}

@keyframes change-tab {
    0% {
        opacity: .8;
        filter: blur(3px)
    }
    40% {
        opacity: .3;
        filter: blur(5px)
    }
    100% {
        opacity: 1;
        filter:none;
    }
}

</style>