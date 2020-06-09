// let val;
// val = document;

// console.log(val.all[0]);

// val = document.domain;
// val = document.body;
// val= document.doctype;
// val= document.URL;
// val=document.all.length;
// val=document.characterSet;
// val= document.contentType;
// val=document.forms;
// val= document.forms[0].id;
// val= document.forms[0].method;
// val= document.forms[0].action;
// val= document.links;
// val=document.images;
// val= document.scripts[0];
// val= document.scripts[0].getAttribute('src');
// console.log(val); 

//The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs. Note: The indexOf() method is case sensitive.




const form = document.querySelector("#task-form");
const taskName = document.querySelector("#task");
const addTask = document.querySelector("#addTaskBtn");
const filter = document.querySelector('#filter');
const collection = document.querySelector(".collection");
const clearTask = document.querySelector(".clear-tasks");

//load all event listeners..


loadEventListeners();


function loadEventListeners() {

  document.addEventListener('DOMContentLoaded', getTasks);


  form.addEventListener('submit', addTaskfunc);


  clearTask.addEventListener('click', function () {
    removeAllTasks();
  });

  collection.addEventListener('click', function (e) {
    removeSingle(e);
  });

  filter.addEventListener('keyup', function (e) {

    filterTask(e);

  });


}


function getTasks() {

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {

    //LS can only store strings so we need to parse it to JSON 
    tasks = JSON.parse(localStorage.getItem('tasks'));

  }

  tasks.forEach(function (task) {
    const listItem = document.createElement('li');

    listItem.className = 'collection-list';

    listItem.appendChild(document.createTextNode(task));


    const completedLink = document.createElement('a');
    completedLink.className = "delete-item secondary-content"

    completedLink.innerHTML = ' <i class="fa fa-remove"></i> '
    listItem.appendChild(completedLink);


    collection.appendChild(listItem);
  })

}


function addTaskfunc(e) {


  //check if task input is empty or not..

  if (taskName.value === '') {
    alert('Add a task');
  } else {
    const listItem = document.createElement('li');

    listItem.className = 'collection-list';

    listItem.appendChild(document.createTextNode(taskName.value));


    const completedLink = document.createElement('a');
    completedLink.className = "delete-item secondary-content"

    completedLink.innerHTML = '<i class="fa fa-remove"></i>'
    listItem.appendChild(completedLink);


    collection.appendChild(listItem);


    storeDatatoLocal(taskName.value);

    taskName.value = '';
    e.preventDefault();
  }





}


//store in LS
function storeDatatoLocal(task) {
  let tasks;
  tasks = localStorage.getItem('tasks') === null ? [] : JSON.parse(localStorage.getItem('tasks'));
  // if (localStorage.getItem('tasks') === null) {
  //   tasks = [];
  // } else {

  //   //LS can only store strings so we need to parse it to JSON 


  //   tasks = JSON.parse(localStorage.getItem('tasks'));

  // }
  let taskItem = {};
    taskItem.id = tasks.length+1;
    taskItem.name = task;
  tasks.push(taskItem);
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

function removeAllTasks(e) {

  collection.innerHTML = "";
  clearAllLocal();

}

function clearAllLocal() {
  localStorage.clear();
}

function removeSingle(e) {

  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      deletedElem = e.target.parentElement.parentElement;
      e.target.parentElement.parentElement.remove();

      deleteFromLocal(e.target.parentElement.parentElement);

    }



  }

}

function deleteFromLocal(taskItem) {



  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }




  tasks.forEach(function (task, index) {



    if (taskItem.innerText === task) {

      tasks.splice(index, 1);
    }




  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}




function filterTask(e) { 

  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-list').forEach(function (iterator) {
    const item = iterator.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      // The indexOf() method returns the position of the first occurrence of a specified value in a string.This method returns - 1 if the value to search for never occurs.Note: The indexOf() method is case sensitive.
      iterator.style.display = "block";
    } else {
      iterator.style.display = "none";
    }
  });



}