const MenuBtn = document.getElementById("btn");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector("i");

MenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    
    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
})