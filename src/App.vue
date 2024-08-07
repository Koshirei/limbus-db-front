<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="less">

#app {
  min-height: 100vh;
  min-width: 100vw;
}

</style>
