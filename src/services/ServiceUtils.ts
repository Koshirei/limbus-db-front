// import fetch from 'node-fetch'
import { decrementSpinner, incrementSpinner } from '@/utils/LoadingSpinner'
import { LOCALSTORAGE_KEYS } from '@/utils/Enums'
import type { Response } from '@/utils/Interfaces/Response'

export class ServiceUtils {

  static async get<T>(url: string, loadSpinner: boolean = false) {
    return await ServiceUtils.fetchApi<T, null>(url, 'GET', loadSpinner)
  }





  static async fetchApi<T, V>(url: string, method: string, loadSpinner: boolean, payload: V | null = null){
    if (loadSpinner) incrementSpinner()

    try {
      console.log(import.meta.env)
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + 'v1/' + url,
        {
          method: method,
          body: payload === null ? null : JSON.stringify(payload),
          headers: ServiceUtils.buildHeaders()
        }
      )
      const json = await response.json()
      return json as Response<T>
    }
    catch (e) {
      alert(e)
      return {} as Response<T>
    } finally {
      if (loadSpinner) decrementSpinner()
    }
  }

  static buildHeaders() {
    return {
      'Content-Language': localStorage.getItem(LOCALSTORAGE_KEYS.LANGUAGE)
    } as HeadersInit
  }
}