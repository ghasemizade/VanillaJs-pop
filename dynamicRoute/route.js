let productContainer = document.querySelector('.container')

let productArray = [
    {id: 1, title: 'Air Jordan 1 Mid SE', price: 124.95},
    {id: 2, title: 'Air Jordan 1 Low', price: 109.95},
    {id: 3, title: 'Air Jordan 1 Retro High OG', price: 164.95},
]

productArray.forEach(function (product) {
    productContainer.insertAdjacentElement('beforeend', '<div class="item"><div class="details"><img src="./imgs/air-jordan-1.jpg" alt="jordan-1"><h3>Air Jordan 1 Mid SE</h3><p class="desc">Mens Shoes</p><p class="price">£124.95</p><a href="">SEE MORE</a></div></div>')
})