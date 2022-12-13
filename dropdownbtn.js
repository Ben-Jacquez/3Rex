var dropdownGenre = document.querySelector('.dropdown-toggle-g');
var dropdownComedy = document.querySelector('.comedy');
var dropdownAction = document.querySelector('.action');
var dropdownPlatform = document.querySelector('.dropdown-toggle-p');
var dropdownNetflix = document.querySelector('.netflix');
var dropdownDisney = document.querySelector('.disney');


function changeGenreText(e){
    dropdownGenre.textContent = e.target.textContent;
    var newGenre = e.target.textContent;
    newGenre.setAttribute("style", "color: ")
}

function changePlatformText(e){
    dropdownPlatform.textContent = e.target.textContent;
}

dropdownAction.addEventListener('click', changeGenreText)
dropdownComedy.addEventListener('click', changeGenreText)

dropdownNetflix.addEventListener('click', changePlatformText)
dropdownDisney.addEventListener('click', changePlatformText)

