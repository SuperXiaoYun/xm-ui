<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/style/home.scss';
</style>
<script src="@/script/home"></script>
<template>
  <div class="home-page">
    <div class="home-page-header">
      <div class="header-serach">
        <mt-search v-model="keyword" style="height:100%"></mt-search>
      </div>
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
                <img :src="item.icon" style="width:100%" />
              </div>
              <div class="product1-bottom">
                联通王卡<br />
                <div class="product1-size1">
                  免费领卡，全国送卡上门服务<br />
                  免漫游，全国使用都一样<br />
                  <p>开卡工资:<span class="big-red">20</span>元/张</p>
                </div>
              </div>
            </div>
            <div class="product2">
              <div class="product2-top">
                <div class="pd-t20 pd-l15">
                  银河证券<br />
                  <div>
                    <p>限时活动</p>
                    <p>保本收益理财产品</p>
                    <p>年化收益率<span class="big-red">6</span>%</p>
                  </div>
                </div>
              </div>
              <div class="product2-bottom">
                银河证券理财<br />
                <div class="product1-size1">
                  投资金都在5万以上<br />
                  28天利息收入250元<br />
                  <p>推广工资:<span class="big-red">200</span>元/张</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
