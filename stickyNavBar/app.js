let $ = document
let getNav =  $.getElementById('nav-bar')
let getLogo = $.querySelector('.logo')

document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 5) {
        getNav.classList.add('bg-black')
        getNav.classList.add('white-txt')
        getLogo.style.fontSize = '1.7rem'
        
    }else{
        getNav.classList.remove('bg-black')
        getNav.classList.remove('white-txt')
        getLogo.style.fontSize = '2.5rem'
    }
})