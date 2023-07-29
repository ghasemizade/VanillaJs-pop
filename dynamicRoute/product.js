let backBtn = document.querySelector('#back')

backBtn.addEventListener('click', function () {
    history.back()
})

let productArray = [
    {id: 1, title: 'Air Jordan 1 Mid SE', price: 124.95, img: './imgs/air-jordan-1.jpg'},
    {id: 2, title: 'Air Jordan 1 Low', price: 109.95, img: './imgs/air-jordan-2.jpg'},
    {id: 3, title: 'Air Jordan 1 Retro High OG', price: 164.95, img: './imgs/air-jordan-3.jpg'},
]

let shoeTitle = document.querySelector('h1')
let shoeDesc = document.querySelector('p')
let shoeImage = document.querySelector('img')

let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get('id')

let mainProductObject = productArray.find(function (product) {
    return product.id == mainProductId
})

if (mainProductObject) {
    shoeTitle.innerHTML = mainProductObject.title
    shoeImage.setAttribute('src', mainProductObject.img)
} else {
    location.href = 'http://127.0.0.1:5500/dynamicRoute/index.html'
}
