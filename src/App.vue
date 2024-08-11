<template>
  <n-config-provider :theme="darkTheme">
    <div id="app">
      <Header />
      <LoadingSpinner />
      <RouterView v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component"/>
        </transition>
      </RouterView>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/components/Header/Header.vue'
import { darkTheme } from 'naive-ui'
import { onMounted } from 'vue'
import { useMarket } from '@/stores/Market'
import LoadingSpinner from '@/components/components/Generics/LoadingSpinner.vue'

const market = useMarket()

// must be kept so that the initial page load does not trigger a transition
onMounted(() => {
  setTimeout(() => {
    market.utils.hasInitialLoaded = true
  }, 100)
})
</script>

<style scoped lang="less">
@import url("assets/main");

.slide-enter-active,
.slide-leave-active {
  transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  position: absolute;
  top:0;
}

.slide-enter-from {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

</style>
