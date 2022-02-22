import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
console.log(router)

createApp(App)
.use(router)
.mount('#app')
