<script setup lang="ts">
const counter = useCounter()
const toggle = useToggle()
</script>

<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">Go to About Page</NuxtLink>
    <div>
      <p>counter: {{ counter }}</p>
      <button @click="counter++">increase</button>
      <button @click="counter--">decrease</button>
    </div>
    <div>
      <p>toggle state: {{ toggle }}</p>
      <button @click="toggle = !toggle">Change</button>
    </div>
  </div>
</template>


<style scoped>

</style>