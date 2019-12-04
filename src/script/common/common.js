// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function (fmt) { //author: meizz   
  var o = {
    "M+": this.getMonth() + 1,                 //月份   
    "d+": this.getDate(),                    //日   
    "h+": this.getHours(),                   //小时   
    "m+": this.getMinutes(),                 //分   
    "s+": this.getSeconds(),                 //秒   
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
    "S": this.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

//add days on date
Date.prototype.AddDate = function (days) {
  if (days == undefined || days == '') {
    days = 1;
  }
  var date = new Date(this);
  date.setDate(date.getDate() + days);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
}

//add years on date
Date.prototype.AddYear = function (years) {
  if (years == undefined || years == '') {
    years = 1;
  }
  var date = new Date(this);
  date.setFullYear(date.getFullYear() + years);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
}

Date.prototype.clone = function () {
  return new Date(this.valueOf());
}

//judge file is type of excel 
File.prototype.IsExcel = function () {
  var flag = false;
  var arr = ["csv", "xlsx", "xls"];
  var index = this.name.lastIndexOf(".");
  var ext = this.name.substr(index + 1).toLowerCase();
  for (var i = 0; i < arr.length; i++) {
    if (ext == arr[i]) {
      flag = true;
      break;
    }
  }
  return flag;
}

function getFormatDate(arg) {
  if (arg == undefined || arg == '') {
    return '';
  }

  var re = arg + '';
  if (re.length < 2) {
    re = '0' + re;
  }

  return re;
}

Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

class commonTools {
  constructor() {
  }
  /**
 * create and download file
 * @param  {String} fileName 
 * @param  {String} content  
 */
  createAndDownloadFile(fileName, content) {
    var aTag = document.createElement('a');
    var blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
  }
  deepCopy(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] instanceof Date) {
          result[key] = obj[key].clone();
        } else if ((typeof obj[key] === 'object'
          || obj[key] instanceof Array) && obj[key] !== null) {
          result[key] = this.deepCopy(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
  floor(num, precision) {
    if (isNaN(num))
      return num;
    var p = Math.pow(10, precision);
    return Math.floor(num * p) / p;
  }
}
const tools = new commonTools()
export default tools
