<template>
  <div class="view">
    <n-button @click="trigger(5)">
      trigger 5s
    </n-button>

    <n-button @click="trigger(60)">
      trigger 60s
    </n-button>


    <n-button @click="fetchSinners()">
      fetch
    </n-button>

    {{ fetchResponse }}
  </div>
</template>

<script setup lang="ts">

import { decrementSpinner, incrementSpinner } from '@/utils/LoadingSpinner'
import { ref } from 'vue'

const fetchResponse = ref<any>('')

const trigger = (sec: number) => {
  incrementSpinner()
  setTimeout(() => {
    decrementSpinner()
  }, sec * 1000)
}

const fetchSinners = async () => {

}

</script>

<style lang="less" scoped>

</style>