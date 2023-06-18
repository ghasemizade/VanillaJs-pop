let getItemColor = document.querySelectorAll('.item')
let getPalletColor = document.getElementById('pallet')
let getInput = document.getElementById('input')



getItemColor.forEach(function(index){
    index.addEventListener('click', function (event) {
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
