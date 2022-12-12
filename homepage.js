// $('.dropdown-toggle').dropdown();

// $(document).ready(function(){
//     $(".dropdown-toggle").dropdown();
//     console.log($('.dropdown-toggle'))
//   });

var comedyClick = document.querySelector(".comedy");
var actionClick = document.querySelector(".action");
var netflixClick = document.querySelector(".netflix");
var disneyClick = document.querySelector(".Disney");

// local storage set functions for all click events
function saveComedyChoice(event) {
  // console.log("clicked comedy");
  var comedy = event.target;
  // console.log(event)
  var comedyKey = comedy;
  var comedyValue = true;
  localStorage.setItem("comedy", comedyValue);
}

function saveActionChoice(event) {
  // console.log("clicked action");
  var action = event.target;
  // console.log(event)
  var actionKey = action;
  var actionValue = true;
  localStorage.setItem("action", actionValue);
}

function saveNetflixChoice(event) {
  // console.log("clicked netflix");
  var netflix = event.target;
  // console.log(event)
  var netflixKey = netflix;
  var netflixValue = true;
  localStorage.setItem("netflix", netflixValue);
}

function saveDisneyChoice(event) {
  // console.log("clicked disney");
  var disney = event.target;
  // console.log(event)
  var disneyKey = disney;
  var disneyValue = true;
  localStorage.setItem("disney", disneyValue);
}

function compareChoices(){
  var gotComedyChoice = localStorage.getItem("comedy");
  var gotActionChoice = localStorage.getItem("action");
  var gotNetflixChoice = localStorage.getItem("netflix");
  var gotDisneyChoice = localStorage.getItem("disney");

  if (gotComedyChoice && gotNetflixChoice){
    location.assign("./imdb-netflix-c.html");
  }
  if (gotComedyChoice && gotDisneyChoice){
  location.assign("./imdb-disney-c.html"); 
  }
  if (gotActionChoice && gotNetflixChoice){
  location.assign("./imdb-netflix-a.html");
  }
if (gotActionChoice && gotDisneyChoice){
  location.assign("./imdb-disney-a.html");
}  
}
// need to local storage get? and run if statement function
// location.assign("./imdb-disney-a.html");
// location.assign("./imdb-disney-c.html");
// location.assign("./imdb-netflix-a.html");
// location.assign("./imdb-netflix-c.html");

// event listeners
comedyClick.addEventListener("click", saveComedyChoice);
actionClick.addEventListener("click", saveActionChoice);
netflixClick.addEventListener("click", saveNetflixChoice);
disneyClick.addEventListener("click", saveDisneyChoice);
