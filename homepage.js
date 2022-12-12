$('.dropdown-toggle').dropdown();

$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
    console.log($('.dropdown-toggle'))
  });


  var comedyClick = document.querySelector(".comedy");
  var actionClick = document.querySelector(".action");
  var netflixClick =  document.querySelector(".netflix");
  var disneyClick = document.querySelector(".Disney");


  function saveComedyChoice(event){
    // console.log("clicked comedy");
    var comedy = event.target;
    // console.log(event)
    var key = comedy;
    var value = true;
    localStorage.setItem(key, value);

  }

  function saveActionChoice(event){
    // console.log("clicked action");
    var action = event.target;
    // console.log(event)
    var key = action;
    var value = true;
    localStorage.setItem(key, value);
  }

  function saveNetflixChoice(event){
    // console.log("clicked netflix");
    var netflix = event.target;
    // console.log(event)
    var key = netflix;
    var value = true;
    localStorage.setItem(key, value);
  }

  function saveDisneyChoice(event){
    // console.log("clicked disney");
    var disney = event.target;
    // console.log(event)
    var key = disney;
    var value = true;
    localStorage.setItem(key, value);
  }




  comedyClick.addEventListener("click", saveComedyChoice);
  actionClick.addEventListener("click", saveActionChoice);
  netflixClick.addEventListener("click", saveNetflixChoice);
  disneyClick.addEventListener("click", saveDisneyChoice);

 
