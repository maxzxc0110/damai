var performid = '8952708'; //日期ID
var priceid = '11766587'; //价格ID
var person = '2'; //人数，大麦网规定一张身份证最多购买两张票
while (1) {
  var re = main();
  if (re == 1) {
    break;
  }
  sleep(1000); //1000=1s
}
function sleep(n) {
  var start = new Date().getTime();
  while (true) if (new Date().getTime() - start > n) break;
}
function main() {
  var buy = document.getElementById('btnBuyNow');
  var Xuanzuo = document.getElementById('btnXuanzuo');
  if (buy !== null) {
    var Buytext = buy.innerHTML;
    if (Buytext == '立即购买' || ||Buytext == '立即预定') {
      qiang()
      return 1;
    } else {
      document.location.reload()
    }
  } else if (Xuanzuo !== null) {
    var Xuanzuotext = Xuanzuo.innerHTML;
    if (Xuanzuotext == '选座购买') {
      Xuanzuo.click()
      return 1;
    } else {
      document.location.reload()
    }
  } else {
    document.location.reload()
  }
}
function qiang() {
  var firstperform = document.getElementById('firstperform');
  firstperform.className = 'itm  itm-sel';
  var priceList = document.getElementById('priceList').childNodes;
  var li = priceList[3].childNodes[1].childNodes[2];
  li.className = 'itm  itm-sel';
  var str = '<div class="ct" style=""><ul class="lst"><li class="itm" style="" data-performid=' + performid + ' data-priceid=' + priceid + '><span class="txt txt-datetime ">"2017-10-28 周六 19:30"</span><span class="txt txt-price">"680"</span><span class="m-nums"><a class="btn btn-low" href="javascript:;">减</a><input class="ipt ipt-num" type="text" value=' + person + '><a class="btn btn-add" href="javascript:;">加</a></span><span class="tips tips-stock"><strong></strong></span><a class="btn btn-del" href="javascript:;"><i></i>删除</a></li></ul></div><div class="ops"><a href="javascript:;" class="u-btn u-btn-c1 u-btn-choose" id="btnXuanzuo" style="">选座购买</a><a class="u-btn u-btn-buynow" href="javascript:;" id="btnBuyNow">立即购买</a></div>'; //测试
  document.getElementById('cartList').innerHTML = str;
  var bt = document.getElementById('btnBuyNow');
  bt.click();
}
