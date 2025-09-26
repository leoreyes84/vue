<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <hr />

  <MyCounter :value="2" text="Hello MyCounter" />
  <MyCounterScript :value="5" text="Hello MyCounterScript" />
  <MyCounterScript2 :value="10" text="Hello MyCounterScript2" />
</template>

<script setup lang="ts">
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue'
</script>
