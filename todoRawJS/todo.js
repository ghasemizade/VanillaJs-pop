let $ = document;
let getElemInput = $.querySelector('input')
let getElemUl = $.querySelector('.tasks')
let getElemLi = $.querySelectorAll('.item')
let getIconClass = $.querySelector('.delete')
let getBtn = $.querySelector('.btn-add')

// console.log(getBtn)

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
    })

    newLi.append(newTaskText, newicon)
    getElemUl.append(newLi)
    // console.log(newLi)

}



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

getBtn.addEventListener('click', function () {
    let inputVal = getElemInput.value.trim()
    if (inputVal) {
        addNewTask(inputVal)
    }
    getElemInput.value = ''
})