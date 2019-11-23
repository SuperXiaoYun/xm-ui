import teamBuildingApi from '../script/api/teamBuildingApi'

export default {
  data() {
    return {
      currentMonthRate: '当月提成比例20%',
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
          orderNum: 2,
          orderEarn:50
        },
        {
          key: 2,
          phone: '186****5502',
          joinDate: '2019-11-21加入',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          orderNum: 2,
          orderEarn: 50
        },
        {
          key: 3,
          phone: '186****5502',
          joinDate: '2019-11-21加入',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          orderNum: 2,
          orderEarn: 50
        }
      ]
    }
  },
  methods: {
    // 请求后台数据==================
    getData() {
      var this_ = this
      this_.check = false
      teamBuildingApi.Api_get_getTeamBuildingData().then((data) => {
        //Success
      }).catch((err) => {
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

