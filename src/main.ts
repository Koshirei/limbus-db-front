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

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})


app.component('PSelect', Select)
app.component('PDrawer', Drawer)
app.component('PButton', Button)


app.use(naive)
app.use(createPinia())
app.use(router)


router.isReady().then(() => {
  app.mount('#app')
})
