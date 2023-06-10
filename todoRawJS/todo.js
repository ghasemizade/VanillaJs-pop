let getElemInput = document.getElementById('input-sec')
let getElemItem = document.querySelector('.tasks')

console.log(getElemItem.childNodes)

getElemInput.addEventListener('keydown', function (event) {
    
    
    if (event.key === 'Enter') {
        inputVal = getElemInput.value
        newLi = document.createElement('li')
        

        getElemItem.appendChild(newLi)
        getElemItem.lastChild.textContent = inputVal
    }
    
})