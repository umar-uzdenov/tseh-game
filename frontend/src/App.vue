<script setup>
import { useTgStore } from './stores/tg.js'
import { useTabsStore } from './stores/tabs.js'
import { reactive } from 'vue'

const tg = useTgStore().tg
const tabs = useTabsStore().tabs
const current = reactive({
    value : tabs[0],
    is(name) { return this.value.name == name },
    set(tab) { this.value = tab },
    active(tab) { return this.value.name == tab.name ? "active" : "" }
})

window.onload = init;

const tgData = reactive({})

function init() {
  // Show user info
  if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    tgData.userName = `Name: ${user.first_name || ''} ${user.last_name || ''}`;
    tgData.userID = `ID: ${user.id}`;
  } else {
    tgData.userName = 'User info not available.';
    tgData.userID = 'User info not available.';
  }

  // Button event listeners
  tgData.sendData = () => {
    tg.sendData('Hello from Web App!');
  }

  tgData.openLink = () => {
    tg.openLink('https://core.telegram.org/bots/webapps');
  }

  
    // tg.expand();

    // tg.close();

  // Ready
  tg.ready();
}

</script>

<template>
    <div class="header card-column" style="height:99px">
        <!-- <div>Баланс: 10 000 000 ₽</div> -->
         <div>{{ tgData.userName }}</div>
         <div>{{ tgData.userID }}</div>
         <button @click="tg.close()">Close app</button>
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
