import { ServiceUtils } from '@/services/ServiceUtils'
import type { SinnerDTOInterface } from '@/utils/Interfaces/DTO/SinnerDTOInterface'

export class SinnersService {

  static async getAllSinners() {
    return await ServiceUtils.get<SinnerDTOInterface>('sinners', true)
  }
}