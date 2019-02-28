function rnd (min, max){
  var num = Math.floor(Math.random()*(max-min))-min;
  return num;
}
function pushElem (arr) {
  var elem = rnd(0,100);
  arr.push(elem);
  if (elem % 2 == 0) {
    $(".square").css({"background":"black","color":"red"})
  }else {
      $(".square").css({"background":"red","color":"black"})
  }
  $(".square").html(arr.join(" "));
}

$("button").click(function(){
  pushElem (array)
});
var array = [];
