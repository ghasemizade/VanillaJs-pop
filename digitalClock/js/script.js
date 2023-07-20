const getHour = document.getElementById('hour')
const getMinute = document.getElementById('minute')
const getSecond = document.getElementById('seconds')




setInterval(function () {
    let Time = new Date()
    

    getHour.innerHTML = Time.getHours()
    getMinute.innerHTML = Time.getMinutes()
    getSecond.innerHTML = Time.getSeconds()
}, 1000)





console.log()