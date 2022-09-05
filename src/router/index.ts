import { RouteRecordRaw } from 'vue-router'

const routeList: RouteRecordRaw[] = [
  {
    path:'/demo',
    component:() => import('@/components/loadIng/firstLoad.vue')
  },
  {
    path: '/login',
    component: () => import('@/View/User/system/login.vue')
  },
  {
    path: '/home',
    component: () => import('@/View/home/home.vue'),
  },
  {
    path: '/mall',
    component: () => import('@/View/mall/home.vue'),
    redirect: '/discovery',
    children: [
      {
        path: '/coupons',
        component: () => import('@/View/mall/cpns/coupons.vue'),
        redirect:'/coupons/热门推荐',
        children: [{
          path: '/coupons/:id',
          component: () => import('@/components/Shop/BaseLayout/couponsInter.vue')
        }]
      }, {
        path: '/discovery',
        redirect:'/discovery/推荐',
        component: () => import('@/View/mall/cpns/discovery.vue'),
        children: [{
          path: '/discovery/:id',
          component: () => import('@/components/Shop/BaseLayout/discoveryInter.vue')
        }]
      }, {
        path: '/specials',
        component: () => import('@/components/Shop/BaseLayout/specialsInter.vue'),
      }, {
        path: '/search',
        component: () => import('@/View/mall/cpns/searchView.vue')
      }
    ]
  }
]

export default routeList
