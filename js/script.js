$(document).ready(function(){

  //callback che parte dopo il click
  $('.next').click(pulsanteNext);
  $('.prev').click(pulsantePrev);

  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
  });

});

// Funzione per cambiare l'immagine verso Destra
function pulsanteNext(){

  var imgActive = $('.images img.active');
  var circleActive = $('.nav i.active');

  imgActive.removeClass('active')  
  imgActive.next().addClass('active');

  circleActive.removeClass('active');
  circleActive.next().addClass('active');

  if(imgActive.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}

// Funzione per cambiare l'immagine verso Sinistra
function pulsantePrev(){

  var imgActive = $('.images img.active');
  var circleActive = $('.nav i.active');

  imgActive.removeClass('active');
  imgActive.prev().addClass('active');

  circleActive.removeClass('active');
  circleActive.prev().addClass('active');

  if(imgActive.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }

}
