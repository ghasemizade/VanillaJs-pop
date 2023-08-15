let productContainer = document.querySelector('.grid-items')

let productArray = [
    {id: 1, title: 'Air Jordan 1 Mid SE', price: 124.95, img: './imgs/air-jordan-1.jpg'},
    {id: 2, title: 'Air Jordan 1 Low', price: 109.95, img: './imgs/air-jordan-2.jpg'},
    {id: 3, title: 'Air Jordan 1 Retro High OG', price: 164.95, img: './imgs/air-jordan-3.jpg'},
]

productArray.forEach(function (product) {
    productContainer.insertAdjacentHTML('afterbegin', '<div class="item"><div class="details"><img src="'+ product.img +'" alt="jordan-1"><h3>' + product.title + '</h3><p class="desc">Mens Shoes</p><p class="price">£' + product.price + '</p><a href="product.html?id=' + product.id + '">SEE MORE</a></div></div>')
    
})

window.addEventListener('online', function () {
    console.log('online');
})
window.addEventListener('offline', function () {
    console.log('offline');
})