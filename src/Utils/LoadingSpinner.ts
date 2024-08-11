import { useMarket } from '@/stores/Market'

export const incrementSpinner = () => {
  const market = useMarket()
  market.utils.loadingSpinnerCounter += 1
}

export const decrementSpinner = () => {
  const market = useMarket()
  market.utils.loadingSpinnerCounter -= 1
}