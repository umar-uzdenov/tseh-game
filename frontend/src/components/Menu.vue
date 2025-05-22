<script setup>
import tabs from '@/tabs.js'
import { computed } from 'vue'
const props = defineProps(['menu', 'current'])

const balance = computed(() => {
    try {
        return window.database.user.balance
            .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    } catch (e) {
        return "0"
    }
})

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
            <button class="menu-item no-select" @click="activate(tab)">{{ tab.description }}</button>
            <div class="menu-separator no-select"></div>
        </div>
        <div class="menu-button-block no-select" @click="props.menu.toggle()">
            <div>{{ balance }}  ₽</div>
            <button class="menu-button">Меню</button>
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
    bottom: 16px;
    left: 16px;
    right: 16px;
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
    height: calc(32px + 49px * 6);
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
    width: 100%;
    padding: 0px 16px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.menu-button {
    height: 32px;
    background-color: transparent;
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