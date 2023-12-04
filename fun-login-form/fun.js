const userInputElem = document.getElementById("username")
const passInputElem = document.getElementById("password")
const leftEye = document.querySelector(".righteye")
const rightEye = document.querySelector(".lefteye")

inputElem.addEventListener('focus', () => {
    console.log("focus");
})

inputElem.addEventListener('blur', () => {
    console.log("blur");
})