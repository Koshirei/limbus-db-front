import { ServiceUtils } from '@/services/ServiceUtils'
import type { IdentitiesBySinnerInterface } from '@/utils/Interfaces/DTO/IdentitiesBySinner'

export class IdentitiesService {

  static async getAllIdentities() {
    return await ServiceUtils.get<IdentitiesBySinnerInterface[]>('identities', true)
  }
}