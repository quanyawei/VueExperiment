// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 配置mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// myui,myli组件
import MyUi from '@/components/common/MyUi'
import MyLi from '@/components/common/MyLi'

import App from './App'
import router from './router'
// 配置axios
import Axios from 'axios'
// 配置公告URL

Vue.component(MyUi.name,MyUi)
Vue.component(MyLi.name,MyLi)

Axios.defaults.baseURL = 'http://localhost:8080/static/json'
Vue.prototype.$axios = Axios
Vue.use(MintUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
