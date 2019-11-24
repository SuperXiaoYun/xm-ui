<style lang="scss" scoped>
  @import '@/style/orderDetail.scss';
</style>
<script src="@/script/orderDetail.js"></script>
<template>
  <div id="div_content">
    <mt-header :title="pageTitle">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <table id="layout_table" border="0">
      <tr style="background-color: white;">
        <td colspan="3">
          <p class="mg-r10">当月佣金总额:</p>
          <span>{{curCommissionTotal}}</span>
        </td>
      </tr>
      <tr style="background-color: white;">
        <td>
          <p>当月已提交单数</p>
          {{curOrderData.submitted}}
        </td>
        <td>
          <p>当月已确认单数</p>
          {{curOrderData.confirmed}}
        </td>
        <td>
          <p>当月已失效单数</p>
          {{curOrderData.invalid}}
        </td>
      </tr>
      <tr class="grayFont" style="background-color: white;">
        <td>
          <p>上月已提交单数</p>
          {{preOrderData.submitted}}
        </td>
        <td>
          <p>上月已确认单数</p>
          {{preOrderData.confirmed}}
        </td>
        <td>
          <p>上月已失效单数</p>
          {{preOrderData.invalid}}
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
          <mt-cell :title="'订单号:' + item.orderId" :value="item.bussinessType+':'+item.commission" style="margin: 10px 5px 2px 5px;" />
          <mt-cell :title="'时间:' + item.createTime" :value="'订单状态:'+item.status" style="margin: 2px 5px 20px 5px;">
          </mt-cell>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-for="item in submittedOrder" class="thin-gray">
          <mt-cell :title="'订单号:' + item.orderId" :value="item.bussinessType+':'+item.commission" style="margin: 10px 5px 2px 5px;" />
          <mt-cell :title="'时间:' + item.createTime" :value="'订单状态:'+item.status" style="margin: 2px 5px 20px 5px;">
          </mt-cell>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div v-for="item in confirmedOrder" class="thin-gray">
          <mt-cell :title="'订单号:' + item.orderId" :value="item.bussinessType+':'+item.commission" style="margin: 10px 5px 2px 5px;" />
          <mt-cell :title="'时间:' + item.createTime" :value="'订单状态:'+item.status" style="margin: 2px 5px 20px 5px;">
          </mt-cell>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div v-for="item in invalidOrder" class="thin-gray">
          <mt-cell :title="'订单号:' + item.orderId" :value="item.bussinessType+':'+item.commission" style="margin: 10px 5px 2px 5px;" />
          <mt-cell :title="'时间:' + item.createTime" :value="'订单状态:'+item.status" style="margin: 2px 5px 20px 5px;">
          </mt-cell>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
