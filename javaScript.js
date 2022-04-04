let toogle = document.querySelector(".button-toogle");
let closeButt = document.querySelector(".close-button");
let sideBar = document.querySelector(".sideBar");

toogle.addEventListener("click", function () {
    //console.log(sideBar);
     sideBar.classList.toggle("show-sideBar");
    //or 
    // if (sideBar.classList.contains("show-sideBar")) {
    //     sideBar.classList.remove("show-sideBar");
    // }
    // else 
    // {
    //     sideBar.classList.add("show-sideBar")

    // }

});
closeButt.addEventListener("click", function () {
    sideBar.classList.remove("show-sideBar");

});