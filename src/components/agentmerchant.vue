<style lang="scss" scoped>
  @import '@/style/agentmerchant.scss';
</style>
<script src="@/script/agentmerchant.js"></script>
<template>
  <div id="div_content">
    <mt-header :title="currentMonthRate">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <div id="div_top">
      <div id="div_login_img">
        <img id="img_login" src="@/assets/images/icon/icon_login.jpg" />
      </div>
      <div style="width: 100%;height: 0.5px; background: linear-gradient(to right,#E5A55B, #FED586);"></div>
      <table id="table_top">
        <tr>
          <td>¥ {{bizEarn}}</td>
          <td>¥ {{recommendReward}}</td>
          <td>{{clientNum}}</td>
          <td>{{clientOrder}}</td>
        </tr>
        <tr style="font-size: 14px;">
          <td>业务收入</td>
          <td>推荐奖励</td>
          <td>客户数</td>
          <td>客户订单</td>
        </tr>
      </table>
    </div>

    <div id="div_middle">
      <span style="color: gray;font-weight:400;">您享有的权益</span>
    </div>
   
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        style="position: relative;left: -20px;top:400px;">
      <li v-for="item in contactList" style="list-style: none;height: 70px;">
        <table style="width: 100%;" bgcolor="white">
          <tr style="height: 60px;">
            <td><img :src="item.avatar" style="width: 30px;" /></td>
            <td style="text-align: left;"><span>{{item.phone}}<br /><span class="grayFont" style="font-weight: 100;font-size: small;">{{item.joinDate}}</span></span></td>
            <td>
              <span class="grayFont" style="font-size: small;font-weight: 600;">订单数量:{{item.orderNum}}</span><br />
              <span class="grayFont" style="font-size: small;font-weight: 600;">订单收入:{{item.orderEarn}}</span>
            </td>
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>
