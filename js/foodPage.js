(function ($) {
    $('.foodList li div').on('click', function(){
        if($('.foodList').hasClass("on") === false) {
            $('.foodList').addClass("on")
            $('.map_wrap').addClass("on")
        }
    })
})(jQuery);
