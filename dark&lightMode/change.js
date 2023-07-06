let getSwitchElem = document.querySelector('.switch')

// add dark class to body
getSwitchElem.addEventListener('click', function(){
    document.body.className.add('dark')
})