<template>
  <div class="icon_swiper">
    <ul class="icon_list">
      <li>
        <div>
          <a href>
            <div>
              <div class="imgspan">
                <img src="../assets/images/all.png" alt />
              </div>
              <span class="icon-desc">{{iconList[0].name}}</span>
            </div>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href>
            <div>
              <div class="imgspan">
                <img src="../assets/images/commit.png" alt />
              </div>
              <span class="icon-desc">{{iconList[1].name}}</span>
            </div>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href>
            <div>
              <div>
                <img src="../assets/images/confirm.png" alt />
              </div>
              <span class="icon-desc">{{iconList[2].name}}</span>
            </div>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href>
            <div>
              <div>
                <img src="../assets/images/redPackage.png" alt />
              </div>
              <span class="icon-desc">{{iconList[3].name}}</span>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.icon_list {
  font-size: 14px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
}
ul li {
  width: 25%;
  margin-bottom: 10px;
  /* float: left; */
}
ul li div a div {
  width: 100%;
  height: 60px;
  padding: 0%;
}
ul li div a div div {
  width: 100%;
  height: 30px;
}
ul li div a div span {
  width: 100%;
  height: 20px;
}

ul li:active {
  background: #ccc;
}

ul img {
  height: 30px;
  width: 30px;
}

a {
  text-decoration: none;
}
</style>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          id: 15000,
          name: "全部订单",
          icon: "../assets/images/all.png"
        },
        {
          id: 13000,
          name: "已提交",
          icon: "../assets/images/commit.png"
        },
        {
          id: 20000,
          name: "已经确认",
          icon: "../assets/images/confirm.png"
        },
        {
          id: 19000,
          name: "首充补贴",
          icon: "../assets/images/redPackage.png"
        }
      ]
    };
  }
};
</script>
