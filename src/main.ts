import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'normalize.css'
import '@/common/assets/fonts/iconfont.css'
// 轮播组件
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(vueSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
