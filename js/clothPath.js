
(function ($) {
    $('.slide_group').slick({
        slidesToShow: 2,
        arrows: false,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    })

    $('.box.sect1').on('click', function () {
        $('.oneModal.modalSanse').css('opacity', '1')
        $('.oneModal.modalSanse').css('z-index', '999999')
        $('.twoModal').css('opacity', '0')
        $('.threeModal').css('opacity', '0')
        $('.fourModal').css('opacity', '0')
        $('.modal1.modal').css('opacity', '1')
        $('.modal1.modal').css('z-index', '999999')
        $('.modal2').css('opacity', '0')
        $('.modal3').css('opacity', '0')
        $('.modal4').css('opacity', '0')
        return false;

    })
    $('.modalBackForm').on('click', function () {
        $('.modal1').css('opacity', '0')
        $('.modal1').css('z-index', '0')
        $('.modal2').css('opacity', '0')
        $('.modal2').css('z-index', '0')
        $('.modal3').css('opacity', '0')
        $('.modal3').css('z-index', '0')
        $('.modal4').css('opacity', '0')
        $('.modal4').css('z-index', '0')
        $('.home_btn3').css('opacity', '0')
        $('.home_btn3').css('z-index', '0')

    })


})(jQuery);