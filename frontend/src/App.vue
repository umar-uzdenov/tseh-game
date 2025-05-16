<script setup>
import { reactive } from 'vue'
import MachineRoom from './tabs/MachineRoom/MachineRoom.vue'
import BalanceButton from './components/BalanceButton.vue'
import Menu from './components/Menu.vue'
import UserModels from './tabs/UserModels/UserModels.vue'
import tabs from './tabs.js'

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

const platformIndex = ["ios", "android", "tdesktop", "unknown"]
    .indexOf(tg.platform.toLowerCase())

const top = [62, 48, 64, 16][platformIndex] + "px"
const height = [30, 28, 64, 24][platformIndex] + "px"



</script>

<template>
    <BalanceButton />
    <div
        :class="`tab-content ${menu.bgClass} ${current.change}`"
        :style="`--top: ${top}`"
    >
        <div class="main-grid" :style="`--top-height: ${height};`">
            <MachineRoom v-if="current.is(tabs.workshop)" />
            <UserModels v-if="current.is(tabs.models)" />
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


.tab-content {
    position: fixed;
    top: 0;
    padding-top: var(--top);
    padding-bottom: 48px;
    min-height: calc(100vh - 96px); /* Account for both tab bars */
    height: calc(100vh - 96px); /* Account for both tab bars */
    /* padding-bottom: 80px; */
    width: 100%;
    overflow: auto;
    mask-image: linear-gradient(
        to bottom,
        transparent 0vh,
        transparent var(--top),
        #fff3 calc(32px + var(--top)),
        white calc(48px + var(--top)),
        white calc(100vh - 48px),
        #fff3 calc(100vh - 32px),
        transparent 100vh
    );
    /* background-color: #0007; */
    transition: 1s;
}
  
/* Style your content */
/* .content {
    padding: 20px;
} */

.main-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    padding-top: calc(var(--top-height) + 24px);
    padding-bottom: 160px;
}

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