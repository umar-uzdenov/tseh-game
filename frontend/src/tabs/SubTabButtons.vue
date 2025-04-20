<script setup>
const props = defineProps(['subs', 'current']);
const emits = defineEmits(['select'])
function setActive(sub) {
    return sub.name == props.current.value ? "active" : ""
}
// console.log(props.subs)
</script>

<template>
    <div class="sub-tab-btns">
        <button
            v-for="(sub, index) in props.subs" :key="`sub-btn ${index}`"
            :class="`sub-tab-btn ${sub.name} ${ setActive(sub) }`"
            @click="props.current.select(sub.name)"
        >
            {{ sub.description }}
        </button>
    </div>
</template>