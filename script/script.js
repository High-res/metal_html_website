let isDarkMode = false;
function toggleMode() {
    if ( isDarkMode === false ) {
        document.querySelector('body').classList.remove('LightMode')
        document.querySelector('body').classList.add('DarkMode')
        isDarkMode = true
    } else if ( isDarkMode === true ) {
        document.querySelector('body').classList.add('LightMode')
        document.querySelector('body').classList.remove('DarkMode')
        isDarkMode = false
    }
    console.log('clicked')
}