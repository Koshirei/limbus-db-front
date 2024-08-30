import type { SinnerDTOInterface } from '@/utils/Interfaces/DTO/SinnerDTOInterface'
import type { IdentityMinifiedDTOInterface } from '@/utils/Interfaces/DTO/IdentityMinifiedDTOInterface'

export interface IdentitiesBySinnerInterface extends SinnerDTOInterface {
  identities: IdentityMinifiedDTOInterface[]
}