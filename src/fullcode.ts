export{}

/*** This student is for students to copy code if fail to keep up with the tutorial. ***/

import {v4 as uuidV4} from "uuid";

type Task ={
  id: string, 
  title: string, 
  completed: boolean,
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list") //take object with id=list from html 
// withing <> is a type specification given the list the elements of a HTMLUlistElement
// types make it easier to work with the HTML elements 
const form = document.querySelector<HTMLFormElement>("#new-task-form") //take object with id=new-task-form from html 
// const form2 = document.getElementById("new-task-form") as HTMLFormElement | null; 
// works the same as above with other function 

const input = document.querySelector<HTMLInputElement>("#new-task-title") //take object with id=new-task-title from html 
const tasks: Task[] = loadTasks() // variable to contain our tasks array of types 
tasks.forEach(addListItem)


form?.addEventListener("submit", e => {
  e.preventDefault() // prevent form from being submitted in a default way

  if (input?.value =="" || input?.value == null) return 
  // If the value is either an empty string or null, the function returns and does nothing.
  //input?.value --> ? is optional chaining
  // The ?. operator checks if the input variable is null or undefined before accessing its value property.
  
  const newTask: Task = {
    id: uuidV4(), //should return a unique ID  
    title: input.value,
    completed: false, //new task entries should not be checked as completed as default 
    createdAt: new Date()
  }
  tasks.push(newTask)
  saveTasks() // saving after adding a new task 
  
  addListItem(newTask)  
  input.value = "" // clear out the input box after input
})

function addListItem(task: Task){
  const item = document.createElement("li") //HTML li element
  // create Element creates an HTML element with the tag specified within () 
  const label = document.createElement("label") 
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", () => { 
    /*When the user interacts with the checkbox (i.e., checks or unchecks it), 
    the event listener will execute the function provided.*/
    task.completed = checkbox.checked
    /*this updates the task completed property based on whether the checkbox 
    is checked or not after the interaction of the user */
    saveTasks() // saving after checking a checkbox 
  })
  checkbox.type = "checkbox" // type of const checkbox is checkbox to creat an checkbox element 
  checkbox.checked = task.completed 
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[]{ //specification of return - array of tasks! 
  const taskJSON = localStorage.getItem("TASKS") // returns string OR NULL 
  if (taskJSON == null) return []
  return JSON.parse(taskJSON) // parsing only works on strings so the code above is necesairy 
}

