<template>
  <PDrawer v-model:visible="visible" id="menuDrawer">
    <template #header>
      <n-h1>
        (tba i18n) Menu
      </n-h1>
    </template>

    <router-link :to="{name: 'index'}" @click="closeDrawer()">
      <div class="clickable">
        <n-h2 :prefix="checkPrefix('index')">
          Homepage
        </n-h2>
      </div>
    </router-link>

    <n-divider />

    <router-link :to="{name: 'identities'}" @click="closeDrawer()">
      <div class="clickable">
        <n-h2 :prefix="checkPrefix('identities')">
          Identities & E.G.O's
        </n-h2>
      </div>
    </router-link>

    <router-link :to="{name: 'identities2'}" @click="closeDrawer()">
      <div class="clickable">
        <n-h2 :prefix="checkPrefix('identities2')">
          Testing
        </n-h2>
      </div>
    </router-link>

    <n-h2>
      E.G.O's
    </n-h2>

    <n-h2>
      route3
    </n-h2>

    <n-divider />
    <n-button> test </n-button>
    outil1
    outil2

  </PDrawer>
</template>

<script setup lang="ts">

import router from '@/router'

const visible = defineModel({
  required: true,
  default: false,
  type: Boolean
})


const checkPrefix = (name: string) => {
  return router.currentRoute.value.name === name ? 'bar' : null
}

const closeDrawer = () => {
  visible.value = false
}

</script>

<style lang="less">
@import url("@/assets/main");

// warning: style applies to a prime component, so the style tag is NOT scoped
// all CSS must be inside #menuDrawer
#menuDrawer {
  border-left: none !important;
  border-top: none;
  border-bottom: none;

  .clickable {

    .n-h2 {
      margin: 0;
      padding-left: 15px;
    }
  }
}


</style>