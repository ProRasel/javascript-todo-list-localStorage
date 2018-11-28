var inp = document.querySelector('.taskname');
var list = document.querySelector('.tasklist');
var addTask = document.querySelector('.btnTask')
var taskClear = document.querySelector('.btnClear')
var taskList = [];

function render(elemments) {
  list.innerHTML = "";
  elemments.forEach(e => {
    let newEl = document.createElement('li');
    newEl.innerHTML = e;
    list.appendChild(newEl);
    newEl.classList.add("list-group-item");
  });
}
addTask.addEventListener('click', e => {
  if (inp.value !== "") {
    taskList.push(inp.value);
    inp.value = "";
    taskClear.style.display = "block";
    render(taskList)
    localStorage.setItem('mylist', list.innerHTML)
  }else{
    alert('Please input your task')
  }
});
var saved = localStorage.getItem('mylist');
if (saved) {
  list.innerHTML = saved;
}else{
  taskClear.style.display = "none";
}
taskClear.addEventListener('click', function () {
  localStorage.clear();
  list.innerHTML ="";
  taskList = [];
  taskClear.style.display = "none";
});