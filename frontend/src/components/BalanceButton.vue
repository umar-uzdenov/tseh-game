<script setup>
import { computed, reactive } from 'vue'
const platformIndex = ["ios", "android", "tdesktop", "unknown"]
    .indexOf(tg.platform.toLowerCase())
    // .indexOf(window.Telegram.WebApp.platform.toLowerCase())

const balance = computed(() => window.database.user.balance)

const balanceButton = reactive({
    value: window.database.user.balance,
    top: [62, 48, 64, 16][platformIndex] + "px",
    height: [30, 28, 64, 24][platformIndex] + "px",
    width: [160, 224, 320, 160][platformIndex] + "px",
    fontSize: [20, 18, 40, 16][platformIndex] + "px",
    radius: [15, 14, 32, 12][platformIndex] + "px",
    left: ["132px", "112px", "40px", "calc(100vw / 2 - 80px)"][platformIndex]
})

</script>

<template>
    <button class="balance" :style="`
        top: ${balanceButton.top};
        left: ${balanceButton.left};
        height: ${balanceButton.height};
        min-height: ${balanceButton.height};
        font-size: ${balanceButton.fontSize};
        width: ${balanceButton.width};
        min-width: ${balanceButton.width};
        border-radius: ${balanceButton.radius};
    `">
        {{ balance }} ₽
    </button>
</template>

<style>

</style>