import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios';
import QS from 'qs'
import common from './script/common/common'

Vue.use(MintUI);
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.use(common);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
