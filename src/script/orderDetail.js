import orderDetailApi from '../script/api/orderDetailApi'

export default {
  data() {
    return {
      pageTitle: '我的订单',
      selected: "1",
      totalOrders: [],
      submittedOrder: [],
      confirmedOrder: [],
      invalidOrder: [],
      curCommissionTotal: 12,
      curOrderData: {
        submitted: 0,
        confirmed: 2,
        invalid: 0
      },
      preOrderData: {
        submitted: 0,
        confirmed: 2,
        invalid: 0
      },
    }
  },
  methods: {
    // 请求后台数据==================
    getMyOrderList(userId) {
      var this_ = this
      this_.check = false
      orderDetailApi.Api_get_getMyOrderList(userId).then((data) => {
        //Success
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  //onload
  mounted: function () {
    for (var i = 0; i < 10; i++) {
      var temp = {
        orderId: i*125648,
        commission: i * 10,
        bussinessType: '联通王卡',
        createTime: new Date().Format("yyyy-MM-dd hh:mm:ss"),
        status: '已提交'
      };
      this.submittedOrder.push(temp);

      var temp3 = JSON.parse(JSON.stringify(temp));
      temp3.status = '已确认';
      this.confirmedOrder.push(temp3);

      var temp4 = JSON.parse(JSON.stringify(temp));
      temp4.status = '已失效';
      this.invalidOrder.push(temp4);
    }
    this.totalOrders = this.submittedOrder.concat(this.confirmedOrder).concat(this.invalidOrder);
  }
}

