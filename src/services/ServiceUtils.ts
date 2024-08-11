import fetch from 'node-fetch'
import { decrementSpinner, incrementSpinner } from '@/utils/LoadingSpinner'
import { LOCALSTORAGE_KEYS } from '@/utils/Enums'

export class ServiceUtils {

  static async get<T>(url: string, returnType: T, loadSpinner: boolean = false) {
    await ServiceUtils.fetchApi(url, returnType, 'GET', loadSpinner)
  }





  static async fetchApi<T, V>(url: string, returnType: T, method: string, loadSpinner: boolean, payload: V | null = null){
    if (loadSpinner) incrementSpinner()

    try {
      await fetch(
        'http://localhost:25565/v1/' + url,
        {
          method: method,
          body: payload === null ? null : JSON.stringify(payload),
          headers: ServiceUtils.buildHeaders()
        }
      )
    }
    catch (e) {
      console.log(e)
    }

    if (loadSpinner) decrementSpinner()
  }

  static buildHeaders() {
    return {
      'Content-Language': localStorage.getItem(LOCALSTORAGE_KEYS.LANGUAGE)
    } as HeadersInit
  }
}