// 1. SELECT HTML ELEMENTS
const loadButton = document.getElementById("loadUsers");
const statusbar = document.getElementById("status");
const usersContainer = document.getElementById("usersContainer");


// 2. LISTEN FOR BUTTON CLICK
loadButton.addEventListener("click", loadUsers);


// 4. ASYNC FUNCTION
async function loadUsers() {

    // 13. UPDATE STATUS
    statusbar.textContent = "Loading users...";

    try {

        // 3. MAKE API REQUEST
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // 6. CHECK WHETHER REQUEST SUCCEEDED
        if (!response.ok) {
            throw new Error("Request failed");
        }


        // 7. CONVERT RESPONSE TO JAVASCRIPT DATA
        const users = await response.json();


        // Clear previous users
        usersContainer.innerHTML = "";


        // 8. LOOP THROUGH USERS
        users.forEach(function(user) {

            // 9. CREATE USER ELEMENTS
            const card = document.createElement("div");
            const name = document.createElement("h2");
            const email = document.createElement("p");
            const username = document.createElement("p");


            // 10. INSERT USER INFORMATION
            name.textContent = user.name;
            email.textContent = user.email;
            username.textContent = `@${user.username}`;


            // 11. ADD CSS CLASS
            card.classList.add("user-card");


            // 12. PUT ELEMENTS INSIDE CARD
            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(username);


            // 12. PUT CARD ON PAGE
            usersContainer.appendChild(card);

        });


        // 13. UPDATE STATUS
        statusbar.textContent = "Users loaded";

    } catch (error) {

        // 5. HANDLE ERRORS
        statusbar.textContent = "Failed to load users";

        console.error(error);
    }
}