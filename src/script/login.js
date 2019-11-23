import * as types from '@/script/store/types'
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
      token: ''
    };
  },
  methods: {
    submit() {
      if (!this.form.phone || !this.form.password) {
        this.$indicator.open({
          text: '登录中....',
          spinnerType: 'fading-circle'
        });
        var self = this.$indicator;
        setTimeout(function () {
          self.close();
        }, 2000);
        return;
      } 
      if (this.token) {
        this.$store.commit(types.LOGIN, this.token)
        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
        this.$router.push({
          path: redirect
        })
      }
    },
  },
  mounted() {
    this.$store.commit(types.TITLE, 'Login');
  },
};
