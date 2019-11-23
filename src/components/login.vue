<style lang="scss" scoped>
  @import '@/style/login.scss';
</style>
<script src="@/script/login"></script>
<template>
  <div class="login">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div id="div_login_img">
      <img id="img_login" src="@/assets/images/icon/icon_login.jpg" />
    </div>
    <div class="loginreg_body">
      <div class="loginreg_input">
        <!--<img class="label" src="@/assets/images/icon/4102.png" />-->
        <input id="userTel" type="number" placeholder="输入手机号" v-model="form.phone" />
      </div>
      <div class="loginreg_input">
        <!--<img class="label" src="@/assets/images/icon/4101.png" />-->
        <input id="password" type="password" placeholder="输入密码" v-model="form.password" />
      </div>
      <p class="forget_password_p">忘记密码?</p>
      <div class="loginreg_button">
        <button id="login" type="button" @click="submit">登录</button>
      </div>
      <div class="loginreg_button">
        <p class="loginreg_p_line"></p>
        <a id="register">新用户注册</a>
        <p class="loginreg_p_line"></p>
      </div>
    </div>
  </div>
</template>

