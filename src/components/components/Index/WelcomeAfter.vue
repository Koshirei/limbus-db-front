<template>
  <div id="homepage-content-div-welcome-after">

    <div class="item">
      <div class="subitem">
        <span>
          <n-h1 style="margin: 0;">
            Welcome back, Executive Manager.
          </n-h1>
          <LunacyCounter/>
          <n-p style="font-size: small; margin: 0;" class="align-right">
            Last update jj/mm/aaaa
          </n-p>
        </span>

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import LunacyCounter from '@/components/components/Index/LunacyCounter.vue'
import { onMounted } from 'vue'
import { useMarket } from '@/stores/Market'

const market = useMarket()

onMounted(() => {
  if (market.utils.hasInitialLoaded) {
    (document.querySelector('.item') as HTMLDivElement).style.animation = '';
    (document.querySelector('.item') as HTMLDivElement).style.visibility = 'visible';
    (document.querySelector('.item') as HTMLDivElement).getAnimations()[0].cancel()
  }
})
</script>

<style lang="less" scoped>
@import url("@/assets/main");
@keyframes lunacyCounter {
  0% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

#homepage-content-div-welcome-after {
  position: absolute;
  top: 0;
  z-index: 10;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  .item {
    z-index: 10;
    position: relative;
    visibility: hidden;
    animation: lunacyCounter 1.5s linear 2.5s forwards;
    background: linear-gradient(0deg, transparent 0%, @main-red 5%, @main-red 95%, transparent 100%);
    text-align: center;
    padding: 10px 0;

    .subitem {
      span {
        width: fit-content;
        margin: 0 auto;
        position: relative;
        display: block;
        z-index: 10;
      }
    }
  }
}



</style>