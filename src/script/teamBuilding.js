import https from '../https.js'
export default {
  data() {
    return {
      currentMonthRate: '当前团队每单提成20%',
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
      contactList: [
        {
          key: 1,
          phone: '186****5502',
          joinDate: '2019-11-21加入',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: '订单数量:2'
        },
        {
          key: 2,
          phone: '186****5502',
          joinDate: '2019-11-21加入',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: '订单数量:2'
        },
        {
          key: 3,
          phone: '186****5502',
          joinDate: '2019-11-21加入',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: '订单数量:2'
        }
      ]
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
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.contactList[this.contactList.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.contactList.push(last);
        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted: function () {
  }
}

