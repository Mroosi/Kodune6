window.onload = function() {
  
    $('.click').click( function () {$('.click').children('ul').hide(), $(this).children().show();});
    $('.hover').mouseenter( function () {$('.click').children('ul').hide(),$('.hover').children('ul').hide(), $(this).children().show();});
    $('.hover').mouseleave( function () {$('.hover').children('ul').hide();});
    
   
}
