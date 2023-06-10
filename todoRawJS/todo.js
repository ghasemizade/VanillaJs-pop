let getElemInput = document.getElementById('input-sec')
let getElemItem = document.querySelector('.tasks')
let getElemTask = document.querySelectorAll('.item')
let getImgTag = document.getElementById('img')

// console.log(getElemItem.lastElementChild)

getElemInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        inputVal = getElemInput.value
        newLi = document.createElement('li')
            //add img & set img src
        newImg = document.createElement('img')
        newImg.setAttribute('src', './image/recycle-bin.png')
        newImg.setAttribute('id', 'img')
            // add li tag to ul
        getElemItem.appendChild(newLi)
            // add text value to last li
        getElemItem.lastChild.textContent = inputVal
            //add img tag to last child ul element 
        getElemItem.lastElementChild.appendChild(newImg)

    }
})


getImgTag.addEventListener('click', function (event) {
    console.log(event.key)
})

