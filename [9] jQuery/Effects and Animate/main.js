$(document).ready(function(){ 
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000, function()
        {
           $('#btnFadeOut').text('Its gone'); 
        });
        // fadeOut(fast);
        // fadeOut(slow);
        // fadeOut(3000); //ms
    });

    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(3000);
    });

    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(3000);
    });


    $('#btnSlideDown').click(function(){
        $('#box').slideDown(3000);
    });

    $('#btnSlideUp').click(function(){
        $('#box').slideUp(3000);
    });

    $('#btnSlideToggle').click(function(){
        $('#box').slideToggle(3000);
    });

    $('#btnStop').click(function(){
        $('#box').stop();
    });

    $('#moveRight').click(function(){
        $('#box2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '0.5'
        });
    });

    $('#moveLeft').click(function(){
        $('#box2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '1'
        });
    });

    $('#moveAround').click(function(){
        let box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left: 0,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    });
});