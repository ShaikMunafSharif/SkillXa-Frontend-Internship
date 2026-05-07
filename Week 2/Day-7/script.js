let tasks = [];

function addTask() {
    let task = document.getElementById("task").value;

    tasks.push(task);

    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `
            <li>
                ${tasks[i]} 
                <button onclick="deleteTask(${i})">Delete</button>
            </li>
        `;
    }
}
function deleteTask(index) {
    tasks.splice(index, 1);  // remove 1 item
    displayTasks();          // refresh list
}
