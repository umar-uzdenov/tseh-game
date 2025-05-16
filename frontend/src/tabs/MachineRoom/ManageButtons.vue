<script setup>
const { state, animation, duration, machine, card } =
    defineProps(['state', 'animation', 'duration', 'machine', 'card'])

function addItem() {
    if (card.order.model == -1) card.order.modelError = true
    if (card.order.quantity < 1 || card.order.quantity > 1000) card.order.quantityError = true
    // console.log(card.order)
    if (card.order.modelError || card.order.quantityError) return
    
    const data = {
        machineId: machine.id,
        modelId: card.order.model,
        quantity: card.order.quantity,
    }
    console.log(data)
    window.database.createOrder(data)
}
</script>

<template>
    <div
        :class="`manage-buttons ${state} ${animation}`"
        :style="`--duration: ${duration}`"
        v-if="state == 'expand'"
    >
        <div
            v-if="machine.currentItemId == -1"
            class="button add-button"
            @click="addItem()"
        >Создать заказ</div>
        <div v-else class="button stop-button">Отменить производство</div>
        <!-- <div class="button pause-button">Остановить</div> -->
    </div>
</template>

<style scoped>

.manage-buttons {
    display: flex;
    justify-content:space-between;
    align-items: flex-end;
    gap: 8px;
    position: absolute;
    left: 12px;
    width: calc(100vw - 72px);
    height: 32px;
}

.expand.manage-buttons {
    bottom: 12px;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 32px;
    width: 100%;
    overflow: hidden;

    background-color: #0007;
    border-radius: 4px;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
}

.stop-button {
    box-shadow: 0 0 2px 1px #F44336 inset;
    color: #ff2515;
}

.pause-button {
    box-shadow: 0 0 2px 1px #FDD835 inset;
    color: #ffd930;
}

.add-button {
    box-shadow: 0 0 2px 1px #4CAF50 inset;
    color: #3bb43f;
}

</style>