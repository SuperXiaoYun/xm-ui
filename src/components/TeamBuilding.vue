<style lang="scss" scoped>
  @import '@/style/teamBuilding.scss';
</style>
<script src="@/script/teamBuilding.js"></script>
<template>
  <div id="div_content">
    <mt-header :title="currentMonthRate">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div id="div_currentTeamBuilding">
      <p>当月发展下线人数</p>
      {{currentTeamBuilding}}
    </div>

    <div id="div_total">
      <p>下线总人数</p>
      {{total}}
    </div>
    <table id="layout_table" border="0">
      <tr style="background-color: white;">
        <td>
          <p>团队奖励</p>
          {{curMonth.award}}元
        </td>
        <td>
          <p>本月团队单数</p>
          {{curMonth.num}}单
        </td>
        <td>
          <p>团队提成</p>
          {{curMonth.deduct}}元
        </td>
      </tr>
      <tr class="grayFont" style="background-color: white;">
        <td>
          <p>上月团队奖励</p>
          {{previousMonth.award}}元
        </td>
        <td>
          <p>上月团队单数</p>
          {{previousMonth.num}}单
        </td>
        <td>
          <p>上月团队提成</p>
          {{previousMonth.deduct}}元
        </td>
      </tr>
      <tr style="background-color: white;">
        <td>
          <p>下月每单提成</p>
          {{nextMonth.singleDeduct}}%
        </td>
        <td>
          <p>升级还需团建</p>
          {{nextMonth.needNum}}
        </td>
        <td>
          <p>升级每单提成</p>
          {{nextMonth.upDeduct}}%
        </td>
      </tr>
    </table>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        style="position: relative;left: -20px;">
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
