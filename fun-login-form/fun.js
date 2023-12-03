const userInputElem = document.getElementById("username")
const passInputElem = document.getElementById("password")

inputElem.addEventListener('focus', () => {
    console.log("focus");
})

inputElem.addEventListener('blur', () => {
    console.log("blur");
})