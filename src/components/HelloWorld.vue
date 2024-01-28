<script setup lang="ts">
import { useCounterStore } from '../store/counter.ts'
import { storeToRefs } from '../pinia/store.ts'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
</script>

<template>
  <div>
    <button @click="counterStore.decrement">-</button>
    <button>
      {{ count }}
    </button>
    <button @click="counterStore.increment">+</button>
  </div>
</template>

<style scoped></style>
