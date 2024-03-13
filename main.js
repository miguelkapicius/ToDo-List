const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTask.addEventListener("click", createTask);

function createTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = taskText;

    const deleteBtn = document.createElement("button");
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    deleteBtn.textContent = "";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(p);
    li.appendChild(taskDiv);
    taskList.appendChild(li);

    taskInput.value = "";
  } else {
    alert("Digite uma tarefa válida!");
  }
}
