import { createApp } from 'vue'
import money from 'v-money3'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(money)

app.mount('#app')
