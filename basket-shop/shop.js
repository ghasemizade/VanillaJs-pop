const getAddBtn = document.querySelectorAll('.add-btn')
const getName = document.querySelectorAll('h2')
const getPrice = document.querySelectorAll('.price')
const getItems = document.querySelectorAll('.p-items')


let allProducts = [
    {id: 1, title: 'bananas', price: 2.65, img: './image/bananas.jpeg', count: 1},
    {id: 2, title: 'beef', price: 4.56, img: './image/beef.jpeg', count: 1},
    {id: 3, title: 'broccoli', price: 1.26, img: './image/broccoli.jpeg', count: 1},
    {id: 4, title: 'milk', price: 0.89, img: './image/milk.jpeg', count: 1},
    {id: 5, title: 'peppers', price: 0.56, img: './image/peppers.jpeg', count: 1},
    {id: 6, title: 'potatos', price: 3.14, img: './image/potatoes.jpeg', count: 1},
]

userBasket = []
const shopItemsContainer = document.querySelector('.products-cart')
const basketProductsContainer = document.querySelector('.cart-items')
const cartTotalPrice = document.querySelector('.cart-total-price')


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
    basketProductGenrator(userBasket)
    calcTotalPrice(userBasket)
}

function basketProductGenrator(userBasketArray) {
    basketProductsContainer.innerHTML = ''

    userBasketArray.forEach(product => {
        
        let basketProductContainer = document.createElement('div')
        basketProductContainer.classList.add('cart-row')

        let basketProductDetaileContainer = document.createElement('div')
        basketProductDetaileContainer.className = 'clart-item cart-column'

        let basketProductImg = document.createElement('img')
        basketProductImg.setAttribute('src', product.img)
        basketProductImg.classList.add('cart-item-image')

        let basketProductTitleSpan = document.createElement('span')
        basketProductTitleSpan.classList.add('cart-item-title')
        basketProductTitleSpan.innerHTML = product.title

        basketProductDetaileContainer.append(basketProductImg, basketProductTitleSpan)

        let basketProductPriceSpan = document.createElement('span')
        basketProductPriceSpan.className = 'cart-price cart-column'
        basketProductPriceSpan.innerHTML = product.price

        let basketProductInputContainer = document.createElement('div')
        basketProductInputContainer.className = 'cart-quantity cart-column'

        let basketProductInput = document.createElement('input')
        basketProductInput.className = 'cart-quantity-input'
        basketProductInput.value = product.count
        basketProductInput.setAttribute('type', 'number')
        basketProductInput.addEventListener('change', function () {
            updateCount(product.id, basketProductInput.value)
        })

        let basketProductRemoveBtn = document.createElement('button')
        basketProductRemoveBtn.className = 'btn btn-danger'
        basketProductRemoveBtn.innerHTML = 'Remove'
        basketProductRemoveBtn.addEventListener('click', function () {
            removeProductFromBasket(product.id)
        })

        basketProductInputContainer.append(basketProductInput, basketProductRemoveBtn)
        basketProductContainer.append(basketProductDetaileContainer, basketProductPriceSpan, basketProductInputContainer)
        basketProductsContainer.append(basketProductContainer)
    })
}

function removeProductFromBasket(productId) {
    userBasket = userBasket.filter(function (product) {
        return product.id !== productId
    })
    basketProductGenrator(userBasket)
    console.log(newUserBasket)
}

function calcTotalPrice(userBasketArray) {
    let totalPrice = 0

    userBasketArray.forEach(product => {
        totalPrice += product.count * product.price
    })
    cartTotalPrice.innerHTML = Math.trunc(totalPrice)
}

function updateCount (productId, newCount){
    userBasket.forEach(product => {
        if (product.id === productId) {
            product.count = newCount
        }
    });
    calcTotalPrice(userBasket)
}