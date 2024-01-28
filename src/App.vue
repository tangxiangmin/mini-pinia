<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './store/counter.ts'
import { storeToRefs } from './pinia/store.ts'

const counterStore = useCounterStore()
const { count, increment, decrement } = storeToRefs(counterStore)
</script>

<template>
  <div>
    <button @click="decrement">-</button>
    <button>
      {{ count }}
    </button>
    <button @click="increment">+</button>
    <div>
      <div>children:</div>
      <HelloWorld />
    </div>
  </div>
</template>
