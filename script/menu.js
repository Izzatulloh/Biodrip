window.addEventListener('onload',setTimeout(() => {
    let preloader = document.getElementById('priloader')
    let body = document.querySelector('body')
    preloader.style.display = 'none'
    body.style.overflow = 'visible'
}, 2000))

    


const menu = document.querySelector('.burger')
      list = document.querySelector('.header__list')
      body =document.querySelector('body')
      bodyact =document.querySelector('body active')
      
menu.addEventListener('click',()=>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
    body.classList.toggle('active')
    
})
