const getHour = document.getElementById('hour')
const getMinute = document.getElementById('minute')
const getSecond = document.getElementById('seconds')


const Time = new Date()

getHour.innerHTML = Time.getHours()
getMinute.innerHTML = Time.getMinutes()

setInterval(function () {
    getSecond.innerHTML = Time.getSeconds()
}, 1000)



console.log()