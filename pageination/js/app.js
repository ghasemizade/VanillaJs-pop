const listItems = [
    { id: 1, product: 'Amin', price: 'Saeedi Rad' },
    { id: 2, product: 'Amir', price: 'Zehtab' },
    { id: 3, product: 'Qadir', price: 'Yolme' },
    { id: 4, product: 'Babak', price: 'Mohammadi' },
    { id: 5, product: 'Hasan', price: 'Ghahreman Zadeh' },
    { id: 6, product: 'Amin', price: 'Saeedi Rad' },
    { id: 7, product: 'Amir', price: 'Zehtab' },
    { id: 8, product: 'Qadir', price: 'Yolme' },
    { id: 9, product: 'Babak', price: 'Mohammadi' },
    { id: 10, product: 'Hasan', price: 'Ghahreman Zadeh' },
    { id: 11, product: 'Saeed', price: 'Ehsani' },
    { id: 12, product: 'Siamak', price: 'Modiri' },
    { id: 13, product: 'Mohsen', price: 'Ansari' },
    { id: 14, product: 'Mehran', price: 'Ali Pour' },
    { id: 15, product: 'Amir Hossein', price: 'Mahtabi' },
    { id: 16, product: 'Hossein', price: 'Amino' },
    { id: 17, product: 'Melika', price: 'Ehsani' },
    { id: 18, product: 'Qadir', price: 'Yolme' },
    { id: 19, product: 'Fatemeh', price: 'Alilou' },
    { id: 20, product: 'Ehsan', price: 'Tayyebi' },
    { id: 21, product: 'Zahra', price: 'Gholami' },
    { id: 22, product: 'Matin', price: 'Sahebi' },
    
];

let productListContainer = document.querySelector('#list')
let pageinationContainer = document.querySelector('#pagination')

let currentPage = 1
let rows = 5

function displayProducts(allProductArray, productContainer, rowsCount, currentPage) {
    productContainer.innerHTML = ''

    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let pageinatedProduct = allProductArray.slice(startIndex, endIndex)

    console.log(pageinatedProduct)
}