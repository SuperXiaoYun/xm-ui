import { MessageBox } from 'mint-ui';
import * as types from '@/script/store/types'
import Intltel from '@/templates/intlTelInput/index'

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
  components: {
    Intltel
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
    register() {
      this.$router.push('/register');
    }
  },
  mounted() {
    this.$store.commit(types.TITLE, 'Login');
  },
};
