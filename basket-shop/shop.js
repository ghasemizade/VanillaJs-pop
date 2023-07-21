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


allProducts.forEach(product => {
    let productContainer = document.createElement('div')
    productContainer.classList.add('p-items')
});