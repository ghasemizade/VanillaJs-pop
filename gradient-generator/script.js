const $ = document
const dirButton = $.querySelectorAll("button");
const firstColorInput = $.querySelector("#color-a")
const secondColorInput = $.querySelector("#color-b")
const generateBtn = $.getElementById("#submit")
const codeTextArea = $.getElementById("#code")
const copyBtn = $.getElementById("#copy")
let select;

dirButton.forEach(item => {
    item.addEventListener("click", () =>{
        select = false
        if (!select) {
            item.className = "active";
        }else{
            item.classList.remove("active")            
            select = false
        }
    })
})

console.log(dirButton)