var homeButton = document.querySelector(".btn");
var homePageUrl = "index.html"

// opens homepage in same window
function goHome (){
    open(homePageUrl, "_self")
}

// event listener 
homeButton.addEventListener("click", goHome);
