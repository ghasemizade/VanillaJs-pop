let customScroll = document.querySelector('.scroll')


window.addEventListener('scroll', function () {
    
    let scrollTop = this.window.scrollY
    let documentHeight = this.document.body.clientHeight
    let windowHeight = this.window.innerHeight


    let scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

    console.log(scrollTop)
    console.log(documentHeight)
    console.log(windowHeight)
    console.log(scrollPercentage)
})