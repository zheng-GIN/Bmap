import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import BMap from 'vue-baidu-map'

Vue.use(BMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'y13u83qXyIljDito48R4SAvcUltAIDh0'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
