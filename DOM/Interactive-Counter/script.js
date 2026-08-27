const CountDisplay = document.getElementById("count");
const IncreaseBtn = document.getElementById("increase-btn");
const DecreaseBtn = document.getElementById("decrease-btn");
const ResetBtn = document.getElementById("reset-btn");

let count = 0;

IncreaseBtn.addEventListener("click", function () {
    count++;
    CountDisplay.textContent = count;
    updateDisplay();
})
DecreaseBtn.addEventListener("click", function () {
    count--;
    CountDisplay.textContent = count;
    updateDisplay();
})
ResetBtn.addEventListener("click", function () {
    count = 0;
    CountDisplay.textContent = count;
    updateDisplay();
})

function updateDisplay() {
    // Remove previous State
    CountDisplay.classList.remove("positive");
    CountDisplay.classList.remove("negative");
    CountDisplay.classList.remove("zero");

    // Add the correct state
    if (count > 0) {
        CountDisplay.classList.add("positive")
    } else if (count < 0) {
        CountDisplay.classList.add("negative")
    } else {
        CountDisplay.classList.add("zero")
    }
}

