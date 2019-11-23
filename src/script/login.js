import { MessageBox } from 'mint-ui';
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
        MessageBox.alert('请输入手机号和密码!');
        return;
      }
      this.$store.commit(types.LOGIN, this.form);
      let redirect = decodeURIComponent(this.$route.query.redirect || '/');
      this.$router.push({
        path: redirect
      })
    },
  },
  mounted() {
    this.$store.commit(types.TITLE, 'Login');
  },
};
