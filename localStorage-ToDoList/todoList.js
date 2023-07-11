const getInput = document.getElementById('input-task')
const getAddBtn = document.getElementById('add')
const getClearBtn = document.getElementById('clear')
const getCompleteBtn = document.getElementById('complete')
const getDeleteBtn = document.getElementById('delete')
const getTasksContent = document.querySelector('.tasks-content')
const getTask = document.getElementById('task')
const getDesc = document.querySelector('.desc')

let todosArray = []

function addToList() {
    let newTodoObj = {
        id: todosArray.length + 1,
        title: getInput.value,
        complete: false,
    }

    todosArray.push(newTodoObj)
    setLocalStorage(todosArray)
    console.log(todosArray.complete)
    // add new div element to dom
    let newDiv = document.createElement('div')
    newDiv.className = 'task'
    // add new p element to dom 
    let newP = document.createElement('p')
    newP.className = 'desc'
    newP.innerHTML = getInput.value
    // add new div task elem to dom
    let newDivTaskBtns = document.createElement('div')
    newDivTaskBtns.className = 'task-btns'
    // add two buttons to task container
    let completeBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    completeBtn.id = 'complete'
    completeBtn.innerHTML = 'Complete'
    completeBtn.style.marginRight = '5px'
    deleteBtn.id = 'delete'
    deleteBtn.innerHTML = 'Delete'

    getTasksContent.append(newDiv)
    newDiv.append(newP)
    newDiv.append(newDivTaskBtns)
    newDivTaskBtns.append(completeBtn)
    newDivTaskBtns.append(deleteBtn)
    getInput.value = ''
}
function clearTodoList() {
    getTasksContent.remove()
}
function completeTask() {
    getTask.style.backgroundColor = 'rgb(68, 179, 58)'
    getTask.style.border = 'none'
    getDesc.remove()
    getDeleteBtn.remove()
    getCompleteBtn.style.fontSize = '18px'
}
function deleteTask() {
    getTask.style.backgroundColor = 'tomato'
    getTask.style.border = 'none'
    getDesc.remove()
    getDeleteBtn.style.fontSize = '18px'
    getCompleteBtn.remove()
}
function setLocalStorage(todoList) {
    localStorage.setItem('todos', JSON.stringify(todoList))
}

getAddBtn.addEventListener('click', addToList)
getClearBtn.addEventListener('click', clearTodoList)
getCompleteBtn.addEventListener('click', completeTask)
getDeleteBtn.addEventListener('click', deleteTask)


getInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addToList()
    }
})