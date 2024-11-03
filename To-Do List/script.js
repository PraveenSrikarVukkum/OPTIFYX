// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText) {
    const task = { text: taskText, completed: false };
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = '';
  }
}

function addTaskToDOM(task) {
  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  if (task.completed) taskItem.classList.add('completed');
  
  taskItem.textContent = task.text;

  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
    task.completed = !task.completed;
    updateTasks();
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove');
  removeButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
    removeTask(task);
  });

  taskItem.appendChild(removeButton);
  taskList.appendChild(taskItem);
}

function saveTask(task) {
  const tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(task) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(t => t.text !== task.text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach(task => addTaskToDOM(task));
}

function updateTasks() {
  const tasks = [];
  document.querySelectorAll('#task-list li').forEach(taskItem => {
    tasks.push({ text: taskItem.childNodes[0].textContent, completed: taskItem.classList.contains('completed') });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}
