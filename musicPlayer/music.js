// get elemnt from dom
let getBody = document.body
let getPlayPauseBtn = document.getElementById('play-pause')
let getAudio = document.querySelector('audio')
let getNextBtn = document.getElementById('next')
let getpreviousBtn = document.getElementById('previous')
let getSkipBtn = document.getElementById('skip')
let getBackBtn = document.getElementById('back')
let getBgImg = document.getElementById('bg-poster')
let progress = document.getElementById("progress");
let getProgress = document.getElementById('progress-container')
let flag = true

let musicImgArray = [
    './img-poster/Ali-Zand-Vakili-Zibatarin-Roya.jpg',
    './img-poster/Reza-Bahram-Divaneh.jpg',
]

// set array for track src
let musicArraySrc = [
    './media/music01.mp3',
    './media/music02.mp3',
]

let audioIndex = 0
let imgIndex = 0

// add event to previous button for previous track
getpreviousBtn.addEventListener('click', function () {
    audioIndex -= 1;
    imgIndex -= 1;
    if (audioIndex < musicArraySrc.length) {
        audioIndex = 1
    }
    if (imgIndex < musicImgArray.length) {
        imgIndex = 1
        console.log(musicImgArray[imgIndex])
    }
    getBgImg.setAttribute('src', musicImgArray[imgIndex])
    getBody.style.backgroundImage = 'url' + '(' + musicImgArray[imgIndex] + ')'
    getAudio.setAttribute('src', musicArraySrc[audioIndex])
    getAudio.play()
    getPlayPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
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
    imgIndex += 1;
    if (audioIndex > musicArraySrc.length - 1) {
        audioIndex = 0;
    }
    if (imgIndex > musicImgArray.length - 1) {
        imgIndex = 0
    }
    getBgImg.setAttribute('src', musicImgArray[imgIndex])
    getBody.style.backgroundImage = 'url' + '(' + musicImgArray[imgIndex] + ')'
    getAudio.setAttribute('src', musicArraySrc[audioIndex])
    getAudio.play()
    getPlayPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
})

// add progress
progressContainer.addEventListener("click", function (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;
    music.currentTime = (clickX / width) * duration;
});

// add function for -5second & +5second 
getBackBtn.addEventListener('click', function () {
    getAudio.currentTime -= 5;
})

getSkipBtn.addEventListener('click', function () {
    getAudio.currentTime += 5;
})