var button = $('button');
var wastenumber = $('.wastenumber');
var product = $('#product').val();

function freqConversion(freq){
  var freqNum = 0;
  if (freq == "aweek") {
    var freqNum = 52;
  }else if (freq == "amonth") {
    var freqNum = 12;
  }return freqNum;
}

function prodConversion(product){
  var plasNum = 0;
  if (product == "toothbrushes") {
    var plasNum = 0.05;
  }else if (product == "straws") {
    var plasNum = 0.0009259415;
  }return plasNum;
}

button.on('click', giveInfo);

function giveInfo() {
  event.preventDefault();
  var freq = $('#freq').val();
  var amount = $('#numero').val();
  var total = freqNum * plasNum * amount;
  wastenumber.append(`That's ${total} pounds of waste a year!`)
}
