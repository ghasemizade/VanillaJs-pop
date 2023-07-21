const getAddBtn = document.querySelectorAll('.add-btn')
const getName = document.querySelectorAll('h2')
const getPrice = document.querySelectorAll('.price')
const getItems = document.querySelectorAll('.p-items')


let allProducts = [
    {id: 1, title: 'bananas', price: 2.65, img: './image/bananas.jpeg'},
    {id: 2, title: 'beef', price: 4.56, img: './image/beef.jpeg'},
    {id: 3, title: 'broccoli', price: 1.26, img: './image/broccoli.jpeg'},
    {id: 4, title: 'milk', price: 0.89, img: './image/milk.jpeg'},
    {id: 5, title: 'peppers', price: 0.56, img: './image/peppers.jpeg'},
    {id: 6, title: 'potatos', price: 3.14, img: './image/potatoes.jpeg'},
]

userBasket = []
const shopItemsContainer = document.querySelector('.products-cart')

allProducts.forEach(product => {
    let productContainer = document.createElement('div')
    productContainer.classList.add('p-items')

    let productTitle = document.createElement('h2')
    productTitle.classList.add('title')
    productTitle.innerHTML = product.title

    let productImage = document.createElement('img')
    productImage.setAttribute('src', product.img)

    let productDetails = document.createElement('div')
    productDetails.classList.add('details')

    let pElemPrice = document.createElement('p')
    pElemPrice.innerText = '$ ' + product.price
    pElemPrice.classList.add('price')

    let addBtn = document.createElement('button')
    addBtn.innerHTML = 'add to cart'
    addBtn.classList.add('add-btn')
    addBtn.addEventListener('click', function () {
        addProductToBasket(product.id)
    })

    productDetails.append(pElemPrice, addBtn)
    productContainer.append(productTitle, productImage, productDetails)
    
    shopItemsContainer.append(productContainer)
});

function addProductToBasket (productId){
    let mainProduct = allProducts.find(function (product) {
        return product.id === productId
    })
    userBasket.push(mainProduct)
}