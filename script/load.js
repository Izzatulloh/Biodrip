
window.addEventListener('load',setTimeout(() => {
    let preloader = document.getElementById('priloader')
    let body = document.querySelector('body')
    
    preloader.style.display = 'none'
    body.style.overflow = 'visible'
}, 2000))