window.onload = function() {
var menu = $('#menu > li');
$(menu).mouseenter(function(){$(this).find('li').stop().show().animate({height: '20px',}, 'slow') });
$(menu).mouseleave(function(){$(this).find('li').stop().show().animate({height: '0px',}, 'slow')});   
}
