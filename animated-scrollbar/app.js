const counters = document.querySelectorAll('.num')
let benefitsContainer = document.querySelector('.benefits')
let startCounter = false

window.addEventListener('scroll', () => {
    // console.log(window.scrollY, benefitsContainer.offsetTop);

    if (window.scrollY >= benefitsContainer.offsetTop) {
        if (!startCounter) {
            counters.forEach(counter => setCounter(counter))
        }
        startCounter = true
    }
})

function setCounter(element) {
    let elemNumCount = element.dataset.counter

    let counterInterval = setInterval(() => {
        if(element.textContent == elemNumCount) {
            clearInterval(counterInterval)
        }

        element.textContent++
    }, 5)
}