let getStart = document.getElementById('start')
let getBtn = document.getElementById('modalShow')
let getModal = document.getElementById('modal')
let getIcon = document.getElementById('icon')

getBtn.addEventListener('click', function () {
    getStart.style.display = 'none'
    getModal.style.display = 'flex'
    document.body.style.backdropFilter = 'blur(10px)'
})

getIcon.addEventListener('click', function () {
    getStart.style.display = 'block'
    getModal.style.display = 'none'
    document.body.style.backdropFilter = 'blur(0)'
})