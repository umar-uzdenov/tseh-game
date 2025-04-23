<script setup>
import { useTgStore } from './stores/tg.js'
import { useTabsStore } from './stores/tabs.js'
import { reactive } from 'vue'

const tg = useTgStore().tg
const tgData = useTgStore().data
// console.log(tg.initData)
// console.log(tg.initData)



setTimeout(() => console.log(typeof tg.initData), 3000)

const tabs = useTabsStore().tabs

const current = reactive({
    value : tabs[0],
    is(name) { return this.value.name == name },
    set(tab) { this.value = tab },
    active(tab) { return this.value.name == tab.name ? "active" : "" }
})

const data = reactive({
    message: "lol",
})

launch(async () => {
    // const user = await get('/api/user', { tgid: 0 })
    // data.message = user.balance
    data.message = await authTg(tg.initData)
})


</script>

<template>
    <div class="header">
        <!-- <div>Баланс: 10 000 000 ₽</div> -->
        <div>{{ data.message }}</div>
         <!-- <div class="card-column" style="height:99px"> -->
            <!-- <div>{{ tgData.userName }}</div> -->
            <!-- <div>{{ tgData.userID }}</div> -->
            <!-- <button @click="tg.close()">Close app</button> -->
         <!-- </div> -->
    </div>
     
    <div class="tab-content">
        <WorkshopTab v-if="current.is(tabs.workshop)" />
        <StoreTab v-if="current.is(tabs.store)" />
        <!-- <MarketTab v-if="current.is(tabs.market)" /> -->
        <ProfileTab v-if="current.is(tabs.profile)" />
    </div>
    <div class="tab-btns">
        <button
            v-for="(tab, index) in tabs" :key="`tab-btn ${index}`"
            :class="`tab-btn ${ current.active(tab) }`"
            @click="current.set(tab)"
        >
            {{ tab.description }}
        </button>
    </div>
</template>
