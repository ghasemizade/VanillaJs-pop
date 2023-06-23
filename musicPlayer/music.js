let getPlayPauseBtn = document.getElementById('play-pause')
let getAudio = document.querySelector('audio')
let getNextBtn = document.getElementById('next')
let getpreviousBtn = document.getElementById('previous')
let flag = true

let musicArraySrc = [
    './media/LightMusic01.mp3',
    './media/LightMusic02.mp3',
    './media/LightMusic03.mp3',
    './media/LightMusic04.mp3',
    './media/LightMusic05.mp3',
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
    audioIndex += 1;
    if (audioIndex > musicArraySrc.length - 1) {
        audioIndex = 0;
    }
    getAudio.setAttribute('src', musicArraySrc[audioIndex])
    getAudio.play()
    console.log(musicArraySrc[audioIndex])
})