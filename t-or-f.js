var truth = $(".truth");
var myth = $(".myth");
var f = $(".false");

truth.on("click",respondwithFalse);

function respondwithFalse(){
  event.preventDefault();
  console.log(truth);
  f.text(` You are incorrect. Around one million drinks that are in plastic bottles are sold every minute across the world. This is harmful because it takes a long time for plastic to decay in landfills, and not everybody recycles. Recycling would allow the plastic from the bottles to become repurposed and used again.  `);
}

myth.on("click",respondwithTrue);

function respondwithTrue(){
  event.preventDefault();
  console.log(myth);
  f.text(` You are correct. Around one million drinks that are in plastic bottles are sold every minute across the world. This is harmful because it takes a long time for plastic to decay in landfills, and not everybody recycles. Recycling would allow the plastic from the bottles to become repurposed and used again.  `);
}

var truth1 = $('.truth1');
var myth1 = $(".myth1");
var false1 = $(".false1");

truth1.on("click", respondwithTrue1);

function respondwithTrue1() {
  event.preventDefault();
  false1.text(`You are correct. Unfortunately, at the rate and way we discard plastic will make the ocean have a great increase in plastic in the upcoming years.`);
}

myth1.on("click", respondwithFalse1);

function respondwithFalse1() {
  event.preventDefault();
  false1.text(`You are incorrect. Unfortunately, at the rate and way we discard plastic will make the ocean have a great increase in plastic in the upcoming years.`);
}
