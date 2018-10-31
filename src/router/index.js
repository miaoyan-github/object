import Vue from 'vue' /* 引入vue文件 */
import Router from 'vue-router' /* 引入vue路由模块 */
import Index from '@/components/Index' /* 引入Index.vue模版，这里的“@”相当于“../” */
import StoreMsg from '@/components/StoreMsg'
import ActiveMsg from '@/components/ActiveMsg'
import AbnormalStore from '@/components/AbnormalStore'
import UserCumulant from '@/components/UserCumulant'
import UserSearch from '@/components/UserSearch'
import BadcommentMatch from '@/components/BadcommentMatch'
import PopularVegetables from '@/components/PopularVegetables'
import DisfavorvVegetables from '@/components/DisfavorvVegetables'

Vue.use(Router) /* 使用路由 */

export default new Router({
  routes: [ /* 配置路由，规定“/”引入到StoreMsg组件 */
    {
      path: '/',
      name: 'Index', /* 这里的name同上，暂时没发现有什么意思 */
      component: Index /* 注册Index组件 */
    },
    {
      path: '/StoreMsg',
      name: 'StoreMsg',
      component: StoreMsg
    },
    {
      path: '/ActiveMsg',
      name: 'ActiveMsg',
      component: ActiveMsg
    },
    {
      path: '/AbnormalStore',
      name: 'AbnormalStore',
      component: AbnormalStore
    },
    {
      path: '/UserCumulant',
      name: 'UserCumulant',
      component: UserCumulant
    },
    {
      path: '/UserSearch',
      name: 'UserSearch',
      component: UserSearch
    },
    {
      path: '/BadcommentMatch',
      name: 'BadcommentMatch',
      component: BadcommentMatch
    },
    {
      path: '/PopularVegetables',
      name: 'PopularVegetables',
      component: PopularVegetables
    },
    {
      path: '/DisfavorvVegetables',
      name: 'DisfavorvVegetables',
      component: DisfavorvVegetables
    }
  ]
})
