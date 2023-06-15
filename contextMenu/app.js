let $ = document 
let getContextMenu = $.getElementById('context-menu')


$.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    if (getContextMenu.style.display === 'none') {
        
        getContextMenu.style.left = event.pageX + 'px'
        getContextMenu.style.top = event.pageY + 'px'

        getContextMenu.style.display = 'block'
    }
})

$.addEventListener('click', function () {
    getContextMenu.style.display = 'none'
    
})