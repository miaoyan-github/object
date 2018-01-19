import Vue from 'vue' /* 引入vue文件 */
import Router from 'vue-router' /* 引入vue路由模块 */
import HelloWorld from '@/components/HelloWorld' /* 引入HelloWorld.vue模版，这里的“@”相当于“../” */

Vue.use(Router) /* 使用路由 */

export default new Router({
  routes: [ /* 配置路由，规定“/”引入到HelloWorld组件 */
    {
      path: '/',
      name: 'HelloWorld', /* 这里的name同上，暂时没发现有什么意思 */
      component: HelloWorld /* 注册HelloWorld组件 */
    }
  ]
})
