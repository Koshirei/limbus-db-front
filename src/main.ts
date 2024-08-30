import './assets/main.less'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Select from 'primevue/select'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/Aura'
import naive from 'naive-ui'
import Drawer from 'primevue/drawer'
import Button from 'primevue/button'
import { createI18n } from 'vue-i18n'
import { i18nOptions } from '@/i18n/i18n'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

const i18n = createI18n(i18nOptions())

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})


app.component('PSelect', Select)
app.component('PDrawer', Drawer)
app.component('PButton', Button)

app.use(ToastService)
app.use(naive)
app.use(createPinia())
app.use(router)
app.use(i18n)


router.isReady().then(() => {
  app.mount('#app')
})
