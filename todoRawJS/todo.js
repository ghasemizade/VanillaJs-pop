let getElemInput = document.getElementById('input-sec')
let getElemItem = document.querySelector('.tasks')
let getElemTask = document.querySelector('.item')


// console.log(getElemItem.lastElementChild)

getElemInput.addEventListener('keydown', function (event) {
    
    
    if (event.key === 'Enter') {
        inputVal = getElemInput.value
        newLi = document.createElement('li')
            //add img & set img src
        newImg = document.createElement('img')
        newImg.setAttribute('src', './image/recycle-bin.png')
        getElemItem.appendChild(newLi)
        getElemItem.lastChild.textContent = inputVal
            //add img tag to last child ul element 
        getElemItem.lastElementChild.appendChild(newImg)

    }

    
})