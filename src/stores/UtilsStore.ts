import { defineStore } from 'pinia'
import { rand } from '@/utils/MathUtils'

export const useUtilsStore = defineStore('utils-store', () => {
  const hasInitialLoaded: boolean = false
  const loadingSpinnerCounter: number = 0

  const getIndexMp4 = (): string => {
    const indexVideoChoices: string[] = ['dante', 'ishmael', 'heathcliff']
    return indexVideoChoices[rand(0, indexVideoChoices.length - 1)]
  }
  const indexMp4: string = getIndexMp4()

  return {
    hasInitialLoaded,
    indexMp4,
    loadingSpinnerCounter
  }
})