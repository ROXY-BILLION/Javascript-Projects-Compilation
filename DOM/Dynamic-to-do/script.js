const taskForm = document.getElementById("task-form");

const taskInput = document.getElementById("task-input");

const taskList = document.getElementById("task-list");

const taskCount = document.getElementById("task-count");

const emptyState = document.getElementById("empty-state");

const clearCompletedBtn = document.getElementById("clear-completed");

// This is where we store the tasks

let tasks = [];


// Load the tasks from localStorage

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}


// Render all tasks

function renderTasks() {

    taskList.innerHTML = "";

    taskCount.textContent = `${tasks.length} task(s)`;

    if (tasks.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }



    tasks.forEach(function (task) {

        // Creating the task container

        const taskItem = document.createElement("div");

        taskItem.classList.add("task-item");


        // Give the task an ID

        taskItem.dataset.id = task.id;


        // Check if the task has been completed

        if (task.completed) {
            taskItem.classList.add("completed");
        }


        // Creating the task text

        const text = document.createElement("span");

        text.classList.add("task-text");

        text.textContent = task.text;


        // Creating the complete button

        const completeBtn = document.createElement("button");

        completeBtn.classList.add("complete-btn");

        completeBtn.textContent = "Completed";


        completeBtn.addEventListener("click", function () {

            const selectedTask = tasks.find(function (item) {

                return item.id === task.id;

            });


            selectedTask.completed = !selectedTask.completed;


            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );


            renderTasks();

        });


        // Creating the delete button

        const deleteBtn = document.createElement("button");

        deleteBtn.classList.add("delete-btn");

        deleteBtn.textContent = "Delete";


        deleteBtn.addEventListener("click", function () {

            // Locate the task you want to delete using ID

            const taskIndex = tasks.findIndex(function (item) {

                return item.id === task.id;

            });


            // Delete the task

            tasks.splice(taskIndex, 1);


            // Save it to localStorage

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );


            renderTasks();

        });


        // Put everything inside the task container

        taskItem.append(
            text,
            completeBtn,
            deleteBtn
        );


        // Put the task container into the page

        taskList.append(taskItem);

    });

}


// Add a new task

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Reduce unnecessary spaces from the user's input

    const taskText = taskInput.value.trim();


    // Don't submit empty tasks

    if (taskText === "") {
        return;
    }


    // Turn the user input into an object

    const newTask = {

        id: Date.now(),

        text: taskText,

        completed: false

    };


    // Add it to the array

    tasks.push(newTask);


    // Save it to localStorage

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );


    // Re-render the UI

    renderTasks();


    // Clear the input

    taskInput.value = "";

});
clearCompletedBtn.addEventListener("click", function () {

    tasks = tasks.filter(function (task) {

        return !task.completed;

    });


    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );


    renderTasks();

});

// Render tasks when the page loads

renderTasks();