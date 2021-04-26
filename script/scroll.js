const nav = document.querySelector('.fixed__nav');

window.addEventListener('scroll', function() {
    
    if(pageYOffset> 100){
      
            nav.style.background = 'rgba(255, 255, 255,0.7)'
            nav.style.transition= '0.5s'
    }
    else if(pageYOffset< 100){
        nav.style.background = 'none'
        nav.style.transition= '0.5s'
    }

  });

  