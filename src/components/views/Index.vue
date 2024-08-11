<template>
  <div id="homepage">
    <div id="homepage-video-div">
      <video id="index-video" :autoplay="true" :muted="true" :loop="true" :style="'left: ' + marginLeft + 'px'"
             @play="calculateVideoMargin" v-if="market.utils.indexMp4 !== ''">
        <source :src="'/' + market.utils.indexMp4 + '.webm'" >
      </video>
    </div>

    <div id="homepage-content-div-welcome">
      <div class="limbusDBWelcome">
        <img src="/logo.png" alt="icon of Limbus DB"/>
        <span>

          limbus DB ( tba definitive name )
        </span>

        <h1 class="faceTheSin">
          FACE THE SIN, SAVE THE E.G.O
        </h1>
      </div>
    </div>

    <WelcomeAfter :marginLeft="marginLeft"/>
  </div>
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'
import WelcomeAfter from '@/components/components/Index/WelcomeAfter.vue'
import { useMarket } from '@/stores/Market'

const marginLeft = ref(0)
const screenWidth = ref(window.innerWidth)

const market = useMarket()

onMounted(() => {
  if (market.utils.hasInitialLoaded) {
    (document.querySelector('#homepage-content-div-welcome') as HTMLDivElement).style.visibility = 'hidden'
  }
})

window.addEventListener('resize', () => {
  calculateVideoMargin()
})

const calculateVideoMargin = () => {
  screenWidth.value = window.innerWidth
  const videoWidth2 = (document.querySelector('#index-video') as HTMLVideoElement).clientWidth
  marginLeft.value = ((screenWidth.value - videoWidth2) / 2)
}

</script>

<style scoped lang="less">
@import url("@/assets/main");

@keyframes danteAppear {
  0% {
    background-color: inherit;
  }
  50% {
    background-color: inherit;
  }
  100% {
    background-color: transparent;
  }
}

@keyframes welcomeDisappear {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

#homepage {
  background-color: black;
  min-height: 100vh;
  width: 100vw;
  color: white;
  z-index: 10;
  position: relative;
  overflow-x: hidden;

  #homepage-content-div-welcome {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    z-index: 10;
    background-color: black;
    animation: danteAppear 5s forwards;

    .limbusDBWelcome {
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      animation: welcomeDisappear 5s forwards;

      img {
        max-width: 40vw;
        margin: 0 auto;
      }

      .faceTheSin {
        background-color: @main-red;
        text-align: center;
        padding: 10px 0;
        width:100vw;
        font-stretch: condensed;
      }
    }
  }

  #index-video {
    height: 100vh;
    width: 100vw;
    position: absolute;
    object-fit: cover;
    top:0;
    z-index: 1;
    filter: grayscale(30%);
  }
}


</style>