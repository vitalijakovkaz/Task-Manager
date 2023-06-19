const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const task = taskInput.value;
    if (task !== "") {
        addTask(task);
        taskInput.value = "";
    }
});

function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}
