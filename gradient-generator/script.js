let $ = document
let dirButton = $.querySelectorAll("button")

dirButton.forEach(item => {
    item.addEventListener("click", () =>{
        item.classList = "active"
    })
})

console.log(dirButton)