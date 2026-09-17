const NavMenu = document.querySelector(".navbar");

const MenuBtn = document.getElementById("menuBtn");

const icon = MenuBtn.querySelector("i");

const movieCards = document.querySelectorAll(".movie-card");

const AddButton = document.querySelectorAll(".add-btn");

const genres = document.querySelectorAll(".genre");

const searchInput = document.getElementById("input");

searchInput.addEventListener("input", () => {

    const searchResult = searchInput.value;

    movieCards.forEach(card => {

        const title = card.querySelector("h3");
        const titleText = title.textContent;

        if (titleText.toLowerCase().includes(searchResult.toLowerCase())) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

movieCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("selected");

    });

});

AddButton.forEach(button => {

    button.addEventListener("click", () => {

        const Icon = button.querySelector("i");

        Icon.classList.toggle("fa-plus");
        Icon.classList.toggle("fa-check");
    })

});

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

genres.forEach(genre => {

    genre.addEventListener("click", () => {

        genres.forEach(item => {
            item.classList.remove("active");
        });

        genre.classList.add("active");

    });

});