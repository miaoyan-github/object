// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' /* 引入vue文件 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App' /* 引入同目录下的App.vue模块 */
import router from './router' /* 引入vue的路由 */
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app', /* 定义作用范围为——index.html里id="app"的范围 */
  router, /* 引入路由 */
  components: { App }, /* 注册引入的App.vue组件 */
  template: '<App/>', /* 给Vue实例初始一个App组件作为template 相当于默认组件 */
  render: h => h(App)
})
