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
    inputElem.value = element.textContent

    content.style.display = 'none'
    arrowBtn.classList.remove("active")
    isShow = false
    
    for (let option of showOptions.children){
        option.innerHTML === element.innerHTML ?
            option.classList.add('selected') :
            option.classList.remove('selected')
    }

    selectBtn.firstElementChild.textContent = element.textContent
}

inputElem.addEventListener('keyup', () => {
    let searchWord = inputElem.value.toLowerCase()

    let userCountries = countries.filter(country => country
        .toLowerCase()
        .startsWith(searchWord))
        .map(country => `<li onclick="updateName(this)">${country}</li>`)
        .join('')

    showOptions.innerHTML = userCountries ? userCountries : `<p style="color: red;">ops! country Not Found</p>`
})

selectBtn.addEventListener('click', contentShow)
window.addEventListener('load', addCountries)