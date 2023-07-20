const listItems = [
    { id: 1, pname: 'milk', price: 'Saeedi Rad' },
    { id: 2, pname: 'water', price: 'Zehtab' },
    { id: 3, pname: 'rice', price: 'Yolme' },
    { id: 4, pname: 'yogert', price: 'Mohammadi' },
    { id: 5, pname: 'orangejuice', price: 'Ghahreman Zadeh' },
    { id: 6, pname: 'soda', price: 'Saeedi Rad' },
    { id: 7, pname: 'egg', price: 'Zehtab' },
    { id: 8, pname: 'cake', price: 'Yolme' },
    { id: 9, pname: 'chicken', price: 'Mohammadi' },
    { id: 10, pname: 'meat', price: 'Ghahreman Zadeh' },
    { id: 11, pname: 'wine', price: 'Ehsani' },
    { id: 12, pname: 'ciucamber', price: 'Modiri' },
    { id: 13, pname: 'tomato', price: 'Ansari' },
    { id: 14, pname: 'potato', price: 'Ali Pour' },
    { id: 15, pname: 'applejuice', price: 'Mahtabi' },
    { id: 16, pname: 'apple', price: 'Amino' },
    { id: 17, pname: 'shampo', price: 'Ehsani' },
    { id: 18, pname: 'nodle', price: 'Yolme' },
    { id: 19, pname: 'Fatemeh', price: 'Alilou' },
    { id: 20, pname: 'Ehsan', price: 'Tayyebi' },
    { id: 21, pname: 'Zahra', price: 'Gholami' },
    { id: 22, pname: 'Matin', price: 'Sahebi' },
    
];

let productListContainer = document.querySelector('#list')
let pageinationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 5

function displayProducts(allProductArray, productContainer, rowsCount, currentPage) {
    productContainer.innerHTML = ''

    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount
    let pageinatedProduct = allProductArray.slice(startIndex, endIndex)

    pageinatedProduct.forEach(product => {
        let productElement = document.createElement('div')
        productElement.classList.add('item')
        productElement.innerHTML = product.pname + ' ' + product.price
        productContainer.appendChild(productElement)
    });
}

function setUpPageination(allProductArray, pageinationContainer, rowsCount) {
    pageinationContainer.innerHTML = ''
    let pageCount = Math.ceil(allProductArray.length / rowsCount)
}

displayProducts(listItems, productListContainer, rowsCount, currentPage)