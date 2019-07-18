var button = $('button');

//converts word value of frequency to number for total equation
function freqConversion(freq){
  var freqNum = 0;
  if (freq === "aweek") {
    freqNum = 52;
  }else if (freq === "amonth") {
    freqNum = 12;
  }
  return freqNum;
}

//converts word value of plastic product type to weight in pounds for total equation
function prodConversion(product){
  if (product === "toothbrushes") {
    var plasNum = 0.05;
  }else if (product === "straws") {
    var plasNum = 0.0009;
  }else if (product === "razors") {
    var plasNum = 0.0005;
  }else if (product === "bottles") {
    var plasNum = 39;
  }else if (product === "bags") {
    var plasNum = 0.011;

  }
  }
  return plasNum;
}

button.on('click', giveInfo);

//calculates waste number and prints it to website
function giveInfo() {
  event.preventDefault();

  var wastenumber = $('.wastenumber'); // where you're appending
  var product = $('#product').val(); // type of plastic
  var freq = $('#freq').val(); // frequency
  var amount = $("#numero").val(); // number inputted

  var total = freqConversion(freq) * prodConversion(product) * amount;
  wastenumber.append(`That's ${total} pounds of waste a year, just from YOU using ${product}! `)
}
