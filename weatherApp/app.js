let imgUrl = [
    './image-bg/01.jpg',
    './image-bg/02.jpg',
    './image-bg/03.jpg',
    './image-bg/04.jpg',
    './image-bg/05.jpg',
    './image-bg/06.jpg',
    './image-bg/07.jpg',
    './image-bg/08.jpg',
    './image-bg/09.jpg',
    './image-bg/10.jpg',
    './image-bg/11.jpg',
    './image-bg/12.jpg',
    './image-bg/13.jpg',
    './image-bg/14.jpg',
    './image-bg/15.jpg',
    './image-bg/16.jpg',
    './image-bg/17.jpg',
    './image-bg/18.jpg',
    './image-bg/19.jpg',
    './image-bg/20.jpg',
    './image-bg/21.jpg',
    './image-bg/22.jpg',
]

let bodyImgUrl = document.body

function randomUrl() {
    let ranUrl = Math.floor(Math.random() * 22)
    bodyImgUrl.style.backgroundImage = 'url(' + imgUrl[ranUrl] + ')'
}

let citiesWeather = {
   tehran: {id: 1, cityName: 'Tehran', temp: 35, sky: 'sunny', humidity: 24, wind: 22},
   noshahr: {id: 2, cityName: 'Nowshahr', temp: 29, sky: 'rainy', humidity: 34, wind: 34},
   qom: {id: 3, cityName: 'Qom', temp: 45, sky: 'sunny', humidity: 14, wind: 40},
   tabriz: {id: 4, cityName: 'Tabriz', temp: 24, sky: 'rainy', humidity: 22, wind: 29},
   shiraz: {id: 5, cityName: 'Shiraz', temp: 39, sky: 'cloudy', humidity: 12, wind: 16},
   yazd: {id: 6, cityName: 'Yazd', temp: 41, sky: 'sunny', humidity: 32, wind: 27},
}

let searchBtn = document.getElementById('btn')
let searchBar = document.getElementById('user-input')

searchBtn.addEventListener('click', function () {
    let userInput = searchBar.value.toLowerCase()
    let tableContent = citiesWeather[userInput]

    if (tableContent) {
        document.querySelector('.city').innerHTML = tableContent.cityName
        document.getElementById('temp').innerHTML = tableContent.temp + '°C'
        document.getElementById('description').innerHTML = tableContent.sky
        document.getElementById('humidity').innerHTML = 'Humidity ' + tableContent.humidity + '%'
        document.getElementById('wind').innerHTML = 'Wind speed ' + tableContent.wind + 'km/h'

        document.getElementById('content').style.display = 'none'
        document.querySelector('.weather').style.display = 'block'
        
    }else{
        alert('not found this city...!')
    }
})