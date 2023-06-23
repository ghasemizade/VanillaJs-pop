let getPlayPauseBtn = document.getElementById('play-pause')


getPlayPauseBtn.addEventListener('click', function () {
    let flag = true
    if (flag) {
        getPlayPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
        flag = false
    }else{
        getPlayPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
        flag = true
    }
})