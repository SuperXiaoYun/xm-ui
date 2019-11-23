<template>
  <div class="home-page">
    <div class="home-page-header">
      <!--<div class="header-serach">
        <mt-search class="search-component"></mt-search>
      </div>-->
      <div class="header-post">
        <img src="../assets/images/advert.png" alt />
      </div>
      <div class="header-joblist">
        <img src="../assets/images/joblist.png" alt />
      </div>
    </div>
    <div class="home-page-body">
      <ul class="product-list">
        <li class="product" v-for="item in imgList">
          <div class="product-wrapper">
            <div class="product1">
              <div class="product1-top">
                <img :src="item.icon" alt />
              </div>
              <div class="product1-bottom">
                <p>联通王卡</p>
                <p>免费领卡，全国送卡上门服务</p>
                <p>免漫游，全国使用都一样</p>
                <p>开卡工资:20元一张</p>
              </div>
            </div>
            <div class="product2">
              <div class="product2-top">
                <p>银河证券</p>
                <p>限时活动</p>
                <p>保本收益理财产品</p>
                <p>年化收益率6%</p>
              </div>
              <div class="product2-bottom">
                <p>银河证券理财</p>
                <p>投资金都在5万以上</p>
                <p>28天利息收入250元</p>
                <p>推广工资:200元/张</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import defaultImg from "../assets/images/unicom.png"; // import 引入图片
export default {
  data() {
    return {
      allLoaded: false,
      topStatus: "",
      bottomStatus: "",
      moveTranslate: 0,
      imgList: [
        {
          id: 15000,
          name: "全部订单",
          icon: defaultImg
        },
        {
          id: 15000,
          name: "全部订单",
          icon: defaultImg
        },
        {
          id: 15000,
          name: "全部订单",
          icon: defaultImg
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  height: 100%;
  width: 100%;
  background-image: url("../assets/images/background.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}
.home-page-header {
  background-color: orange;
  height: 200px;
  width: 100%;
  top: 0px;
  z-index: 999;
}
.header-serach {
  width: 100%;
  height: 40px;
}
.header-post {
  width: 90%;
  height: 110px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  border-radius: 50%;
}
.header-post img {
  width: 100%;
  height: 100%;
}
.header-joblist {
  width: 90%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}
.header-joblist img {
  width: 100%;
  height: 100%;
}
.header-search {
  width: 100%;
  height: 10px;
}
.home-page-body {
  /* background-color: aqua; */
  width: 100%;
  flex: 1;
}
.test {
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 5px;
}
.product-list {
  position: relative;
  width: 100%;
  height: 100%;
}
.product {
  position: relative;
  width: 100%;
  height: 200px;
}
.product-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 5px;
}
.product1 {
  position: relative;
  width: 45%;
  height: 200px;
  float: left;
}
.product1-top {
  position: relative;
  width: 100%;
  height: 100px;
  padding-top: 10px;
  background-color: gray;
}
.product1-top img {
  width: 80%;
  height: 80%;
}
.product1-bottom {
  position: relative;
  width: 100%;
  height: 100px;
}
.product2 {
  position: relative;
  width: 45%;
  height: 200px;
  float: right;
}
.product2-top {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: gray;
}
.product2-bottom {
  position: relative;
  width: 100%;
  height: 100px;
}
.product-top {
  position: relative;
  width: 50%;
  height: 400px;
}
.product-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
}
</style>