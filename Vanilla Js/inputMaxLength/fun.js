let getInput = document.getElementById('input')
let getCounter = document.getElementById('counter')
let getMaxlength = getInput.getAttribute('maxlength')

getInput.addEventListener('keyup', function(){
    getCounter.innerHTML = getMaxlength - getInput.value.length
})