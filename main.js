document.addEventListener('DOMContentLoaded',()=>{
   var dots = document.querySelectorAll('.dot');
   var slides = document.querySelectorAll('.slide');

   for(dot of dots){
       dot.addEventListener('click',function(){
            let current = this;
            let number = 0;
            for(dot of dots){ dot.classList.remove('active'); }
            this.classList.add('active');
            while(current = current.previousElementSibling){
                number++;
            }
            for(slide of slides){ slide.classList.remove('active'); }
            slides[number].classList.add('active');
       });
   }

   function toNextSlide(){
       let currentSlide = document.querySelector('.slide.active');
       let currentDot = document.querySelector('.dot.active');
       currentSlide.classList.remove('active');
       currentDot.classList.remove('active');
       if(currentSlide.nextElementSibling != null){
            currentSlide.nextElementSibling.classList.add('active');
            currentDot.nextElementSibling.classList.add('active');
       } else {
           slides[0].classList.add('active');
           dots[0].classList.add('active');
       }
       
   }

   setInterval(toNextSlide,3000);

   var btnMenu = document.querySelector('.btn-menu');
   var mainMenu = document.querySelector('.main-menu');
   btnMenu.addEventListener('click',()=>{
        mainMenu.classList.toggle('active');
   })
   
},false);