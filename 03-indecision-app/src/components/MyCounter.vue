<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Squer {{ squareCounter }}</h3>

    <!-- <h4>{{ text }}</h4> -->

    <div>
      <button class="p-5 bg-blue-500 hover:bg-blue-700 rounded mr-2" @click="counter++">+1</button>
      <button class="p-5 bg-blue-500 hover:bg-blue-700 rounded mr-2" @click="counter--">-1</button>

      <!-- <button class="btn btn-primary" @click="increase">+1</button> btn bootstrap example-->

      <!-- <button class="p-5 bg-blue-500 hover:bg-blue-700 rounded mr-2" @click="increase">+1</button>
      <button class="p-5 bg-blue-500 hover:bg-blue-700 rounded mr-2" @click="decrease">-1</button> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter'

interface Props {
  value: number
  text: string
}

const props = defineProps<Props>()

const { counter, squareCounter } = useCounter(10)

// import { computed, ref } from 'vue'

// const props = defineProps({
//   //value: Number
//   value: { type: Number, required: true },
// })

// const props = defineProps<{
//   value: number
// }>()

// interface Props {
//   value: number
//   text: string
// }

// const props = defineProps<Props>()

// const counter = ref(props.value)
// const squareCounter = computed(() => counter.value * counter.value)
// const increase = () => counter.value++
// const decrease = () => counter.value--
</script>

<style scoped>
/* .btn {
  @apply p-5 bg-blue-500 hover:bg-blue-700 rounded mr-2;
} */
</style>
