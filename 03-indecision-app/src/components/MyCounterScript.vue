<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Squer {{ squareCounter }}</h3>

    <!-- <h4>{{ text }}</h4> -->

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
      <!-- <button @click="increase">+1</button>
      <button @click="decrease">-1</button> -->
    </div>
  </section>
</template>

<script lang="ts">
//NOTA: Esta es otra forma (aparte de la de abajo que está comentada) de trabajar el componente
import { useCounter } from '@/composables/useCounter'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },

  setup(props) {
    const { counter, squareCounter } = useCounter(props.value)

    // const counter = ref(props.value)
    // const squareCounter = computed(() => counter.value * counter.value)

    return {
      counter,
      squareCounter,
    }
  },
})

//NOTA: Esta es la forma recomendada/corta pra trabajar en el componente
//siempre y cuando no sea muy larga la lógica

// import { computed, ref } from 'vue'

// // const props = defineProps({
// //   //value: Number
// //   value: { type: Number, required: true },
// // })

// // const props = defineProps<{
// //   value: number
// // }>()

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
