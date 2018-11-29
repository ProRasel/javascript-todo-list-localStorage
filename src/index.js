var inp = document.querySelector(".taskname");
var list = document.querySelector(".tasklist");
var addTask = document.querySelector(".btnTask");
var taskClear = document.querySelector(".btnClear");
var taskList = [];

function render(elemments) {
  list.innerHTML = "";
  elemments.forEach(e => {
    let newEl = document.createElement("li");
    newEl.innerHTML = e;
    newEl.classList.add("list-group-item");
    list.appendChild(newEl);
  });
}
addTask.addEventListener("click", e => {
  if (inp.value !== "") {
    taskList.push(inp.value);
    inp.value = "";
    render(taskList);
    taskClear.style.display = "block";
    localStorage.setItem("mylist", JSON.stringify(taskList));
  } else {
    alert("Please input your task");
  }
});
let saved = localStorage.getItem('mylist');
if (saved) {
  taskList = JSON.parse(localStorage.getItem("mylist"));
  render(taskList);
}else{
  taskClear.style.display = "none";
}
taskClear.addEventListener("click", function() {
  localStorage.clear();
  list.innerHTML = "";
  taskList = [];
  taskClear.style.display = "none";
});
