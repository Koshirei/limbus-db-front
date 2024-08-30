import type { I18nOptions } from 'vue-i18n'
import { LOCALSTORAGE_KEYS } from '@/utils/Enums'
import LANG_EN from '@/i18n/en.json'
import LANG_KR from '@/i18n/kr.json'
import LANG_JP from '@/i18n/jp.json'

export const i18nOptions = (): I18nOptions => {
  return {
    locale: localStorage.getItem(LOCALSTORAGE_KEYS.LANGUAGE) !== null ? localStorage.getItem(LOCALSTORAGE_KEYS.LANGUAGE)?.toUpperCase() as string : 'EN',
    fallbackLocale: 'EN',
    messages: {
      'EN': LANG_EN,
      'KR': LANG_KR,
      'JP': LANG_JP
    }

  }
}