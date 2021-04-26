const menu = document.querySelector('.burger')
      list = document.querySelector('.header__list')
      body =document.querySelector('body')
      bodyact =document.querySelector('body active')
      
menu.addEventListener('click',()=>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
    body.classList.toggle('active')
    
})
