<style lang="scss" scoped>
  @import '../style/orderDetail.scss';
</style>
<script src="../script/orderDetail.js"></script>
<template>
  <div id="div_content">
    <mt-header :title="currentMonthRate">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <table id="layout_table" border="0">
      <tr style="background-color: white;">
        <td>
          <p>已提交单数</p>
          {{curMonth.award}}
        </td>
        <td>
          <p>已确认单数</p>
          {{curMonth.num}}
        </td>
        <td>
          <p>已失效单数</p>
          {{curMonth.deduct}}
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

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">已提交</mt-tab-item>
      <mt-tab-item id="3">已确认</mt-tab-item>
      <mt-tab-item id="4">已失效</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="item in totalOrders" class="thin-gray">
          <mt-cell :title="'订单号:' + item.orderId" :value="item.bussinessType+':'+item.commission" style="margin: 10px 5px 2px 5px;"/>
          <mt-cell :title="'时间:' + item.createTime" :value="'订单状态:'+item.status" style="margin: 2px 5px 20px 5px;">
          </mt-cell>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
