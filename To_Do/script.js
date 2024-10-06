
let input = document.getElementById("addTask")
input.onclick = function() {
    let taskText = document.getElementById("taskInput").value.trim();
    
    if (taskText) {
        let taskList = document.getElementById("taskList");
        let listItem = document.createElement("li");

        listItem.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">Delete</button>`;
        taskList.appendChild(listItem);

        document.getElementById("taskInput").value = ""; // Clear input field
    }
};