function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
      alert("Please enter a task");
      return;
    }
    
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = toggleTask;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function(event) {
      event.stopPropagation();
      taskList.removeChild(li);
    };
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = "";
  }
  
  function toggleTask() {
    this.classList.toggle("completed");
  }
  