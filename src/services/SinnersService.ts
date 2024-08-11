import { ServiceUtils } from '@/services/ServiceUtils'

export class SinnersService {

  static async getAllSinners() {
    return ServiceUtils.get('sinners', )
  }
}