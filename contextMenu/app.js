let $ = document 
let getContextMenu = $.getElementById('context-menu')


$.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    getContextMenu.style.display = 'block'
})

$.addEventListener('click', function () {
    getContextMenu.style.display = 'none'
    
})