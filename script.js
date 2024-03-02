const input = document.querySelector("#tast-user");
const form = document.querySelector("form");
const tasks = [];
const taskContainer = document.querySelector(".task-container");
console.log(taskContainer);
function addTask(task) {
  tasks.push(task);
  console.log(tasks);
  input.value = "";
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
    span.innerHTML = tasks[i];
    // create delete-btn
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerHTML = "delete";
    //insert single task
    singleTask.appendChild(span);
    singleTask.appendChild(deleteBtn);
    console.log(singleTask);
    //append single task to taskContainer
    taskContainer.appendChild(singleTask);
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = input.value;
  addTask(newTask);
  printTask();
});
