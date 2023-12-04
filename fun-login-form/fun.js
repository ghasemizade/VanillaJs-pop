const userInputElem = document.querySelector("#username-input")
const passInputElem = document.querySelector("#password-input")
const leftEye = document.querySelector(".lefteye")
const rightEye = document.querySelector(".righteye")

let leftEyeTop = 78
let leftEyeLeft = 145
let rightEyeTop = 78
let rightEyeLeft = 220

const userInputFocus = () => {
    let eyePosition = setInterval(() => {
        if (leftEyeTop === 87) {
            clearInterval(eyePosition)
        }
        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyeTop++
        leftEyeLeft--
        rightEyeTop++
        rightEyeLeft--
        
    }, 10)
}
const userInputBlur = () => {
    let eyePosition = setInterval(() => {
        if (leftEyeTop === 78) {
            clearInterval(eyePosition)
        }
        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        leftEyeTop--
        leftEyeLeft++
        rightEyeTop--
        rightEyeLeft++
    }, 10)
}
// !!!!!!!!!!!!!!!!   update !!!!!!!!!!!!!!!!
// const userKeyHandler = (event) => {
    
//     if (leftEyeLeft > 155) {
//         return false
//     }
//     console.log(event.keyCode);

//     if (sevent.keyCode === 8) {
//         leftEyeLeft -= 1
//         rightEyeLeft -= 1
//     }else {
//         leftEyeLeft++
//         rightEyeLeft++
//     }
//     leftEye.style.left = leftEyeLeft + 'px'
//     rightEye.style.left = rightEyeLeft + 'px'

//     leftEyeLeft++
//     rightEyeLeft++
// }
const passInputFocus = () => {

    let eyePosition = setInterval(() => {
        if (leftEyeTop && rightEyeTop === 68) {
            clearInterval(eyePosition)
        }
        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        rightEyeTop--
        leftEyeTop--
        rightEyeLeft++
        leftEyeLeft++
    }, 10)
}
const passInputBlur = () => {
    let eyePosition = setInterval(() => {
        if (leftEyeTop && rightEyeTop === 78) {
            clearInterval(eyePosition)
        }
        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'

        rightEyeTop++
        leftEyeTop++
        rightEyeLeft--
        leftEyeLeft--
    }, 15)
}

userInputElem.addEventListener('focus', userInputFocus)
userInputElem.addEventListener('blur', userInputBlur)
// userInputElem.addEventListener('keydown', userKeyHandler)
passInputElem.addEventListener('focus', passInputFocus)
passInputElem.addEventListener('blur', passInputBlur)
