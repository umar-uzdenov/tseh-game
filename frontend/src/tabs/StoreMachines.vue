<script setup defer>
import { useStoreMachinesStore } from '@/stores/store/store-machines.js'
import { computed } from 'vue'
// const machines = useStoreMachinesStore().machines

const machines = computed(() => database.machines)

function machineImg(machine) {
    return "img/machine/256/" + machine.img + ".jpg"
}

function buyMachine(machine) {
    console.log(machine)
    post('/buy-machine', machine)
}

</script>

<template>
    <div class="main-grid">
        <div
            v-for="(machine, index) in machines" :key="index"
            class="machine-card-container no-select"
        >
            <div class="machine-card">
                <div class="machine-name">{{ machine.name }}</div>
                <img
                    class="machine-img"
                    :src="machineImg(machine)"
                    alt="machine image"
                />
                
                <div>
                    {{ machine.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} ₽
                </div>
                <button class="buy-button" @click="buyMachine(machine)">Купить</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.main-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(108px, 1fr));
    gap: 8px;
    padding: 8px;
}


.machine-card-container {
    cursor: pointer;
    overflow: hidden;

    color: rgb(223, 223, 223);
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3) inset;

    min-height: auto;
    container-type: inline-size;

    /*
    border-radius: 8px;
    */
    display: flex;
}

.machine-card {
    background-color: rgba(210, 26, 26, 0);
    width: 100cqw;
    height: calc(8px + 20px + 8px + 100cqw - 16px + 8px + 16px + 8px + 32px + 8px);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.machine-img {
    width: calc(100cqw - 16px);
    aspect-ratio: 1/1;
}


.buy-button {
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
    box-shadow: 0 0 2px 1px #2196F3 inset;
    color: #2196F3;
}

</style>