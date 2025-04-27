<script setup>
import { useTabsStore } from '@/stores/tabs.js'
const tabs = useTabsStore().tabs
const props = defineProps(['menu', 'current'])

function activate(tab) {
    props.current.set(tab)
    props.menu.toggle()
}
</script>

<template>
    <div :class="`menu-block ${props.menu.class}`">
        <div
            v-for="(tab, index) in tabs" :key="index"
            :class="`menu-item-block ${props.menu.class}`"
        >
            <button class="menu-item" @click="activate(tab)">{{ tab.description }}</button>
            <div class="menu-separator"></div>
        </div>
        <div class="menu-button-block" @click="props.menu.toggle()">
            <div :class="`menu-icon ${props.menu.class}`"><div>></div></div>
            <button :class="`menu-button ${props.menu.class}`">Меню</button>
        </div>
    </div>
</template>

<style scoped>

.menu-block {
    position: fixed;
    z-index: 100;
    display: flex;
}

.menu-button, .menu-item {
    border: none;
    cursor: pointer;;
    color: rgb(223, 223, 223);
    align-items: center;
    justify-content: center;
}

.menu-block {
    bottom: 12px;
    left: calc(50vw - 60px);
    width: 120px;
    height: 32px;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;
}

.menu-block.expanded {
    height: calc(32px + 49px * 8);
    width: 200px;
    left: calc(50vw - 100px);
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
}

.menu-item-block {
    height: 49px;
    display: flex;
    flex-direction: column;
    align-items: center;

    opacity: 0%;
    transition: 0.8s;
}

.menu-item-block.expanded {
    opacity: 100%;
    transition: 1s;
}

.menu-button-block {
    position: absolute;
    bottom: 0;
    height: 32px;
    width: 120px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    cursor: pointer;
}

@keyframes icon-expand {
    0% {
        right: 16px;
        rotate: -90deg;
    }
    50% {
        right: 16px;
        rotate: 90deg;
    }
    100% {
        right: 52px;
        rotate: 90deg;
    }
}

@keyframes icon-compact {
    0% {
        right: 52px;
        rotate: 90deg;
    }
    50% {
        right: 16px;
        rotate: 90deg;
    }
    100% {
        right: 16px;
        rotate: -90deg;
    }
}

.menu-icon {
    height: 16px;
    width: 16px;
    overflow: hidden;
    position: absolute;
    right: 16px;
    bottom: 6px;
    font-weight: bold;
    font-size: 20px;
    rotate: -90deg;
    animation: icon-compact .5s ease-in-out;
}

.menu-icon.expanded {
    right: 52px;
    rotate: 90deg;
    animation: icon-expand .5s ease-in-out;
}

.menu-icon div {
    position: absolute;
    left: 2px;
    top: -5px;
}

.menu-button {
    height: 32px;
    width: 120px;
    background-color: transparent;
    position: absolute;
    bottom: 0px;
    transition: .5s
}

.menu-button.expanded {
    bottom: -24px;
    transition: 0.2s;
}

.menu-item {
    height: 48px;
    width: 200px;
    font-size: 16px;
    background-color: transparent;
    font-family: sans-serif;
    font-weight: 100; /* Make letters thinner */
    letter-spacing: 2px; /* Increase spacing between letters */
}

.menu-separator {
    height: 1px;
    border-radius: 0.5px;
    width: 64px;
    background-color: rgb(149, 149, 149);
}



</style>