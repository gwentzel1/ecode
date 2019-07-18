var truth = $(".truth");
var myth = $(".myth");
var f = $(".false");

truth.on("click",respondwithFalse);

function respondwithFalse(){
  event.preventDefault();
  console.log(truth);
  f.text(` You are incorrect. Around one million drinks that are in plastic bottles are sold every minute across the world. This is harmful because plastic cannot decompose, and not everybody recycles. Recycling would allow the plastic from the bottles to become repurposed and used again.  `);
  truth.toggleClass(`red`);
}

myth.on("click",respondwithTrue);

function respondwithTrue(){
  event.preventDefault();
  console.log(myth);
  f.text(` You are correct. Around one million drinks that are in plastic bottles are sold every minute across the world. This is harmful because plastic cannot decompose, and not everybody recycles. Recycling would allow the plastic from the bottles to become repurposed and used again.  `);
  myth.toggleClass(`green`);
}

var truth1 = $('.truth1');
var myth1 = $(".myth1");
var false1 = $(".false1");

truth1.on("click", respondwithTrue1);

function respondwithTrue1() {
  event.preventDefault();
  false1.text(`You are correct. Unfortunately, at the rate and way we discard plastic will make the ocean have a great increase in plastic in the upcoming years.`);
  truth1.toggleClass(`green`);
}

myth1.on("click", respondwithFalse1);

function respondwithFalse1() {
  event.preventDefault();
  false1.text(`You are incorrect. Unfortunately, at the rate and way we discard plastic will make the ocean have a great increase in plastic in the upcoming years.`);
  myth1.toggleClass(`red`);
}

var truth2 = $(".truth2");
var myth2 = $(".myth2");
var false2 = $(".false2");

truth2.on("click",truee);

function truee() {
  event.preventDefault();
  false2.text(` You are correct. When synthetic fiber is rinsed or put under water, the fiber releases microplastics. Microplastics (or small pieces of plastic) can be mistaken for food by many sea creatures, such as sea turtles. These microplastics may release toxins into the creatures they are consumed by. If that creature is eaten by another creature, it will pass the toxins on the other creature, thus possibly disrupting food chains. Additionally, it sits in the stomach of creatures and make them feel full. This means that they will not be consuming food that they need. `);
  truth2.toggleClass(`green`);
}

myth2.on("click", falsee);

function falsee() {
  event.preventDefault();
  false2.text(` You are incorrect. When synthetic fiber is rinsed or put under water, the fiber releases microplastics. Microplastics (or small pieces of plastic) can be mistaken for food by many sea creatures, such as sea turtles. These microplastics may release toxins into the creatures they are consumed by. If that creature is eaten by another creature, it will pass the toxins on the other creature, thus possibly disrupting food chains. Additionally, it sits in the stomach of creatures and make them feel full. This means that they will not be consuming food that they need. `);
  myth2.toggleClass(`red`);
}

var truth3 = $(".truth3");
var myth3 = $(".myth3");
var false3 = $(".false3");

truth3.on("click", truth35);

function truth35(){
  event.preventDefault();
  false3.text(`You are correct. It is called bioplastic.`);
  truth3.toggleClass(`green`);
}

myth3.on("click", myth35);

function myth35(){
  event.preventDefault();
  false3.text(`You are incorrect. it is called bioplastic.`);
  myth3.toggleClass(`red`);
}

var truth4 = $(".truth4");
var myth4 = $(".myth4");
var false4 = $(".false4");

truth4.on("click", false45);

function false45() {
  event.preventDefault();
  false4.text(`That is incorrect. A study found that over 300 million tons (over 600 billion pounds) of plastic was thrown out in 2016 alone. And it looks like plastic production is not slowing down anytime soon. Although some brands are taking action against one use plastic, they are still using plastic, and a lot of companies continue to use one use plastic.`);
  truth4.toggleClass(`red`);
}

myth4.on("click", true5);

function true5() {
  event.preventDefault();
  false4.text(`That is correct. A study found that over 300 million tons (over 600 billion pounds) of plastic was thrown out in 2016 alone. And it looks like plastic production is not slowing down anytime soon. Although some brands are taking action against one use plastic, they are still using plastic, and a lot of companies continue to use one use plastic.`);
  myth4.toggleClass(`green`);
}
