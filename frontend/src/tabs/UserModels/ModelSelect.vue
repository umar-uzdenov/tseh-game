<script setup>
import { onMounted, onBeforeUnmount, reactive } from 'vue'

const { form } = defineProps(['form'])
console.log(form.models)
const select = reactive({
    isOpen: false, value: form.models[0]
})

function toggleDropdown() {
  select.isOpen = !select.isOpen
}

function selectOption(option) {
    form.select(option)
    select.value = option
    select.isOpen = false
}

function onClickOutside(event) {
  if (!event.target.closest('.custom-select')) select.isOpen = false
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))

</script>

<template>
  <div class="custom-select">
    <div class="select-input" @click="toggleDropdown" :aria-expanded="select.isOpen.toString()" role="combobox">
      <span class="selected-value">{{ select.value.description }}</span>
      <span class="arrow" :class="{ open: select.isOpen }">&#9662;</span>
    </div>
    <ul v-show="select.isOpen" class="options-list" role="listbox">
      <li
        v-for="option in form.models"
        :key="option"
        class="option" :class="{ selected: option.name === select.value.name }"
        @click="selectOption(option)"
        role="option"
        :aria-selected="(option === select.value).toString()"
    >
        {{ option.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  font-family: Arial, sans-serif;
  user-select: none;
  outline: none;
  width: 100%;
  height: 36px;
  background-color: #333;
  color: white;
}

.custom-select.disabled {
  opacity: 0.6;
  pointer-events: none;
}

.select-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 6px 12px;
  cursor: pointer;
}

.select-input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px #4caf50;
}

.selected-value {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.arrow {
  font-size: 12px;
  margin-left: 8px;
  transition: transform 0.3s ease;
  user-select: none;
}

.arrow.open {
  transform: rotate(180deg);
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #333;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 0 0 4px 4px;
}

.option {
  padding: 8px 12px;
  cursor: pointer;
}

.option:hover,
.option.selected {
  background-color: #4caf50;
  color: white;
}
</style>
