const Username = document.getElementById("username");
const UsernameError = document.getElementById("usernameError");
const Email = document.getElementById("email");
const EmailError = document.getElementById("emailError");
const Password = document.getElementById("password");
const PasswordError = document.getElementById("passwordError");
const ConfirmPassword = document.getElementById("confirmPassword");
const ConfirmPasswordError = document.getElementById("confirmPasswordError");
const SuccessMessage = document.getElementById("successMessage");
const Form = document.getElementById("myForm");

Form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (Username.value === "") {
        UsernameError.textContent = "Username Required"
    }
    if (Email.value === "") {
        EmailError.textContent = "Email Required"
    }
    if (Password.value === "1234") {
        PasswordError.textContent = "Valid Password"
    } else {
        PasswordError.textContent = "Invalid Password"
    }
    if (ConfirmPassword.value === "") {
        ConfirmPasswordError.textContent = "Password incorrect"
    } else {
        SuccessMessage.textContent = "Successfull"
    }
})