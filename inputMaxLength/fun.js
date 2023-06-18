let getInput = document.getElementById('input')
let getCounter = document.getElementById('counter')

getInput.addEventListener('keydown', function(){
    if (getCounter.innerHTML <= 19 && getCounter.innerHTML >= 1) {
        getCounter.innerHTML--
    }
})