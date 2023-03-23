import dataArr from "./EnglishName.js";


(function ($) {

    let koreaAreaName = "";

    const weatherApi = (area) => {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?country=KR&name=Republic of Korea&id=1835841&state=&lang=KR&appid=d5948ec3ace590812f0049bbdb822c43&units=metric",
            dataType: "json",
            data: { q: area },
            type: "GET",
            async: "false",
            success: function (resp) {
                // 한글 영어로 변환 기능
                let ddArrctBc = dataArr.filter((value) => {
                    return value.eng === area
                })

                koreaAreaName = ddArrctBc[0].kor;
                $('.modal2').remove()
                $('body').append(`<div class="modal2 modal"></div>`)
                $(".modal").prepend(`<div class="modalBackForm"></div>`)                 
                $('.modal2').prepend(`<div class="twoModal modalSanse"></div>`)
                $('.twoModal').prepend(`<a></a>`)
                $('.twoModal a').after(`<button type="button" class="button">닫기</button>`)
                $('.twoModal').prepend(`
                            <iframe name="ifrm" id="iframe" src="/foodPage.html" style="width:100%; height:100%; opacity:1;"></iframe>`)

                const runframe = document.getElementById('iframe')
                runframe.addEventListener('load', function () {
                    this.contentDocument.querySelector('#keyword').setAttribute('value', koreaAreaName)
                })
                $('.modal2').css('opacity', '0')
                $('.twoModal').css('opacity', '0')
            }
        })
    }


    // 지역에 따른 음식 추천 ( 지역이름을 보내서 데이터를 모달창에 띄울거임 )
    $('.box.sect2').on('click', function () {
        $('.modal1').css('opacity', '0')
        $('.modal2').css('opacity', '1')
        $('.modal2').css('z-index', '2000')
        $('.modal3').css('opacity', '0')
        $('.modal4').css('opacity', '0')
        $('.oneModal').css('opacity', '0')
        $('.twoModal').css('opacity', '1')
        $('.twoModal').css('z-index', '2000')
        $('.threeModal').css('opacity', '0')
        $('.fourModal').css('opacity', '0')
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

    })
    // ajax에서 보낸 값(한글)을 영어로 바꿔주는 폼
    $('form').on('submit', function () {
        // inputDataVal = $('#data1').val('서울');
        var inputDataVal = $('#data1').val();
        let ddArrct = dataArr.filter((value) => {
            return value.kor === inputDataVal
        })

        weatherApi(ddArrct[0].eng);
        return false
    })
    weatherApi('Seoul,KR')

})(jQuery);
