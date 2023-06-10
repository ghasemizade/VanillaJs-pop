let getElemInput = document.getElementById('input-sec')
let getElemItem = document.querySelector('ul')
let getElemTask = document.querySelectorAll('.item')
let getImgTag = document.getElementById('img')

// console.log(getElemItem.lastElementChild)

getElemInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let inputVal = getElemInput.value
        let newLi = document.createElement('li')
            //add img & set img src
        newImg = document.createElement('img')
        newImg.setAttribute('src', './image/recycle-bin.png')
        newImg.setAttribute('id', 'img')
            // add li tag to ul
        getElemItem.appendChild(newLi)
        getElemItem.lastChild.setAttribute('class', 'item')
            // add text value to last li
        getElemItem.lastChild.textContent = inputVal
            //add img tag to last child ul element 
        getElemItem.lastElementChild.appendChild(newImg)
        console.log(getElemItem.children.for)
    }
})


getImgTag.addEventListener('click', function () {
    console.log('test')
})