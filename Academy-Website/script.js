const MenuBtn = document.getElementById("btn");
const NavMenu = document.querySelector(".nav-menu");
const icon = document.getElementById("menu-icon");

MenuBtn.addEventListener("click", () => {

    NavMenu.classList.toggle("show");

    if (NavMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});