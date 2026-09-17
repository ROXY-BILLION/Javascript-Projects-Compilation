const TaskInput = document.getElementById("taskInput");
const Form = document.getElementById("taskForm");
const TaskContainer = document.getElementById("taskContainer");


Form.addEventListener("submit", (event) => {
    event.preventDefault();

    let container = document.createElement("div");
    container.classList.add("task-item");


    let paragraph = document.createElement("p");
    paragraph.classList.add("task-text");
    paragraph.textContent = TaskInput.value;


    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");


    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.remove();
    });


    TaskInput.value = "";
    container.appendChild(paragraph);
    container.appendChild(deleteButton);
    TaskContainer.appendChild(container);
});