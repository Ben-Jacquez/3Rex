var homeButton = document.querySelector(".btn");
var homePageUrl = "/Users/saraangelo/Desktop/ucla-bootcamp/projects/3Rex/index.html"

// opens homepage in same window
function goHome (){
    open(homePageUrl, "_self")
}

// event listener 
homeButton.addEventListener("click", goHome);
