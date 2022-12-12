//declare
let navbarHeight = 0;
let postionPara = 0;
let posionUser = 0;

//get element
const navbarEl = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom--container");
const topEl = document.querySelector(".top--container");

//handle
navbarHeight = navbarEl.offsetHeight;
postionPara = bottomEl.offsetTop; //lay vi tri cua top

//listener user scroll
window.addEventListener("scroll", () => {
    posionUser = window.scrollY;
    console.log(posionUser);
    if (posionUser > postionPara - navbarHeight - 50){ //magrin top: 50px
        //change background navbar
        navbarEl.classList.add("active");
    }
    else {
        navbarEl.classList.remove("active");
    }
} )

//show in console
console.log(bottomEl.offsetTop);


