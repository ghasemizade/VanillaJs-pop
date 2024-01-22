const $ = document
const dirButton = $.querySelectorAll(".buttons button");
const firstColorInput = $.querySelector("#color-a")
const secondColorInput = $.querySelector("#color-b")
const generateBtn = $.querySelector("#submit")
const codeTextArea = $.querySelector("#code")
const copyBtn = $.querySelector("#copy")

let currentDirection = "to bottom";

const generateCssCode = () => {
    let cssCode = `background: linear-gradient(${currentDirection}, ${firstColorInput.value}, ${secondColorInput.value});`

    codeTextArea.value = cssCode;
    $.body.style.cssText = cssCode;
}

const setDirection = (direction, directionElem) => {
    for(let item of dirButton){
        item.classList.remove('active')
    }

    if (directionElem.tagName === 'BUTTON') {
        directionElem.classList.add('active')
    } else {
        directionElem.parentElement.classList.add('active')
    }

    currentDirection = direction;
}


dirButton.forEach(direction => {
    direction.addEventListener('click', (event) =>{
        let direction = event.target.dataset.direction;
        
        setDirection(direction, event.target);
    })
})

copyCssCode = () =>{
    codeTextArea.select()
    document.execCommand('copy')

    alert("Css Code Copied")
}

generateBtn.addEventListener('click', generateCssCode)
copyBtn.addEventListener('click', copyCssCode)

generateCssCode()