let $ = document
let changeBtn = $.getElementById('btn-change')
let flag = true

changeBtn.addEventListener('click', function () {
    if (!flag) {
         $.getElementById('title').innerHTML= 'Convertor ' + '°C ' + 'to' + ' °F'
         flag = true
    }else{
        $.getElementById('title').innerHTML = 'Convertor ' + '°F ' + 'to' + ' °C'
        flag = false
    }
})

console.log(flag)

let getDecs = $.getElementById('desc')
let resetBtn = $.getElementById('btn-reset')

resetBtn.addEventListener('click', function () {
    getDecs.style.display = 'none'
})

let getInput = $.getElementById('input-degree')
let convertorBtn = $.getElementById('btn-convert')
// console.log(convertorBtn)

convertorBtn.addEventListener('click', function () {
    let getValue =  getInput.value
    console.log(getValue)
    if (flag) {
        let showF = (1.8 * getValue) + 32
        console.log(showF)
    }else{
        let showC = (getValue - 32) / 1.8
        console.log(showC)
    }
})
