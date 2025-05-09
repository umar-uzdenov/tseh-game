<script setup>
const { card } = defineProps(['card'])
</script>

<template>
    <div class="button" v-if="card.state == 'expand'" @click="card.compact()">
        <div class="ltrb"></div>
        <div class="rtlb"></div>
    </div>
</template>

<style scoped>
.button {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 64px;
    height: 64px;
}

.ltrb {
    position: absolute;
    top: 28px;
    width: 64px;
    height: 8px;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px rgb(255, 66, 66) inset;
    transform: rotate(45deg);
}

.rtlb {
    position: absolute;
    top: 28px;
    width: 64px;
    height: 8px;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px rgb(255, 66, 66) inset;
    transform: rotate(-45deg);
}
</style>