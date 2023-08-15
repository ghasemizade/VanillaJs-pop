let $ = document;
let getElemInput = $.querySelector('input')
let getElemUl = $.querySelector('.tasks')
let getElemLi = $.querySelectorAll('.item')
let getIconClass = $.querySelector('.delete')
let getBtn = $.querySelector('.btn-add')
let getCounter = $.getElementById('counter')
let getLoader = $.querySelector('.loader')

function addNewTask(inputVal) {
// add li element
    let newLi = document.createElement('li')
    newLi.className = 'item'
// add span text to li 
    let newTaskText = $.createElement('span')
    newTaskText.innerHTML = inputVal
// add trash icon to li
    let newicon = $.createElement('i')
    newicon.className = 'fa fa-trash-o delete'

    newicon.addEventListener('click', function (event) {
        event.target.parentElement.remove()
        getCounter.innerHTML++
    })
    
    newLi.append(newTaskText, newicon)
    getElemUl.append(newLi)
}
// event for input
getElemInput.addEventListener('keydown', function (event) {
    let inputVal = getElemInput.value.trim()
    if (event.key === 'Enter') {
        if (inputVal) {
            addNewTask(inputVal)
        }
// delete input value 
        getElemInput.value = ''
    }
})
// event for button
getBtn.addEventListener('click', function () {
    let inputVal = getElemInput.value.trim()
    if (inputVal) {
        addNewTask(inputVal)
    }
    getElemInput.value = ''
})

window.addEventListener('load', function () {

    getLoader.className += 'hidden'
})