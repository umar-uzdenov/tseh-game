<script setup>
import { reactive } from 'vue'
const database = window.database

const card = reactive({
    class: [],
    animation: [],
    async toggle(index) {
        if (this.class[index] == "compact") {
            this.class[index] = "expand"
            this.animation[index] = "expand-animation"
        } else if (this.class[index] == "expand") {
            this.class[index] = "compact"
            this.animation[index] = "compact-animation"
        }
    }
})

launch(async () => { // todo: simplify
    for (let i = 0; i <= 99; i++) {
        try {
            console.log("index", i)
            if (database?.user?.machines?.length && card.class[0] === undefined) {
                card.class = database.user.machines.map(() => "compact")
                card.animation = database.user.machines.map(() => "")
                return
            } else {
                await sleep(10)
            }
        } catch (e) {
            console.log("index", i, "lol")
            await sleep(10)
        }
    }
})

</script>

<template>
    <div
        v-for="(machine, index) in database.user.machines" :key="index"
        :class="`machine-card ${card.class[index]} ${card.animation[index]}`"
        @click="card.toggle(index)"
    >
        <div class="machine-icon" style="--icon-img-url: url('img/sturm.jpg');">
            <!-- todo: Поставить загрузку изображения из данных машины -->
        </div>
        <div class="item-icon icon-64" style="--icon-img-url: url('img/sturm.jpg');">
            <!-- todo: Поставить загрузку изображения из данных модели -->
        </div>
        <div class="mahine-name">
            <span class="machine-name">{{ machine.name + " " + machine.distinctName }}</span>
            <!-- todo: разные стили для компактной и расширенной карточки -->
        </div>
        <div class="item-name-block">
            <div class="item">Модель:</div>
            <div class="item-name">{{ database.user?.models[machine?.currentModelId]?.name }}</div>
        </div>
        <div class="item-description-block">
            <div class="yarn">yarn</div>
            <div class="time">34min</div>
            <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
        <div class="item-quantity-block">
            <div class="quantity">Осталось:</div>
            <div class="item-quantity">
                {{ machine.quantityLeft + " / " + machine?.quantity }} шт
            </div>
        </div>

        <div class="manage-buttons">
            <div class="button stop-button">Отменить</div>
            <div class="button pause-button">Остановить</div>
            <div class="button add-button">Добавить</div>
        </div>

        <!-- <div class="machine-maintenance">
            <span>Обслуживание:</span>
            <span>{{ machine.lastMaintenance }}</span>
        </div> -->
    </div>
<div v-if="[false][0]" class="ololo">
    <div
        v-for="(machine, index) in database.user.machines" :key="index"
        class="card horizontal"
    >
        <div class="icon-img-96" style="--icon-img-url: url('img/sturm.jpg');">
            <!-- todo: Поставить загрузку изображения из данных машины -->
        </div>
        <div class="card-column">
            <div class="card-row">
                <!-- <div class="icon-img" style="--icon-img-url: url('img/sturm.jpg');"> -->
                    <!-- todo: Поставить загрузку изображения из данных машины -->
                <!-- </div> -->
                <span class="machine-name">{{ machine.name + " " + machine.distinctName }}</span>
                <span class="">Работает</span>
                <!-- <span :class="`status-${machine.status.style}`">
                    {{ machine.status.description }}
                </span> -->
            </div>
            <div class="card-row">
                <div>{{ database.user?.models[machine?.currentModelId]?.name }}</div>
                <div>{{ machine.quantityLeft + " / " + machine?.quantity }} шт</div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

/* card */

:root {
    --animation-duration: 1s;
}

@keyframes machine-card-compact-frames {
    0% {
        height: 240px;
    }
    60% {
        height: 240px;
    }
    100% {
        height: 88px;
    }
}

@keyframes machine-card-expand-frames {
    0% {
        height: 88px;
    }
    40% {
        height: 240px;
    }
    100% {
        height: 240px;
    }
}

.machine-card {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */

    border-radius: 8px;
    background: rgba(0, 10, 0, 0.7);
    color: rgb(223, 223, 223);
    box-shadow: 0 0 32px 2px black inset;
    height: 88px;
}

.compact {
    height: 88px;
}

.compact-animation {
    animation: machine-card-compact-frames 1s ease-in-out;
}

.expand {
    height: 240px;
}

.expand-animation {
    animation: machine-card-expand-frames 1s ease-in-out;
}

.machine-card div {
    transition: all 1s ease-in-out;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
}

@keyframes machine-icon-compact-frames {
    0% {
        width: 32px;
        height: 32px;
    }
    65% {
        width: 32px;
        height: 32px;
    }
    100% {
        width: 64px;
        height: 64px;
    }
}

@keyframes machine-icon-expand-frames {
    0% {
        width: 64px;
        height: 64px;
    }
    35% {
        width: 32px;
        height: 32px;
    }
    100% {
        width: 32px;
        height: 32px;
    }
}

/* machine icon */

.machine-icon {
    position: absolute;
    background-image: var(--icon-img-url);
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    left: 12px;
    top: 12px;
}

.compact .machine-icon {
    width: 64px;
    height: 64px;
}

.compact-animation .machine-icon {
    animation: machine-icon-compact-frames 1s ease-in-out;
}

.expand .machine-icon {
    width: 32px;
    height: 32px;
}

.expand-animation .machine-icon {
    animation: machine-icon-expand-frames 1s ease-in-out;
}



/* item icon */

@keyframes item-icon-compact-frames {
    0% {
        left: 12px;
        top: 52px;
        width: 136px;
        height: 136px;
    }
    65% {
        left: 84px;
        top: 52px;
        width: 64px;
        height: 64px;
    }
    100% {
        left: 84px;
        top: 12px;
        width: 64px;
        height: 64px;
    }
}

@keyframes item-icon-expand-frames {
    0% {
        left: 84px;
        top: 12px;
        width: 64px;
        height: 64px;
    }
    35% {
        left: 84px;
        top: 52px;
        width: 64px;
        height: 64px;
    }
    100% {
        left: 12px;
        top: 52px;
        width: 136px;
        height: 136px;
    }
}

.item-icon {
    position: absolute;
    background-image: var(--icon-img-url);
    background-size: cover;
    background-position: center;
    border-radius: 4px;
}

.compact .item-icon {
    left: 84px;
    top: 12px;
    width: 64px;
    height: 64px;
}

.compact-animation .item-icon {
    animation: item-icon-compact-frames 1s ease-in-out;
}

.expand .item-icon {
    left: 12px;
    top: 52px;
    width: 136px;
    height: 136px;
}

.expand-animation .item-icon {
    animation: item-icon-expand-frames 1s ease-in-out;
}



/* machine name */

@keyframes machine-name-compact-frames {
    0% {
        left: 96px;
        top: 12px;
        right: 96px;
        height: 32px;
        font-size: 20px;
    }
    65% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 32px;
        font-size: 16px;
    }
    100% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 28px;
        font-size: 16px;
    }
}

@keyframes machine-name-expand-frames {
    0% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 28px;
        font-size: 16px;
    }
    35% {
        left: 156px;
        top: 12px;
        right: 12px;
        height: 32px;
        font-size: 16px;
    }
    100% {
        left: 96px;
        top: 12px;
        right: 96px;
        height: 32px;
        font-size: 20px;
    }
}

.machine-name {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.compact .machine-name {
    left: 156px;
    top: 12px;
    right: 12px;
    height: 28px;
    font-size: 16px;
    background-color: red;
}

.compact-animation .machine-name {
    animation: machine-name-compact-frames 1s ease-in-out;
}

.expand .machine-name {
    left: 96px;
    top: 12px;
    right: 96px;
    height: 32px;
    font-size: 20px;
    background-color: #76240f;
}

.expand-animation .machine-name {
    animation: machine-name-expand-frames 1s ease-in-out;
}



/* item name */

@keyframes item-name-compact-frames {
    0% {
        left: 100%;
        transform: translateX(-100%);
    }
    65% {
        left: 0%;
        transform: translateX(0%);
    }
    100% {
        left: 0%;
        transform: translateX(0%);
    }
}

@keyframes item-name-expand-frames {
    0% {
        left: 0%;
        transform: translateX(0%);
    }
    35% {
        left: 0%;
        transform: translateX(0%);
    }
    100% {
        left: 100%;
        transform: translateX(-100%);
    }
}

@keyframes item-compact-frames {
    0% {
        transform: translateX(0%);
    }
    65% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes item-expand-frames {
    0% {
        transform: translateX(-100%);
    }
    35% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.item-name-block {
    position: absolute;
    align-items: center;
    overflow: hidden;
}

.item-name-block .item {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    right: auto;
}

.item-name-block .item-name {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    right: auto;
}

.compact .item-name-block {
    left: 156px;
    top: 48px;
    right: 12px;
    height: 28px;
    background-color: rgba(255, 0, 0, 0.351);
}

.compact .item-name-block .item {
    top: 0;
    transform: translateX(-100%);
    background-color: #2a4c00;
}

.compact-animation .item-name-block .item {
    animation: item-compact-frames 1s ease-in-out;
}

.compact .item-name-block .item-name {
    left: 0%;
    top: 0;
    transform: translateX(0%);
}

.compact-animation .item-name-block .item-name {
    animation: item-name-compact-frames 1s ease-in-out;
}

.expand .item-name-block .item {
    top: 0;
    transform: translateX(0%);
    background-color: #483b00;
}

.expand-animation .item-name-block .item {
    animation: item-expand-frames 1s ease-in-out;
}

.expand .item-name-block {
    left: 156px;
    top: 52px;
    right: 12px;
    height: 28px;
    background-color: #76240f5a;
}

.expand .item-name-block .item-name {
    left: 100%;
    top: 0;
    transform: translateX(-100%);
}

.expand-animation .item-name-block .item-name {
    animation: item-name-expand-frames 1s ease-in-out;
}



/* item yarn, time and description */

.item-description-block {
    position: absolute;
    left: 156px;
    top: 88px;
    right: 12px;
    height: 64px;
    overflow: hidden;

    background-color: rgba(17, 0, 255, 0.403);
}

.item-description-block div {
    display: flex;
    line-height: 20px;
    word-wrap: normal;
}

.item-description-block .yarn {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 20px;

    background-color: #2a4c00;
}

.item-description-block .time {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 20px;

    background-color: #4c2a00;
}

.item-description-block .description {
    position: absolute;
    left: 0px;
    top: 22px;
    height: 42px;
    text-align: center;

    background-color: #4c004b;
}



/* item quantity */

@keyframes item-quantity-block-compact-frames {
    0% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
    65% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
    100% {
        left: 156px;
        top: 48px;
        right: 12px;
        height: 28px;
    }
}

@keyframes item-quantity-block-expand-frames {
    0% {
        left: 156px;
        top: 48px;
        right: 12px;
        height: 28px;
    }
    35% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
    100% {
        left: 156px;
        top: 160px;
        right: 12px;
        height: 28px;
    }
}

@keyframes quantity-compact-frames {
    0% {
        transform: translateX(0%);
    }
    65% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes quantity-expand-frames {
    0% {
        transform: translateX(-100%);
    }
    35% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.item-quantity-block {
    position: absolute;
    align-items: center;
    overflow: hidden;
}

.item-quantity-block .quantity {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    transform: translateX(-100%);
}

.item-quantity-block .item-quantity {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    right: 0px;
    top: 0px;
}

.compact .item-quantity-block {
    left: 156px;
    top: 48px;
    right: 12px;
    height: 28px;

    background-color: rgba(0, 255, 255, 0.327);
}

.compact-animation .item-quantity-block {
    animation: item-quantity-block-compact-frames 1s ease-in-out
}

.compact-animation .item-quantity-block .quantity {
    animation: quantity-compact-frames 1s ease-in-out;
}

.expand .item-quantity-block .quantity {
    top: 0;
    transform: translateX(0%);
    background-color: #483b00;
}

.expand-animation .item-quantity-block .quantity {
    animation: quantity-expand-frames 1s ease-in-out;
}

.expand .item-quantity-block {
    left: 156px;
    top: 160px;
    right: 12px;
    height: 28px;
    background-color: #2e760fb4;
}

.expand-animation .item-quantity-block {
    animation: item-quantity-block-expand-frames 1s ease-in-out;
}




/* manage buttons */

@keyframes manage-buttons-compact-frames {
    0% {
        bottom: 12px;
    }
    35% {
        bottom: -36px;
    }
    100% {
        bottom: -36px;
    }
}

@keyframes manage-buttons-expand-frames {
    0% {
        bottom: -36px;
    }
    65% {
        bottom: -36px;
    }
    100% {
        bottom: 12px;
    }
}

.manage-buttons {
    display: flex;
    justify-content:space-between;
    align-items: flex-end;
    gap: 8px;
    position: absolute;
    left: 12px;
    right: 12px;
    height: 32px;
}

.compact .manage-buttons {
    bottom: -36px;
}

.compact-animation .manage-buttons {
    animation: manage-buttons-compact-frames 1s ease-in-out;
}

.expand .manage-buttons {
    bottom: 12px;
}

.expand-animation .manage-buttons {
    animation: manage-buttons-expand-frames 1s ease-in-out;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 32px;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
}

.stop-button {
    box-shadow: 0 0 2px 1px #F44336 inset;
    color: #F44336;
}

.pause-button {
    box-shadow: 0 0 2px 1px #FDD835 inset;
    color: #FDD835;
}

.add-button {
    box-shadow: 0 0 2px 1px #4CAF50 inset;
    color: #4CAF50;
}
</style>