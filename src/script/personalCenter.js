import OrderIcon from "@/components/orderIcon";
import TeamIcon from "@/components/teamIcon";
import UtilIcon from "@/components/utilIcon";
import router from '@/router/index'
import store from '@/script/store/store'
import * as types from '@/script/store/types'
  
export default {
  name: "Personal",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      incomenumber: 30
    };
  },
  methods: {
    logout() {
      // 401 清除token信息并跳转到登录页面
      store.commit(types.LOGOUT)

      // 只有在当前路由不是登录页面才跳转
      router.currentRoute.path !== 'login' &&
        router.replace({
          path: 'login',
          query: { redirect: router.currentRoute.path },
        })
    },
    agentmerchant() {
      this.$router.push("/agentmerchant");
    }
  },
  components: {
    OrderIcon,
    TeamIcon,
    UtilIcon
  }
};
