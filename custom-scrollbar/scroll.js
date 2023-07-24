let customScroll = document.querySelector('#scroll')


window.addEventListener('scroll', function () {
    
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight


    let scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight) - 0.029) * 100)

    customScroll.style.width = scrollPercentage + '%'

    console.log(scrollTop)
    console.log(documentHeight)
    console.log(windowHeight)
    console.log(scrollPercentage)
})