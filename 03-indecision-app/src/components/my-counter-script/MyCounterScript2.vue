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

<script lang="ts" src="./MyCounterScript2"></script>
