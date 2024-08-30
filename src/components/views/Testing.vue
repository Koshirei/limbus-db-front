<template>
  <div class="view">
    <br/><br/><br/><br/><br/><br/>
    <n-button @click="trigger(5)">
      trigger 5s
    </n-button>

    <n-button @click="trigger(600)">
      trigger 600s
    </n-button>


    <n-button @click="fetchSinners()">
      fetch
    </n-button>
    <br/>
    <pre>
      {{ fetchResponse }}
    </pre>
  </div>
</template>

<script setup lang="ts">

import { decrementSpinner, incrementSpinner } from '@/utils/LoadingSpinner'
import { ref } from 'vue'
import { SinnersService } from '@/services/SinnersService'

const fetchResponse = ref<any>('')

const trigger = (sec: number) => {
  incrementSpinner()
  setTimeout(() => {
    decrementSpinner()
  }, sec * 1000)
}

const fetchSinners = async () => {
  fetchResponse.value = await SinnersService.getAllSinners()
}

</script>

<style lang="less" scoped>

</style>