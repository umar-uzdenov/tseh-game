<script setup>
// import { useMarketStore } from '@/stores/market/market'
// const market = useMarketStore().market

import { useTgStore } from '@/stores/tg';
const tg = useTgStore().tg
const data = useTgStore().data

</script>

<template>
    <div class="main-grid">
        <div class="profile-card">
            <div
                class="profile-avatar"
                style="--profile-img-url: url('img/default-profile-icon.jpg');">
            </div>
            <div class="profile-info">
                <h3>{{ data.userName }}</h3>
                <p>{{ data.userId }}</p>
                <p><strong>Профессия:</strong> Программист</p>
                <p><strong>Зарегистрирован:</strong> 15 апреля 2025</p>
            </div>
        </div>
        <div class="profile-stats">
            <div class="stat-card">
                <h4>Изделий продано</h4>
                <p>120 000</p>
            </div>
            <div class="stat-card">
                <h4>Заработок</h4>
                <p>8 000 млн ₽</p>
            </div>
            <div class="stat-card">
                <h4>Станков куплено</h4>
                <p>120</p>
            </div>
            <div class="stat-card">
                <h4>Станков продано</h4>
                <p>53</p>
            </div>
        </div>
    </div>
</template>