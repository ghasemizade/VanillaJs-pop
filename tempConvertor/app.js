let $ = document
let changeBtn = $.getElementById('btn-change')

changeBtn.addEventListener('click', function () {
    let flag = false
     if (flag) {
        $.getElementById('title').innerHTML = 'Convertor ' + '°F ' + 'to' + ' °C'
        flag = true
        console.log(flag)
     }else{
        
        $.getElementById('title').innerHTML
        flag = true
        console.log(flag)
     }
})