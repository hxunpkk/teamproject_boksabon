
(function ($) {
    const runframe = document.getElementById('iframe4')
    let leftTransition = "";
    let rightTransition = "";
    runframe.addEventListener('load', function () {
        leftTransition = this.contentDocument.querySelector('#list');
        rightTransition = this.contentDocument.querySelector('#top-outer');
    })
    $('.box.sect4').on('click', function () {
        $('.modal1').css('opacity', '0')
        $('.modal2').css('opacity', '0')
        $('.modal3').css('opacity', '0')
        $('.modal4.modal').css('opacity', '1')
        $('.modal4.modal').css('z-index', '999999')
        $('.oneModal').css('opacity', '0')
        $('.twoModal').css('opacity', '0')
        $('.threeModal').css('opacity', '0')
        $('.fourModal.modalSanse').css('opacity', '1')
        $('.fourModal.modalSanse').css('z-index', '999999')

        leftTransition.setAttribute('style', 'transform: translateX(0); height: 60vh; width: 50vw; transition:all 2s;')
        rightTransition.setAttribute('style', 'transform: translateX(0);transition:all 2s;')
        return false;

    })
    $('.home_btn3').on('click', function () {
        leftTransition.setAttribute('style', 'transform: translateX(-500px); height: 60vh; width: 50vw; transition:all 2s;')
        rightTransition.setAttribute('style', 'transform: translateX(500px); transition:all 2s;')
    });

})(jQuery);