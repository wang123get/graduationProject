import { RouteRecordRaw } from 'vue-router'

const routeList: RouteRecordRaw[] = [
  {
    path: '/demo',
    component: () => import('@/components/loading/BigLoad.vue')
  },
  {
    path: '/login',
    component: () => import('@/View/User/system/login.vue')
  },
  {
    path: '/home',
    component: () => import('@/View/home/home.vue')
  },
  {
    path: '/mall',
    component: () => import('@/View/mall/home.vue'),
    redirect: '/discovery',
    children: [
      {
        path: '/coupons',
        component: () => import('@/View/mall/cpns/coupons.vue'),
        redirect: '/coupons/热门推荐',
        children: [
          {
            path: '/coupons/:id',
            component: () =>
              import('@/components/Shop/BaseLayout/couponsInter.vue')
          }
        ]
      },
      {
        path: '/discovery',
        redirect: '/discovery/推荐',
        component: () => import('@/View/mall/cpns/discovery.vue'),
        children: [
          {
            path: '/discovery/:id',
            component: () =>
              import('@/components/Shop/BaseLayout/discoveryInter.vue')
          }
        ]
      },
      {
        path: '/specials',
        component: () => import('@/View/mall/cpns/specials.vue')
      },
      {
        path: '/search/:keyword',
        component: () => import('@/View/mall/cpns/searchView.vue')
      }
    ]
  },
  {
    path: '/User/publishedArticle',
    component: () => import('@/View/User/system/publishedArticle.vue')
  },
  {
    path: '/User/info',
    component: () => import('@/View/User/system/userInfo.vue'),
    redirect: '/basicInformation',
    children:[
      {
        path: '/basicInformation',
        component:() => import('@/components/User/View/basicInformation.vue')
      },
      {
        path: '/password',
        component:() => import('@/components/User/View/changePassword.vue')
      },
      {
        path: '/vip',
        component:() => import('@/components/User/View/Vip.vue')
      },
      {
        path: '/resources',
        component:() => import('@/components/User/View/resources.vue')
      },
      {
        path: '/article',
        component:() => import('@/components/User/View/articles.vue')
      }
    ]
  }
  ]

export default routeList
