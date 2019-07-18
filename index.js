/* NAV BAR

  */
// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});



/* COMMUNITY Forum
  */
var button = $('button');
var input = $('#comment').val("");
var type = $(".type");

button.on("click", doSomething);

function doSomething(){
  event.preventDefault();
  var output = $('.output');

  output.append(`<p> TYPE SOMETHING PLEASE ${input} </p>`)
  console.log(input);
}
