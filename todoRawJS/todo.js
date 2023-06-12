let $ = document;
let getElemInput = $.querySelector('input')
let getElemUl = $.querySelector('.tasks')

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

    newLi.append(newTaskText, newicon)
    getElemUl.append(newLi)
    console.log(newLi)
}

getElemInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let inputVal = getElemInput.value.trim()
        addNewTask(inputVal)
    }
})


// getImgTag.addEventListener('click', function () {
//     console.log('test')
// })
