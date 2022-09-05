import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import routeList from '../index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  ...routeList
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//导航守卫
// router.beforeEach((to) => {
//     if (to.path !== '/login') {
//         const token = localCache.getCache('token')
//         if (!token) {
//             router.push('/login')
//         }
//     }
// })

export default router
