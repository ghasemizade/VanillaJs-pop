let $ = document
let getNav =  $.getElementById('nav-bar')

document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 5) {
        getNav.classList.add('bg-black')
    }else{
        getNav.classList.remove('bg-black')
    }
})