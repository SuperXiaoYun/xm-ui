import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/mint-ui/my-mint.scss' //全局修改mint-UI样式
import axios from 'axios'
import QS from 'qs'
import common from './script/common/common'
import store from './script/store/store'

Vue.use(MintUI);
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.use(common);

new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
