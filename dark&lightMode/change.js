let getSwitchElem = document.querySelector('.switch')

// add dark class to body
getSwitchElem.addEventListener('click', function(){
    document.body.classList.toggle('dark')
    // console.log(document.body)

    isDark = document.body.className.includes('dark')

    if (isDark) {
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }

})