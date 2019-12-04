import { MessageBox } from 'mint-ui';

export default {
  data() {
    return {
      form: {
        phone: "",
        vertifyCode: "",
        password: "",
        inviteCode: "",
      },
      readItems: false,
    };
  },
  methods: {
    submit() {
      if (!this.form.phone) {
        MessageBox.alert('请输入手机号!');
        return;
      } else if (!this.form.vertifyCode) {
        MessageBox.alert('请输入验证码!');
        return;
      } else if (!this.form.password) {
        MessageBox.alert('请输入密码!');
        return;
      } else if (!this.form.inviteCode) {
        MessageBox.alert('请输入邀请码!');
        return;
      } else if (!this.readItems) {
        MessageBox.alert('请阅读用户协议!');
        return;
      }
    },
    login() {
      this.$router.push('/login');
    },
    getVertifyCode() {
      MessageBox.alert('发送成功!');
    },
  },
  mounted() {
  },
};
