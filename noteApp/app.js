let getItemColor = document.querySelectorAll('.item')
let getPalletColor = document.getElementById('pallet')
let getInput = document.getElementById('input')
let getAddBtn = document.getElementById('add')
let getDelBtn = document.getElementById('del')
let getNotes = document.getElementById('notes')

getInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        console.log(getInput.value)
        let createDivElem = document.createElement('div')
        let createSpanElem = document.createElement('span')
        createDivElem.className = 'note'
        createSpanElem.className = 'title'
        getNotes.appendChild(createDivElem)
        createDivElem.appendChild(createSpanElem)
        createSpanElem.innerHTML = getInput.value
    }
})

getItemColor.forEach(function(index){
    index.addEventListener('click', function () {
        switch (index.innerHTML) {
            case '1':
                getInput.style.backgroundColor = 'var(--white)'
                break;
            case '2':
                getInput.style.backgroundColor = 'var(--golden)'
                break;
            case '3':
                getInput.style.backgroundColor = 'var(--yellow)'
                break;
            case '4':
                getInput.style.backgroundColor = 'var(--limon)'
                break;
            case '5':
                getInput.style.backgroundColor = 'var(--green)'
                break;
            case '6':
                getInput.style.backgroundColor = 'var(--darkcyan)'
                break;
            case '7':
                getInput.style.backgroundColor = 'var(--cyan)'
                break;
            case '8':
                getInput.style.backgroundColor = 'var(--blue)'
                break;
            case '9':
                getInput.style.backgroundColor = 'var(--darkpurple)'
                break;
            case '10':
                getInput.style.backgroundColor = 'var(--purple)'
                break;
            case '11':
                getInput.style.backgroundColor = 'var(--pink)'
                break;            
            default:
                break;
        }
    })
})

getAddBtn.addEventListener('click', function () {
    
})

getDelBtn.addEventListener('click', function () {
    
})