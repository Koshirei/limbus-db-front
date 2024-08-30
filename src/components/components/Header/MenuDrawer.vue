<template>
  <PDrawer v-model:visible="visible" id="menuDrawer">
    <template #header>
      <n-h1>
        (tba i18n) Menu
      </n-h1>
    </template>

    <MenuDrawerItem :route="homepageRoute" @close-drawer="() => closeDrawer()"/>

    <n-divider />

    <MenuDrawerItem v-for="route in RouteList" :key="route.name"
                    :route="route" @close-drawer="() => closeDrawer()"/>

    <n-divider />
    <n-button> test </n-button>
    outil1
    outil2

  </PDrawer>
</template>

<script setup lang="ts">

import { homepageRoute, RouteList } from '@/components/components/Header/routeList'
import MenuDrawerItem from '@/components/components/Header/MenuDrawerItem.vue'

const visible = defineModel({
  required: true,
  default: false,
  type: Boolean
})

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