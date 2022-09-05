import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from '@/Main/'
import 'element-plus/dist/index.css'
import './style.css'
const app = createApp(App)
setupPlugins(app)
app.mount('#app')
