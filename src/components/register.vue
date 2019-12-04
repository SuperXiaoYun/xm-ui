<style lang="scss" scoped>
  @import '@/style/register.scss';
</style>
<script src="@/script/register"></script>
<template>
  <div>
    <mt-header title="注册">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <mt-field label="手机号" type="number" placeholder="请输入手机号" :attr="{ maxlength: 12 }" v-model="form.phone"></mt-field>
    <mt-field label="验证码" type="number" placeholder="请输入验证码" v-model="form.vertifyCode">
      <span class="themefont-color" @click="getVertifyCode">获取验证码</span>
    </mt-field>
    <mt-field label="密码" type="password" placeholder="输入密码" v-model="form.password"></mt-field>
    <mt-field label="邀请码" placeholder="确认邀请码" v-model="form.inviteCode"></mt-field>
    <div id="read_items"><input type="checkbox" v-model="readItems" /> 阅读并同意<span id="items">《相关条款》</span></div>
    <mt-button id="btn_register" size="large" @click="submit">确定注册</mt-button>
    <mt-button plain id="btn_login" @click="login">登录</mt-button>
  </div>
</template>

