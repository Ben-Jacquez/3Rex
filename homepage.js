// $('.dropdown-toggle').dropdown();

// $(document).ready(function(){
//     $(".dropdown-toggle").dropdown();
//     console.log($('.dropdown-toggle'))
//   });


  var comedyClick = document.querySelector(".comedy");
  var actionClick = document.querySelector(".action");
  var netflixClick =  document.querySelector(".netflix");
  var disneyClick = document.querySelector(".Disney");

// local storage set functions for all click events
  function saveComedyChoice(event){
    // console.log("clicked comedy");
    var comedy = event.target;
    // console.log(event)
    var comedyKey = comedy;
    var comedyValue = true;
    localStorage.setItem("comedy", comedyValue);

  }

  function saveActionChoice(event){
    // console.log("clicked action");
    var action = event.target;
    // console.log(event)
    var actionKey = action;
    var actionValue = true;
    localStorage.setItem("action", actionValue);
  }

  function saveNetflixChoice(event){
    // console.log("clicked netflix");
    var netflix = event.target;
    // console.log(event)
    var netflixKey = netflix;
    var netflixValue = true;
    localStorage.setItem("netflix", netflixValue);
  }

  function saveDisneyChoice(event){
    // console.log("clicked disney");
    var disney = event.target;
    // console.log(event)
    var disneyKey = disney;
    var disneyValue = true;
    localStorage.setItem("disney", disneyValue);
  }

// need to local storage get and run if statement function

// event listeners
  comedyClick.addEventListener("click", saveComedyChoice);
  actionClick.addEventListener("click", saveActionChoice);
  netflixClick.addEventListener("click", saveNetflixChoice);
  disneyClick.addEventListener("click", saveDisneyChoice);

 
