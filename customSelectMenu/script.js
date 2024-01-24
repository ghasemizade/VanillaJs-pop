const $ = document;
const content = $.querySelector(".content")
const selectBtn = $.querySelector(".select-btn")
const arrowBtn = $.querySelector(".wrapper")



let isShow = false

const contentShow = () => {
    if (isShow) {
        content.style.display = 'none'
        arrowBtn.classList.remove("active")
        isShow = false
    }else {
        content.style.display = 'block';
        arrowBtn.classList.add("active")
        isShow = true
    }
}

selectBtn.addEventListener('click', contentShow)
