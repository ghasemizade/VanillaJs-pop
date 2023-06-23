let getPlayPauseBtn = document.getElementById('play-pause')
let getAudio = document.querySelector('audio')
let getNextBtn = document.getElementById('next')
let getpreviousBtn = document.getElementById('previous')
let flag = true

let musicArraySrc = [
    'Light Music 01.mp3',
    'Light Music 02.mp3',
    'Light Music 03.mp3',
    'Light Music 04.mp3',
    'Light Music 05.mp3',
]

let audioIndex = 0

getpreviousBtn.addEventListener('click', function () {
    audioIndex--;
})

getPlayPauseBtn.addEventListener('click', function () {
    if (flag) {
        getPlayPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
        flag = false
        getAudio.play()
    }else{
        getPlayPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
        flag = true
        getAudio.pause()
    }
})

getNextBtn.addEventListener('click', function () {
    audioIndex++;
})