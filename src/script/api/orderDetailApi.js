import https from '@/https.js'

class OrderDetailRequest {
  constructor() {
  }
  Api_get_getMyOrderList(userId) {
    return https.ApiRequest({
      url: 'order/mylist?userId=' + userId,
      data: userId,
      type: 'get'
    });
  }
}
var obj = new OrderDetailRequest();
export default obj;
