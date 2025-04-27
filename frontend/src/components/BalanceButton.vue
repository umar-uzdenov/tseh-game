<script setup>
import { reactive } from 'vue'
import { useTgStore } from '@/stores/tg.js'
const tg = useTgStore().tg
const platformIndex = ["ios", "android", "tdesktop", "unknown"]
    .indexOf(tg.platform.toLowerCase())
    // .indexOf(window.Telegram.WebApp.platform.toLowerCase())

const balanceButton = reactive({
    value: 0,
    top: [62, 48, 64, 16][platformIndex] + "px",
    height: [30, 28, 64, 24][platformIndex] + "px",
    width: [160, 224, 320, 160][platformIndex] + "px",
    fontSize: [20, 18, 40, 16][platformIndex] + "px",
    radius: [15, 14, 32, 12][platformIndex] + "px",
    left: ["132px", "112px", "40px", "calc(100vw / 2 - 80px)"][platformIndex]
})

launch(async () => {
    const userData = await get("/api/user", { tgId: useTgStore().data.userId })
    balanceButton.value = userData.balance
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
        {{ balanceButton.value }} ₽
    </button>
</template>

<style>
.balance {
    position: fixed;
    z-index: 100;
    display: flex;
}

.balance {
    border: none;
    cursor: pointer;;
    color: rgb(223, 223, 223);
    align-items: center;
    justify-content: center;
}

.balance {
    background-color:rgba(0, 0, 0, 0.5)
}
</style>