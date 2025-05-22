<script setup>
import { useUserWarehousesStore } from '@/stores/user/user-warehouse'
import { computed } from 'vue'

const items = computed(() => window.database.user.items)
launch(() => console.log({items: items.length}), 1000)

function sell(item) {
    window.database.sellItem(item.id)
    // console.log({itemId: item.id})
    // console.log("Продано: " + item.name + " " + item.quantity + " штук")
}
</script>

<template>
    <div class="warehouse">
        <div v-if="!items.length" class="empty-message">Склад изделий пуст</div>
        <div
            v-if="items.length"
            v-for="(item, index) in items" :key="index"
            class="item"
        >
            <div class="card-row">
                <img class="item-icon" :src="`img/model/256/${item.img}/${item.img}_${item.imgId}.jpg`" alt="item image" />
                <div class="card-column">
                    <span>{{item.name}}</span>
                    <span>{{item.quantityProduced - item.quantitySold}} шт</span>
                    <span>Цена {{item.price}} ₽</span>
                </div>
            </div>
            <button @click="sell(item)">Продать</button>
        </div>
    </div>
</template>

<style scoped>

.warehouse {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 8px;
    padding: 8px;
}

.item {
    border-radius: 0.4rem;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 2px 2px black inset;
    color: rgb(223, 223, 223);
    padding: 8px;
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item-icon {
    width: 40cqw;
    height: 40cqw;
    border-radius: 4px;
}

span {
    display: flex;
    justify-content: center;
}

.empty-message {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 2px 2px black inset;
    color: rgb(223, 223, 223);
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
}

button {
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 32px;
    width: 100%;
    overflow: hidden;

    background-color: #0007;
    border-radius: 4px;user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */

    box-shadow: 0 0 2px 1px #4CAF50 inset;
    color: #3bb43f;
}

</style>