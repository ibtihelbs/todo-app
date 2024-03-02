const input = document.querySelector("#tast-user");
const form = document.querySelector("form");
const checkbox = document.querySelector("#checkbox");
const tasks = [];
const taskContainer = document.querySelector(".task-container");
function addTask(task) {
  tasks.push(task);
  input.value = "";
  checkbox.checked = false;
}
function deleteBtnFn(i) {
  tasks.splice(i, 1);
  printTask();
}
function printTask() {
  console.log(tasks);
  taskContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
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
    deleteBtn.setAttribute("onclick", "deleteBtnFn(" + i + ")");
    deleteBtn.innerHTML = "delete";
    //insert single task
    singleTask.appendChild(span);
    singleTask.appendChild(deleteBtn);
    //append single task to taskContainer
    taskContainer.appendChild(singleTask);
  }
}
/**function deleteFn() {
  const deleteBtnS = document.querySelectorAll(".delete-btn");
  deleteBtnS.forEach(function (v, i) {
    v.addEventListener("click", function (e) {
      e.preventDefault();
      tasks.splice(i, 1);
      printTask();
    });
  });
}*/
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = input.value;
  const urgent = checkbox.checked;
  addTask({ newTask, urgent });
  printTask();
  // deleteFn();
});

function hello() {
  console.log("hello !!!!");
}
