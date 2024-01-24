let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];


const $ = document;
const content = $.querySelector(".content")
const selectBtn = $.querySelector(".select-btn")
const arrowBtn = $.querySelector(".wrapper")
const showOptions = $.querySelector(".options")
const inputElem = $.querySelector('input')

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

function addCountries(){
    let li = null

    countries.forEach(country => {
        li = `<li onclick="updateName(this)">${country}</li>`
        showOptions.insertAdjacentHTML('beforeend', li)
    })
}

function updateName(element) {
    console.log(element.textContent);
    inputElem.value = element.textContent
    content.style.display = 'none'
    selectBtn.firstElementChild.textContent = element.textContent
}

selectBtn.addEventListener('click', contentShow)
window.addEventListener('load', addCountries)