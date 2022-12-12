// $('.dropdown-toggle').dropdown();

// $(document).ready(function(){
//     $(".dropdown-toggle").dropdown();
//     console.log($('.dropdown-toggle'))
//   });

var comedyClick = document.querySelector(".comedy");
var actionClick = document.querySelector(".action");
var netflixClick = document.querySelector(".netflix");
var disneyClick = document.querySelector(".Disney");

function getLocalStorage(){
  var local = JSON.parse(localStorage.getItem("genrePlatform"));
  if (local===null){
    localStorage.setItem("genrePlatform", JSON.stringify({}));
  }
  return JSON.parse(localStorage.getItem("genrePlatform"));
}

// local storage set functions for all click events
function saveComedyChoice(event) {
  // console.log("clicked comedy");
  var comedy = event.target;
  // console.log(event)

  // gpuss
  // get
  // parse
  // update
  // stringify
  // set
  var local = getLocalStorage();
  local.genre = "comedy";
  localStorage.setItem("genrePlatform", JSON.stringify(local));
}

function saveActionChoice(event) {
  // console.log("clicked action");
  var action = event.target;
  // console.log(event)
 var local = getLocalStorage();
 local.genre = "action";
  localStorage.setItem("genrePlatform", JSON.stringify(local));
}

function saveNetflixChoice(event) {
  // console.log("clicked netflix");
  var netflix = event.target;
  // console.log(event)
  var local = getLocalStorage();
  local.platform = "netflix";
  localStorage.setItem("genrePlatform", JSON.stringify(local));
}

function saveDisneyChoice(event) {
  // console.log("clicked disney");
  var disney = event.target;
  // console.log(event)
  var local = getLocalStorage();
  local.platform = "disney";
  localStorage.setItem("genrePlatform", JSON.stringify(local));
}

function compareChoices(){
  var data = JSON.parse(localStorage.getItem("genrePlatform"));


  if (data.genre==="comedy" && data.platform==="netflix"){
    location.assign("/imdb-netflix-c.html");
  }
  if (data.genre==="comedy" && data.platform==="disney"){
  location.assign("/imdb-disney-c.html"); 
  }
  if (data.genre==="action" && data.platform==="netflix"){
  location.assign("/imdb-netflix-a.html");
  }
if (data.genre==="action" && data.platform==="disney"){
  location.assign("/imdb-disney-a.html");
}  
}


// event listeners
comedyClick.addEventListener("click", saveComedyChoice);
actionClick.addEventListener("click", saveActionChoice);
netflixClick.addEventListener("click", saveNetflixChoice);
disneyClick.addEventListener("click", saveDisneyChoice);
