let getPlayPauseBtn = document.getElementById('play-pause')
let flag = true


getPlayPauseBtn.addEventListener('click', function () {
    if (flag) {
        getPlayPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
        flag = false
    }else{
        getPlayPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
        flag = true
    }
})