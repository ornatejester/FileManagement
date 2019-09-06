// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '../static/icon/iconfont.css'
import  store from './store/store'

//使用mock模拟数据的接口
import Mock from 'mockjs'
import './mock/mock_loade'
import './mock/mock_query_files'
import './mock/mock_query_antecedents'
import './mock/mock_privilege'
// import VueResource from 'vue-resource'

//路由守卫
// import './filter/filter'

//验证码的相关依赖
import './Verification/verificationstyle.css'


import axios from 'axios'
// import axios from './Axios/Axios'
 //修改axios的原型链
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Mock)

// Vue.use(VueResource)
import {mapMutations} from 'vuex'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    if(sessionStorage.getItem('token')){
      this.$store.commit('InitUser',JSON.parse(sessionStorage.getItem('user')))
      this.$store.commit('InitToken',sessionStorage.getItem('token'))
    }
    else{
      this.$router.push('/')
    }
  },

})
