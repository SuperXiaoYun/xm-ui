<style lang="scss" scoped>
  @import '@/style/personalCenter.scss';
</style>
<script src="@/script/personalCenter.js"></script>
<template>
  <div class="outer">
    <div class="header">
      <div class="set-line">
        <img class="setImg" src="../assets/images/set.png" alt />
      </div>
      <div class="set-text">
        <span class="settext">设置</span>
      </div>
      <div class="app-info">
        <img class="app-img" src="../assets/images/logo.png" alt />
        <textarea class="phonenumber">15700000000</textarea>
      </div>
      <div class="acc-container">
        <div class="acc-main">
          <div class="acc-info">
            <label class="acclevel">正式会员</label>
            <label class="invitecode">邀请码：</label>
          </div>
          <div class="acc-level">
            <label class="accclass">一级</label>
            <label class="codenumber">000000</label>
          </div>
        </div>
        <div class="acc-button">
          <button class="upgrade">升级</button>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="myincome">
        <div class="incomenumber">我的收入：{{incomenumber}}</div>
        <div class="incomeleft">
          <span class="income">订单余额：{{incomenumber}}</span>
          <button class="withdraw">立即提现></button>
        </div>
        <div class="iconSwip">
          <OrderIcon></OrderIcon>
        </div>
      </div>
      <div class="team">
        <div class="teamBuild">团建</div>
        <div class="teamIconSwip">
          <TeamIcon></TeamIcon>
        </div>
      </div>
      <div class="util">
        <div class="utils">必备工具</div>
        <div class="utilIconSwip">
          <UtilIcon></UtilIcon>
        </div>
      </div>
    </div>
    <mt-button type="primary" size="large" @click="agentmerchant">代理商</mt-button>
    <mt-button type="danger" size="large" @click="logout">退出登录</mt-button>
  </div>
</template>
