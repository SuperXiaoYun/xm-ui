import https from '../https.js'
export default {
  data() {
    return {
      selected: 1,
      totalOrders: [],
      submittedOrder: [],
      confirmedOrder: [],
      invalidOrder: [],
      currentMonthRate: '我的订单',
      currentTeamBuilding: 2,
      total: 12,
      curMonth: {
        award: '2*2=4',
        num: 4,
        deduct: 8
      },
      previousMonth: {
        award: '2*2=4',
        num: 3,
        deduct: 13
      },
      nextMonth: {
        singleDeduct: 20,
        needNum: 3,
        upDeduct: 30
      },
    }
  },
  methods: {
    // 请求后台数据==================
    getData(date) {
      var this_ = this
      this_.check = false
      var jobj = { data: { 'menuDate': date, 'token': this.base.token } }
      let string = JSON.stringify(jobj)
      let params = { dailyInfo: string }
      https.fetchPost('/meals/mobile/getDailyMenuByDate', params)
        .then((data) => {
          this_.base.indexData = data
          this_.check = true
          // console.log('thenthenthenthen',data)
        })
        .catch((err) => {
          console.log(err)

        })
    }
  },
  mounted: function () {
    for (var i = 0; i < 10; i++) {
      var temp = {
        orderId: i*125648,
        commission: i * 10,
        bussinessType: '联通王卡',
        createTime: new Date().format("yyyy-MM-dd hh:mm:ss"),
        status: '已提交'
      };
      this.submittedOrder.push(temp);

      temp.status = '已确认';
      this.confirmedOrder.push(temp);

      temp.status = '已失效';
      this.invalidOrder.push(temp);
    }
    this.totalOrders = this.submittedOrder.concat(this.confirmedOrder).concat(this.invalidOrder);
  }
}

