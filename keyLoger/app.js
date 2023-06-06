let $ = document
let showKeyNumber = $.getElementById('keyCode')
let showKey = $.getElementById('key')
let showLocation = $.getElementById('location')
let showCode = $.getElementById('code')
let showWhich = $.getElementById('which')
let starter = $.getElementById('starter')

let heading = $.getElementById('heading')
let asci = $.getElementById('asci')
let informations  = $.getElementById('informations')

$.addEventListener('keydown', function (event) {
    let asciCode = event.key

    showKeyNumber.innerHTML = asciCode.codePointAt(0)
    showKey.innerHTML = asciCode
    showLocation.innerHTML = event.location
    showCode.innerHTML = event.code
    showWhich.innerHTML = event.which
    starter.style.display = 'none'
    heading.style.display = 'flex'
    asci.style.display = 'flex'
    informations.style.display = 'flex'
})
