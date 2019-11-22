import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios';
import QS from 'qs'

Vue.use(MintUI);
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
