<template>
  <div id="homepage">
    <div id="homepage-video-div">
      <video id="index-video" :autoplay="true" :muted="true" :loop="true" :style="'left: ' + marginLeft + 'px'"
        @play="calculateVideoMargin" >
        <source src="/public/dante.webm" >
      </video>
    </div>

    <div id="homepage-content-div" :style="'margin-left: ' + marginLeft > 0 ? marginLeft : 0 + 'px'">
      <div class="limbusDBWelcome">
        <img src="/public/logo.png" alt="icon of Limbus DB"/> <br/>
        limbus DB ( tba definitive name )

        <h1 class="faceTheSin">
          FACE THE SIN, SAVE THE EGO
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const marginLeft = ref(35)
const screenWidth = ref(window.innerWidth)

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

body {
  overflow: hidden;
}

@keyframes danteAppear {
  0% {
    background-color: inherit;
  }
  50% {
    background-color: inherit;
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
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

  #homepage-content-div {
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
      width: 100%;
      margin-top: 15vw;
      animation: welcomeDisappear 5s forwards;

      img {
        max-width: 100vw;
      }

      .faceTheSin {
        background-color: #850c23;
        text-align: center;
        padding: 10px 0;
        width:100vw
      }
    }
  }

  #index-video {
    height: 100vh;
    position: absolute;
    top:0;
    z-index: 1;
    filter: grayscale(30%);
  }
}


</style>