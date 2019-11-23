import defaultImg from "../assets/images/unicom.png"; // import 引入图片
export default {
  data() {
    return {
      allLoaded: false,
      topStatus: "",
      bottomStatus: "",
      keyword:'',
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
