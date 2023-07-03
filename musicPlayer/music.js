// get elemnt from dom
let getPlayPauseBtn = document.getElementById('play-pause')
let getAudio = document.querySelector('audio')
let getNextBtn = document.getElementById('next')
let getpreviousBtn = document.getElementById('previous')
let getSkipBtn = document.getElementById('skip')
let getBackBtn = document.getElementById('back')
let flag = true

// set array for track src
let musicArraySrc = [
    './media/music01.mp3',
    './media/music02.mp3',
    // './media/LightMusic03.mp3',
    // './media/LightMusic04.mp3',
    // './media/LightMusic05.mp3',
]

let audioIndex = 0

// add event to previous button for previous track
getpreviousBtn.addEventListener('click', function () {
    audioIndex -= 1;
    if (audioIndex < 0) {
        audioIndex = 4
    }
    getAudio.setAttribute('src', musicArraySrc[audioIndex])
    getAudio.play()
})

// add event to play and pause button for play and stop track
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

// add event to next button for next track
getNextBtn.addEventListener('click', function () {
    audioIndex += 1;
    if (audioIndex > musicArraySrc.length - 1) {
        audioIndex = 0;
    }
    getAudio.setAttribute('src', musicArraySrc[audioIndex])
    getAudio.play()
})

// add function for -5second & +5second 
getBackBtn.addEventListener('click', function () {
    getAudio.currentTime -= 5;
})

getSkipBtn.addEventListener('click', function () {
    getAudio.currentTime += 5;
})