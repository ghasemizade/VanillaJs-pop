let productContainer = document.querySelector('.container')

let productArray = [
    {id: 1, title: 'Air Jordan 1 Mid SE', price: 124.95, img: './imgs/air-jordan-1.jpg'},
    {id: 2, title: 'Air Jordan 1 Low', price: 109.95, img: './imgs/air-jordan-2.jpg'},
    {id: 3, title: 'Air Jordan 1 Retro High OG', price: 164.95, img: './imgs/air-jordan-3.jpg'},
]

productArray.forEach(function (product) {
    productContainer.insertAdjacentElement('beforeend', '<div class="item"><div class="details"><img src="'+ productArray.img +'" alt="jordan-1"><h3>' + productArray.title + '</h3><p class="desc">Mens Shoes</p><p class="price">£' + productArray.price + '</p><a href="">SEE MORE</a></div></div>')
    
})