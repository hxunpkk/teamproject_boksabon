(function ($) {

    setTimeout(function () {
        $(".introClone").fadeOut(1000);
    }, 8000);

    let content = "";
    content = "어디로 떠날까?                 ";
    

    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)
    
    $('.search_form').on('click', function () {
        $('.text_box').addClass('on');
        $('#data1').css('opacity', 1)
    })
    $('.back_form').on('click', function () {
        $('.text_box').removeClass('on');
        $('#data1').css('opacity', 0)
    })
    $('.search_form').on('submit', function () {
        $(".articleModal").addClass('on');
        $("#cover").addClass('on');
        if($("#data1").val().length > 0){
            content = $("#data1").val() + " " + "GO! GO!                   "
        } 
    })
    
    
    // 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
    $('body').on('click', '.button', function () {
        $('.modal1').css('opacity', '0')
        $('.modal1').css('z-index', '0')
        $('.modal2').css('opacity', '0')
        $('.modal2').css('z-index', '0')
        $('.modal3').css('opacity', '0')
        $('.modal3').css('z-index', '0')
        $('.modal4').css('opacity', '0')
        $('.modal4').css('z-index', '0')
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

    })

    // 모달창의 링크걸린 이미지를 클릭했을때 모달창 닫히는것 막기   
    $('body').on('click', '.back_form', function (e) {
        $('.modal1').css('opacity', '0')
        $('.modal1').css('z-index', '0')
        $('.modal2').css('opacity', '0')
        $('.modal2').css('z-index', '0')
        $('.modal3').css('opacity', '0')
        $('.modal3').css('z-index', '0')
        $('.modal4').css('opacity', '0')
        $('.modal4').css('z-index', '0')
    })


})(jQuery);