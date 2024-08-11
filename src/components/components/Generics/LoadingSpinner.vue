<template>
  <div v-if="market.utils.loadingSpinnerCounter > 0" id="loadingSpinner">
    <div id="loadingSpinnerSpinner">
      <LimbusLogo :should-spin="true" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMarket } from '@/stores/Market'
import LimbusLogo from '@/components/components/SVG/LimbusLogo.vue'

const market = useMarket()

</script>

<style scoped lang="less">
#loadingSpinner {
  background-color: rgba(0,0,0, 50%);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;

  #loadingSpinnerSpinner {
    margin: 0 auto;
    width: fit-content;
  }

}

</style>