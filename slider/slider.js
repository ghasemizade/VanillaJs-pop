const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const container = document.getElementById('container')

let index = 0
let imgArray = [
    '/media/1.jpg',
    '/media/2.jpg',
    '/media/3.jpg',
    '/media/4.jpg',
    '/media/5.jpg',
    '/media/6.jpg',
]


function prevBtnFun() {
    
}

function nextBtnFun() {
    index++
    container.style.backgroundImage = 'url('+ imgArray[index] + ')'
}

// console.log(imgArray[index])

nextBtn.addEventListener('click', nextBtnFun)
prevBtn.addEventListener('click', prevBtnFun)