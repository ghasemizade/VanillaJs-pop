const counters = document.querySelectorAll('.num')
let benefitsContainer = document.querySelector('.benefits')

window.addEventListener('scroll', () => {
    console.log(window.scrollY, benefitsContainer.offsetTop);

    if (window.scrollY >= benefitsContainer.offsetTop) {
        counters.forEach(counter => setCounter(counter))
    }
})

function setCounter(element) {
    console.log(element);
}