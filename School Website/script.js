$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.links').addClass("sticky");
        }else{
            $('.links').removeClass("sticky");
        }
    });

    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});