let $ = document 
let getContextMenu = $.getElementById('context-menu')
let getTitle = $.getElementById('title')
// set event for right click & show context menu
$.body.addEventListener('contextmenu', function (event) {
    event.preventDefault()
    if (getContextMenu.style.display === 'none') {
        
        getContextMenu.style.left = event.pageX + 'px'
        getContextMenu.style.top = event.pageY + 'px'
        getTitle.style.color = 'rgb(69, 165, 69)'
        getContextMenu.style.display = 'block'

    }
    else{
        getContextMenu.style.left = event.pageX + 'px'
        getContextMenu.style.top = event.pageY + 'px'
    }
    })
// set event for left click 
$.addEventListener('click', function () {
    getContextMenu.style.display = 'none'
    getTitle.style.color = 'tomato'
})
// set Escape btn keydown event
$.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        getContextMenu.style.display = 'none'
        getTitle.style.color = 'tomato'
    }
})