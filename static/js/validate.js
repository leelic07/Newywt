export default {
  //日期格式转换
  dateFormat(){
    let year,month,date,dateStr;
    let dateArr = [];
    for(let i = 0;i < arguments.length;i++){
      year = arguments[i].substring(6,10);
      month = arguments[i].substring(0,2);
      date = arguments[i].substring(3,5);
      dateStr = year+'-'+month+'-'+date;
      dateArr.push(dateStr);
    }
    if(dateArr.length == 1){
      return dateArr[0];

    }else {
      return dateArr;
    }
  }
}
