import type { GenericDTOInterface } from '@/utils/Interfaces/DTO/GenericDTOInterface'

export interface IdentityMinifiedDTOInterface extends GenericDTOInterface {
  name: string,
  rarity: number
}