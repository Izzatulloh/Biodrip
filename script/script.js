var swiperV = new Swiper('.swiper-container-v', {
    slidesPerView: 1,
    
    keyboard: {
      enabled: true
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
     
      waitForTransition: true,
    },
   
    loop: true,
    effect: 'flip',
    cubeEffect: {
      shadow: false,
    },
  });