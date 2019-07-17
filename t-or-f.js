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
