const listItems = [
    { id: 1, pname: 'Amin', price: 'Saeedi Rad' },
    { id: 2, pname: 'Amir', price: 'Zehtab' },
    { id: 3, pname: 'Qadir', price: 'Yolme' },
    { id: 4, pname: 'Babak', price: 'Mohammadi' },
    { id: 5, pname: 'Hasan', price: 'Ghahreman Zadeh' },
    { id: 6, pname: 'Amin', price: 'Saeedi Rad' },
    { id: 7, pname: 'Amir', price: 'Zehtab' },
    { id: 8, pname: 'Qadir', price: 'Yolme' },
    { id: 9, pname: 'Babak', price: 'Mohammadi' },
    { id: 10, pname: 'Hasan', price: 'Ghahreman Zadeh' },
    { id: 11, pname: 'Saeed', price: 'Ehsani' },
    { id: 12, pname: 'Siamak', price: 'Modiri' },
    { id: 13, pname: 'Mohsen', price: 'Ansari' },
    { id: 14, pname: 'Mehran', price: 'Ali Pour' },
    { id: 15, pname: 'Amir Hossein', price: 'Mahtabi' },
    { id: 16, pname: 'Hossein', price: 'Amino' },
    { id: 17, pname: 'Melika', price: 'Ehsani' },
    { id: 18, pname: 'Qadir', price: 'Yolme' },
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

    pageinatedProduct.forEach((product) => {
        let productElement = document.createElement('div')
        productElement.innerHTML = product.pname + ' ' + product.price
        console.log(productElement.innerHTML)
    });
}

displayProducts(listItems, productListContainer, rowsCount, currentPage)