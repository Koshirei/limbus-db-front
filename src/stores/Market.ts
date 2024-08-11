import { defineStore } from 'pinia'
import { useUtilsStore } from '@/stores/UtilsStore'

export const useMarket = defineStore('market', () => {
  const utils = useUtilsStore()

  return {
    utils
  }
})