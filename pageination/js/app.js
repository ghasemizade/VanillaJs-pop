const listItems = [
    { id: 1, pname: 'milk', price: ''},
    { id: 2, pname: 'water', price: '' },
    { id: 3, pname: 'rice', price: '' },
    { id: 4, pname: 'yogert', price: '' },
    { id: 5, pname: 'orangejuice', price: '' },
    { id: 6, pname: 'soda', price: '' },
    { id: 7, pname: 'egg', price: '' },
    { id: 8, pname: 'cake', price: '' },
    { id: 9, pname: 'chicken', price: '' },
    { id: 10, pname: 'meat', price: '' },
    { id: 11, pname: 'wine', price: '' },
    { id: 12, pname: 'ciucamber', price: '' },
    { id: 13, pname: 'tomato', price: '' },
    { id: 14, pname: 'potato', price: '' },
    { id: 15, pname: 'applejuice', price: '' },
    { id: 16, pname: 'apple', price: '' },
    { id: 17, pname: 'shampo', price: '' },
    { id: 18, pname: 'nodle', price: '' },
    { id: 19, pname: 'Fatemeh', price: '' },
    { id: 20, pname: 'Ehsan', price: '' },
    { id: 21, pname: 'Zahra', price: '' },
    { id: 22, pname: 'Matin', price: '' },
    
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

    for (let i = 1; i < pageCount; i++) {
        let btn = pageinationBtn(i, allProductArray)
        pageinationContainer.appendChild(btn)
    }
}

function pageinationBtn(currentPageBtn, allProductArray) {
    let button = document.createElement('button')
    button.innerHTML = currentPageBtn

    if (currentPageBtn === currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = currentPageBtn
        displayProducts(allProductArray, productListContainer, rowsCount, currentPage)

        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')
        button.classList.add('active')
    })

    return button
}

displayProducts(listItems, productListContainer, rowsCount, currentPage)
setUpPageination(listItems, pageinationContainer, rowsCount)