let $ = document 
let getContextMenu = $.getElementById('context-menu')


$.body.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    if (getContextMenu.style.display === 'none') {
        
        getContextMenu.style.left = event.pageX + 'px'
        getContextMenu.style.top = event.pageY + 'px'

        getContextMenu.style.display = 'block'
    }
    else{
        getContextMenu.style.left = event.pageX + 'px'
        getContextMenu.style.top = event.pageY + 'px'
    }
    })

$.addEventListener('click', function () {
    getContextMenu.style.display = 'none'
    
})

$.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        getContextMenu.style.display = 'none'
    }
})