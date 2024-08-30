<template>
  <router-link :to="{name: props.route.name}" @click="closeDrawer()">
    <div class="clickable">
      <n-h2 :prefix="checkPrefix(props.route.name)">
        {{ props.route.translationKey }}
      </n-h2>
    </div>
  </router-link>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'
import type { RouteItemInterface } from '@/components/components/Header/routeList'
import router from '@/router'

const props = defineProps({
  route: {
    required: true,
    type: Object as PropType<RouteItemInterface>
  }
})

const emits = defineEmits(['closeDrawer'])

const checkPrefix = (name: string) => {
  return router.currentRoute.value.name === name ? 'bar' : null
}

const closeDrawer = () => {
  emits('closeDrawer')
}

</script>