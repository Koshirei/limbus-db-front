<template>
  <div class="view">
    {{ id }}
  </div>
</template>

<script setup lang="ts">

import Router from '@/router'

const id = Router.currentRoute.value.params.id

</script>

<style scoped lang="less">


</style>