const linkLogo = document.getElementById('link-home-logo')
const logo = document.getElementById('home-logo')
window.addEventListener('scroll', e => {
    if(scrollY < 100) {
        logo.style.width = '200px'
    } else {
        logo.style.width = '100px'
    }
})
