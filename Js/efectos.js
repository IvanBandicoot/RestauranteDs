$(document).ready(function(){
  
    
    //efecto menu
  $('header .contenedor .menu a').each(function(index,elemento){
      $(this).css({
          'top':'-200px'
      });
      $(this).animate({
         top: '0' 
      },2000 + (index * 500));
  });

  //efecto header
   if($(window).width() > 800){
       $('header .contenedor .textos').css({
           opacity: 0,
           marginTop: 0
       });

       $('header .contenedor .textos').animate({
           opacity: 1,
           marginTop: '-52px'
       }, 1500);
   }

   //Scroll Elementos Menu

   var acercaDe = $('#acerca-de').offset().top,
   menu = $('#platillos').offset().top,
   galeria = $('#galeria').offset().top,
   ubicacion = $('#ubicacion').offset().top;
    
   $('#btn-acerca-de').on('click',function(e){
       e.preventDefault();
            $('html, body').animate({
            scrollTop:500
            },500);
   });
    
   $('#btn-menu').on('click',function(e){
       e.preventDefault();
            $('html, body').animate({
            scrollTop:1250
            },500);
   });

    $('#btn-galeria').on('click',function(e){
       e.preventDefault();
            $('html, body').animate({
            scrollTop:2095
            },500);
   });

    $('#btn-ubicacion').on('click',function(e){
       e.preventDefault();
            $('html, body').animate({
            scrollTop:2785
            },500);
   });

});