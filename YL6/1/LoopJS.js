window.onload = function() {
    var loendur = 0;
    var list = $('li').get(loendur);
    $(list).addClass("active");

    $( '#next' ).click(function() {
        if(loendur < 3){
            loendur = loendur+1;
            list = $('li').get(loendur-1);
            $(list).removeClass("active");
            list = $('li').get(loendur);
            $(list).addClass("active");
        }else{
            loendur = 0;
            list = $('li').last();
            $(list).removeClass("active");
            list = $('li').get(loendur);
            $(list).addClass("active");
        }
    });

    $( '#prev' ).click(function() {
        if(loendur > 0){
            loendur = loendur-1;
            list = $('li').get(loendur+1);
            $(list).removeClass("active");
            list = $('li').get(loendur);
            $(list).addClass("active");
        }else{
            loendur = 3;
            list = $('li').first();
            $(list).removeClass("active");
            list = $('li').get(loendur);
            $(list).addClass("active");
        }
    });

}
