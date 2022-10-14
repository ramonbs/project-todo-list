const todoListOl = document.querySelector('#lista-tarefas');
const buttonAdd = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonRemoveCompleted = document.querySelector('#remover-finalizados');
const buttonSave = document.querySelector('#salvar-tarefas');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');

const saveList = () => {
  localStorage.setItem('todoList', todoListOl.innerHTML);
  localStorage.setItem('class', todoListOl.className);
};

const loadList = () => {
  todoListOl.innerHTML = localStorage.getItem('todoList');
};

const addTask = () => {
  const taskLi = document.createElement('li');
  taskLi.innerText = taskInput.value;
  taskLi.classList.add('task');
  todoListOl.appendChild(taskLi);
  document.querySelector('#texto-tarefa').value = '';
};

const changeTaskColor = (event) => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  event.target.classList.add('selected');
};

const taskCompletedLineThrough = (event) => {
  event.target.classList.toggle('completed');
};

const clearList = () => {
  todoListOl.innerHTML = '';
};

const removeCompleted = () => {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
};

const moveUp = () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask.previousElementSibling) {
    todoListOl.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
};

const moveDown = () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask.nextElementSibling) {
    todoListOl.insertBefore(selectedTask.nextElementSibling, selectedTask);
  }
};

const removeSelected = () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.remove();
  }
};

// Calls the functions here
buttonAdd.addEventListener('click', addTask);
buttonClear.addEventListener('click', clearList);
buttonAdd.addEventListener('click', addTask);
todoListOl.addEventListener('click', changeTaskColor);
todoListOl.addEventListener('dblclick', taskCompletedLineThrough);
buttonRemoveCompleted.addEventListener('click', removeCompleted);
buttonSave.addEventListener('click', saveList);
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);
buttonRemoveSelected.addEventListener('click', removeSelected);
window.onload = loadList;
