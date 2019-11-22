<template>
  <div class="teamIconDiv">
    <div class="pef">
      <div>{{0}}元</div>
      <div>团队提成</div>
    </div>
    <div class="get">
      <div>{{0}}元</div>
      <div>团建收入</div>
    </div>
    <div class="award">
      <div>{{0}}元</div>
      <div>团队奖励</div>
    </div>
  </div>
</template>
<style>
.teamIconDiv {
  padding-top: 15px;
  width: 100%;
  height: 80px;
}
.pef {
  width: 30%;
  height: 80px;
  float: left;
}
.get {
  width: 30%;
  height: 80px;
  float: left;
}
.award {
  width: 30%;
  height: 80px;
  float: left;
}
</style>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          id: 15000,
          name: "团队提成"
        },
        {
          id: 13000,
          name: "团队收入"
        },
        {
          id: 20000,
          name: "团队奖励"
        }
      ]
    };
  }
};
</script>
