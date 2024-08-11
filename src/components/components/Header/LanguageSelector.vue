<template>
  <div v-if="lang !== ''">
    <PrimeSelect :options="options" v-model="lang" type="flag" @change="handleLanguageChange()"/>
  </div>
</template>

<script setup lang="ts">
import PrimeSelect from '@/components/components/Generics/PrimeSelect.vue'
import type { SelectOptionInterface } from '@/Utils/Interfaces/GenericComponentInterfaces'
import { onBeforeMount, ref } from 'vue'
import { GB, KR, JP } from 'country-flag-icons/string/3x2'
import { LANGUAGES, LOCALSTORAGE_KEYS } from '@/utils/Enums'

const lang = ref<string>('')

onBeforeMount(() => {
  if (localStorage.getItem(LOCALSTORAGE_KEYS.LANGUAGE) === null) {
    localStorage.setItem(LOCALSTORAGE_KEYS.LANGUAGE, LANGUAGES.EN)
  }

  lang.value = localStorage.getItem(LOCALSTORAGE_KEYS.LANGUAGE) as string
})

const options: SelectOptionInterface[] = [
  {
    label: 'English',
    value: LANGUAGES.EN,
    additionalData: GB
  },
  {
    label: '한국인',
    value: LANGUAGES.KR,
    additionalData: KR
  },
  {
    label: '日本語',
    value: LANGUAGES.JP,
    additionalData: JP
  }
]

const handleLanguageChange = () => {
  localStorage.setItem(LOCALSTORAGE_KEYS.LANGUAGE, lang.value)
  window.location.reload()
}
</script>

<style lang="less" scoped>

</style>