import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

VueElement.prototype.$http = axios

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
