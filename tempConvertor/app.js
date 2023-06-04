let $ = document
let changeBtn = $.getElementById('btn-change')
let flag = true

changeBtn.addEventListener('click', function () {
    let getValue = getInput.value
    if (!flag) {
        $.getElementById('title').innerHTML= 'Convertor ' + '°C ' + 'to' + ' °F'
        let showF = (1.8 * getValue) + 32
        getDecs.innerHTML = getValue +'°C '+ 'to ' + showF +'°F'
        getInput.placeholder = '°C'
        flag = true
    }else{
        $.getElementById('title').innerHTML = 'Convertor ' + '°F ' + 'to' + ' °C'
        let showC = Number((getValue - 32) / 1.8)
        getDecs.innerHTML = getValue +'°F '+ 'to ' + showC +'°C'
        getInput.placeholder = '°F'
        flag = false
    }
})

console.log(flag)

let getDecs = $.getElementById('desc')
let resetBtn = $.getElementById('btn-reset')

resetBtn.addEventListener('click', function () {
    getDecs.style.display = 'none'
    getInput.value = ''
})

let getInput = $.getElementById('input-degree')
let convertorBtn = $.getElementById('btn-convert')
console.log(getInput.placeholder)

convertorBtn.addEventListener('click', function () {
    let getValue =  getInput.value
    console.log(getValue)
    if (flag) {
        let showF = (1.8 * getValue) + 32
        getDecs.innerHTML = getValue +'°C '+ 'to ' + showF +'°F'
        getDecs.style.display = 'block'
        console.log(showF)
    }else{
        let showC = (getValue - 32) / 1.8
        getDecs.innerHTML = getValue +'°F '+ 'to ' + showC +'°C'
        getDecs.style.display = 'block'
        console.log(showC)
    }
})
