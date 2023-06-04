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