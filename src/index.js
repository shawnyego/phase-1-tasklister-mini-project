document.addEventListener("DOMContentLoaded", () => {
    let form= document.querySelector('#create-task-form')
  form.addEventListener('submit', (action)=> {
    action.preventDefault()
    displayTodo(form.querySelector("#new-task-description").value)
    form.reset()
  })

});

function displayTodo(todo){
  let list= document.createElement('li')
  list.textContent= `${todo} `
  let btn= document.createElement('button')
  btn.textContent= 'x'
  btn.addEventListener('click', deleteTask)
  list.appendChild(btn)
  let tasks= document.querySelector('#tasks')
  tasks.appendChild(list)
}

function deleteTask(action){
  action.target.parentNode.remove()
}
  // your code here
;
