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

let getDecs = $.getElementById('desc')
let resetBtn = $.getElementById('btn-reset')
console.log(resetBtn)

resetBtn.addEventListener('click', function () {
    getDecs.style.display = 'none'
})