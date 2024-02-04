const inputBox = document.getElementById("taskInput");
const listOfStuff = document.getElementById("taskList");
const counter = document.getElementById("taskcount");

let count = 0;

count = parseInt(localStorage.getItem("count")) || 0;
counter.innerHTML = "Completed Tasks: " + count;

function countReset(){
    count = 0;
    counter.innerHTML = "Completed Tasks: " + count;
     localStorage.removeItem("count");
}

function addTask(){
    if (inputBox.value === ''){
        alert("Please input a task");
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        listOfStuff.appendChild(task);
        let span = document.createElement("span");
        span.innerHTML = "  \u00d7";
        task.appendChild(span);
    }
    keepTasks();
    inputBox.value='';
}

listOfStuff.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        if (e.target.classList.contains("checked")){
            keepTasks(); count++;
        }
        else{
            keepTasks(); count--;
        }
        counter.innerHTML = "Completed Tasks: " + count;
        localStorage.setItem("count", count);
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        keepTasks();
    }
}, false);

function keepTasks(){
    localStorage.setItem("tasks", listOfStuff.innerHTML);
}
function showTasks(){
    listOfStuff.innerHTML = localStorage.getItem("tasks");
}

showTasks();


