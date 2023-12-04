const menuTap = document.getElementById("toggle-btn")
const menuItem = document.querySelectorAll('.menu a')
let isMenuActive = false

menuTap.addEventListener("click", () => {
    if (!isMenuActive) {
        menuTap.classList.add('active')
        menuItem[0].style.transform = 'translate(150px, 0)';
        menuItem[1].style.transform = 'translate(150px, 90px)';
        menuItem[2].style.transform = 'translate(90px, 150px)';
        menuItem[3].style.transform = 'translate(0px, 150px)';
        isMenuActive = true
    } else {
        menuTap.classList.remove('active')

        menuItem.forEach(menuItem => menuItem.style.transform = 'translate(0, 0)')

        isMenuActive = false
    }
})