<template>
  <div class="icon_swiper">
    <ul class="icon_list">
      <li>
        <div>
          <a href>
            <div>
              <div class="imgspan">
                <img src="../assets/images/invite.png" alt />
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
                <img src="../assets/images/help.png" alt />
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
                <img src="../assets/images/contact.png" alt />
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
                <img src="../assets/images/agent.png" alt />
              </div>
              <span class="icon-desc">{{iconList[3].name}}</span>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
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
          name: "邀请好友",
          icon: "../assets/images/invite.png"
        },
        {
          id: 13000,
          name: "帮助",
          icon: "../assets/images/help.png"
        },
        {
          id: 20000,
          name: "联系客服",
          icon: "../assets/images/contact.png"
        },
        {
          id: 19000,
          name: "代理商",
          icon: "../assets/images/agent.png"
        }
      ]
    };
  }
};
</script>
