<style lang="scss" scoped>
  @import '@/style/login.scss';
</style>
<script src="@/script/login"></script>
<template>
  <div class="login">
    <mt-header title="登录">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div id="div_login_img">
      <img id="img_login" src="@/assets/images/icon/icon_login.jpg" />
    </div>
    <div class="loginreg_body">
      <div class="loginreg_input">
        <Intltel class="label"></Intltel>
        <div style="float:left;width: 1px;height: 44px; background: #cccccc;margin: 0 10px;"></div>
        <input id="userTel" type="number" placeholder="输入手机号" v-model="form.phone" height="50" />
      </div>
      <div class="loginreg_input" id="div_password">
        <input id="password" type="password" placeholder="输入密码" v-model="form.password" />
      </div>
      <div class="loginreg_button">
        <mt-button id="btn_login" size="large" @click="submit">确定登录</mt-button>
      </div>
      <div>
        <mt-button plain id="btn_regain_password">找回密码</mt-button>
        <mt-button plain id="btn_register" @click="register">注册</mt-button>
      </div>
    </div>
  </div>
</template>

