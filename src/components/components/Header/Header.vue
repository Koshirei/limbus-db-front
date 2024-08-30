<template>
  <div id="header">

    <MenuDrawer v-model="menuDrawerVisible" />

    <div id="header-menu-picker">
      <PButton @click="handleMenuDrawerClicked()" severity="secondary">
        <i class="pi pi-bars" />
      </PButton>
    </div>

    <div id="header-language-picker">
      <LanguageSelector />
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSelector from '@/components/components/Header/LanguageSelector.vue'
import { ref } from 'vue'
import MenuDrawer from '@/components/components/Header/MenuDrawer.vue'

const menuDrawerVisible = ref(false)

const handleMenuDrawerClicked = () => {
  menuDrawerVisible.value = !menuDrawerVisible.value
}
</script>

<style lang="less">
@import url("@/assets/main");
#header {
  color: white;
  z-index: 15;

  #header-language-picker,
  #header-menu-picker {
    position: fixed;
    z-index: 15;
    top: 15px;
  }

  #header-menu-picker {
    left: 30px;

    .p-button {
      border: 1px solid @grey-borders;
    }
  }

  #header-language-picker {
    right: 30px;
  }
}
</style>