const $ = document

const surface = $.querySelector('.surface')
const car = $.querySelector('.car')
const carImg = $.querySelector('.car img')
const onBtn = $.querySelector('.on')
const offBtn = $.querySelector('.off') 

let flag = true

const carImgs = ['images/Img_05.png', 'images/Img_06.png']

window.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        surface.classList.toggle('moveRight')
        car.classList.toggle('suspension')
    }
})

window.addEventListener('keypress', (e) => {
    console.log(e);
    if(e.key === " ") {
        if (flag) {
            flag = false
            carImg.setAttribute('src', carImgs[0])
        } else {
            flag = true
            carImg.setAttribute('src', carImgs[1])
        }
    }
})

onBtn.addEventListener('click', () =>{
    flag = true
    carImg.setAttribute('src', carImgs[1])
})

offBtn.addEventListener('click', () =>{
    flag = false
    carImg.setAttribute('src', carImgs[0])
})