let customScroll = document.querySelector('.scroll')


window.addEventListener('scroll', function () {
    
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight


    let scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)

    customScroll.style

    console.log(scrollTop)
    console.log(documentHeight)
    console.log(windowHeight)
    console.log(scrollPercentage)
})