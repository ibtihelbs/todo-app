const input = document.querySelector("#tast-user");
const form = document.querySelector("form");
const checkbox = document.querySelector("#checkbox");
const tasks = [];
const taskContainer = document.querySelector(".task-container");
console.log(taskContainer);
function addTask(task) {
  tasks.push(task);
  console.log(tasks);
  input.value = "";
  checkbox.checked = false;
}
function printTask() {
  for (let i = tasks.length - 1; i < tasks.length; i++) {
    //create div
    const singleTask = document.createElement("div");
    //class single-task
    singleTask.setAttribute("class", "single-task");
    //create span
    const span = document.createElement("span");
    //add input value to span
    span.innerHTML = tasks[i].newTask;
    // add bg-color if urgent
    if (tasks[i].urgent) {
      span.style.backgroundColor = "red";
      span.style.color = "white";
    }
    // create delete-btn
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerHTML = "delete";
    //insert single task
    singleTask.appendChild(span);
    singleTask.appendChild(deleteBtn);
    //append single task to taskContainer
    taskContainer.appendChild(singleTask);
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = input.value;
  const urgent = checkbox.checked;
  console.log(urgent);
  addTask({ newTask, urgent });
  printTask();
});
