import { App } from 'vue'
import store from '@/store'
import router from '@/router/config'
import { setupTailwindcss } from '@/Main/plugins/tailwindcss'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export function setupPlugins(app: App) {
  app.use(store)
  app.use(router)
  setupTailwindcss()
  app.use(ElementPlus)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

}

