import dataArr from "./EnglishName.js";

let koreaAreaName = "";
(function ($) {

    $(window).on('load', season())
    function season() {
        
        let koreaAreaNameEng = "";
        let koreaAreaNameValue = [];
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

                    koreaAreaNameEng = ddArrctBc[0].eng.split(',')
                    koreaAreaNameValue = koreaAreaNameEng[0].toLowerCase()
                    // console.log(koreaAreaNameValue)
                    $('.modal3').remove()
                    $('body').append(`<div class="modal3 modal"></div>`)
                    $(".modal").prepend(`<div class="modalBackForm"></div>`)
                    $('.modal3').prepend(`<div class="imgbox threeModal modalSanse"></div>`)
                    $('.imgbox').prepend(`<a></a>`)

                    $('.threeModal').prepend(`
                    <iframe name="ifrm2" id="iframe2" src="/travel.html" style="width:100%; height:100%;"></iframe>`)
                    const runframe = document.getElementById('iframe2');
                    if (koreaAreaNameValue == 'seoul' || koreaAreaNameValue == 'incheon' || koreaAreaNameValue == 'yongin'
                        || koreaAreaNameValue == 'yeoju' || koreaAreaNameValue == 'yangju' || koreaAreaNameValue == 'uiwang'
                        || koreaAreaNameValue == 'uijeongbu-si' || koreaAreaNameValue == 'suwon' || koreaAreaNameValue == 'anyang-si'
                        || koreaAreaNameValue == 'ansan' || koreaAreaNameValue == 'anseong' || koreaAreaNameValue == 'dongducheon-si'
                        || koreaAreaNameValue == 'gimpo-si' || koreaAreaNameValue == 'goyang' || koreaAreaNameValue == 'gunpo'
                        || koreaAreaNameValue == 'siheung-si' || koreaAreaNameValue == 'seongnam' || koreaAreaNameValue == 'pyeongtaek'
                        || koreaAreaNameValue == 'pocheon-si' || koreaAreaNameValue == 'paju' || koreaAreaNameValue == 'osan'
                        || koreaAreaNameValue == 'namyangju' || koreaAreaNameValue == 'icheon-si' || koreaAreaNameValue == 'hwaseong'
                        || koreaAreaNameValue == 'hanam' || koreaAreaNameValue == 'gwangmyeong-si' || koreaAreaNameValue == 'gwacheon'
                        || koreaAreaNameValue == 'guri-si') {
                        let seoulVal = "seoul"
                        runframe.addEventListener('load', function () {
                            this.contentDocument.querySelector('button').classList.remove()
                            this.contentDocument.querySelector('button#' + `${seoulVal}`).classList.add('on');
                            this.contentDocument.querySelector('h2#seoul').classList.add('on');
                            this.contentDocument.getElementById('contBox').classList.add(`${seoulVal}`);
                        })
                    }
                    if (koreaAreaNameValue == 'gwangju' || koreaAreaNameValue == 'yeosu' || koreaAreaNameValue == 'iksan'
                        || koreaAreaNameValue == 'gimje' || koreaAreaNameValue == 'suncheon' || koreaAreaNameValue == 'mokpo'
                        || koreaAreaNameValue == 'namwon' || koreaAreaNameValue == 'jeonju' || koreaAreaNameValue == 'gwangyang'
                        || koreaAreaNameValue == 'gunsan') {
                        let areaVal = "gwangju"
                        runframe.addEventListener('load', function () {
                            this.contentDocument.querySelector('button').classList.remove()
                            this.contentDocument.querySelector('button#' + `${areaVal}`).classList.add('on');
                            this.contentDocument.querySelector('h2#gwangju').classList.add('on');
                            this.contentDocument.getElementById('contBox').classList.add(`${areaVal}`);
                        })
                    }
                    if (koreaAreaNameValue == 'busan' || koreaAreaNameValue == 'yeongju' || koreaAreaNameValue == 'yangsan'
                        || koreaAreaNameValue == 'daegu' || koreaAreaNameValue == 'ulsan' || koreaAreaNameValue == 'andong'
                        || koreaAreaNameValue == 'changwon' || koreaAreaNameValue == 'gumi' || koreaAreaNameValue == 'himhae'
                        || koreaAreaNameValue == 'gimcheon' || koreaAreaNameValue == 'sangju' || koreaAreaNameValue == 'sacheon'
                        || koreaAreaNameValue == 'pohang' || koreaAreaNameValue == 'mungyeong' || koreaAreaNameValue == 'miryang'
                        || koreaAreaNameValue == 'jinju' || koreaAreaNameValue == 'gyeongsan' || koreaAreaNameValue == 'hyeongju') {
                        let areaVal = "busan"
                        runframe.addEventListener('load', function () {
                            this.contentDocument.querySelector('button').classList.remove()
                            this.contentDocument.querySelector('button#' + `${areaVal}`).classList.add('on');
                            this.contentDocument.querySelector('h2#busan').classList.add('on');
                            this.contentDocument.getElementById('contBox').classList.add(`${areaVal}`);
                        })
                    }
                    if (koreaAreaNameValue == 'jeju') {
                        let areaVal = "jeju"
                        runframe.addEventListener('load', function () {
                            this.contentDocument.querySelector('button').classList.remove()
                            this.contentDocument.querySelector('button#' + `${areaVal}`).classList.add('on');
                            this.contentDocument.querySelector('h2#jeju').classList.add('on');
                            this.contentDocument.getElementById('contBox').classList.add(`${areaVal}`);
                        })
                    }
                    if (koreaAreaNameValue == 'wonju' || koreaAreaNameValue == 'taebaek' || koreaAreaNameValue == 'chuncheon'
                        || koreaAreaNameValue == 'gangneung' || koreaAreaNameValue == 'sokcho' || koreaAreaNameValue == 'sancheok') {
                        let areaVal = "gangwon"
                        runframe.addEventListener('load', function () {
                            this.contentDocument.querySelector('button').classList.remove()
                            this.contentDocument.querySelector('button#' + `${areaVal}`).classList.add('on');
                            this.contentDocument.querySelector('h2#gangwon').classList.add('on');
                            this.contentDocument.getElementById('contBox').classList.add(`${areaVal}`);
                        })
                    }
                    if (koreaAreaNameValue == 'daejeon' || koreaAreaNameValue == 'asan' || koreaAreaNameValue == 'sejong'
                        || koreaAreaNameValue == 'cheongju' || koreaAreaNameValue == 'chungju' || koreaAreaNameValue == 'boryeong'
                        || koreaAreaNameValue == 'gongju' || koreaAreaNameValue == 'seosan' || koreaAreaNameValue == 'nonsan'
                        || koreaAreaNameValue == 'jecheon' || koreaAreaNameValue == 'gyeryong-si') {
                        let areaVal = "daejeon"
                        runframe.addEventListener('load', function () {
                            this.contentDocument.querySelector('button').classList.remove()
                            this.contentDocument.querySelector('button#' + `${areaVal}`).classList.add('on');
                            this.contentDocument.querySelector('h2#daejeon').classList.add('on');
                            this.contentDocument.getElementById('contBox').classList.add(`${areaVal}`);
                        })
                    }
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
                    $('.modal3').css('opacity', '0')
                    $('.threeModal').css('opacity', '0')


                }
            })
        }

        // ajax에서 보낸 값(한글)을 영어로 바꿔주는 폼


        let today = new Date()
        let month = today.getMonth() + 1
        // let month = 6

        // let local = ''

        if (3 <= month && month <= 5) {
            season = 'spring'
        } else if (6 <= month && month <= 8) {
            season = 'summer'
        } else if (9 <= month && month <= 11) {
            season = 'fall'
        } else if (12 <= month || month <= 2) {
            season = 'winter'
        }
        // console.log(season)
        // console.log(local)
        // console.log(koreaAreaNameValue)

        /* $('button#seoul').addClass('on') */
        // 버튼별 지역명을 클래스로 붙이기
        $('button#seoul').on('click', function () {
            $('button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('busan gangwon daejeon gwangju jeju').addClass('seoul')
        })
        $('button#busan').on('click', function () {
            $('button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('seoul gangwon daejeon gwangju jeju').addClass('busan')
        })
        $('button#gangwon').on('click', function () {
            $('button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('seoul busan daejeon gwangju jeju').addClass('gangwon')
        })
        $('button#daejeon').on('click', function () {
            $('button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('seoul busan gangwon gwangju jeju').addClass('daejeon')
        })
        $('button#gwangju').on('click', function () {
            $('button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('seoul busan gangwon daejeon jeju').addClass('gwangju')
        })
        $('button#jeju').on('click', function () {
            $('button').removeClass()
            $(this).addClass('on')
            $('#contBox').removeClass('seoul busan gangwon daejeon gwangju').addClass('jeju')
        })

        // 월별 계절 변경
        if (season == 'spring') {
            $('#contBox').addClass('spring')
        } else if (season == 'summer') {
            $('#contBox').addClass('summer')
        } else if (season == 'fall') {
            $('#contBox').addClass('fall')
        } else if (season == 'winter') {
            $('#contBox').addClass('winter')
        }



        $('.box.sect3').on('click', function () {
            $('.modal1').css('opacity', '0')
            $('.modal2').css('opacity', '0')
            $('.modal3').css('opacity', '1')
            $('.modal3').css('z-index', '999999')
            $('.modal4').css('opacity', '0')
            $('.oneModal').css('opacity', '0')
            $('.twoModal').css('opacity', '0')
            $('.threeModal').css('opacity', '1')
            $('.threeModal').css('z-index', '999999')
            $('.fourModal').css('opacity', '0')

            return false

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

        weatherApi("Seoul,KR");
		let inputDataVal = ''
		let ddArrct = ''
		$("form").on("submit", function () {
			// inputDataVal = $('#data1').val('서울');

			inputDataVal = $("#data1").val();
			ddArrct = dataArr.filter((value) => {
				return value.kor === inputDataVal;
			});
			if(inputDataVal === '') {
				weatherApi("Seoul,KR");
			}else{
				
				weatherApi(ddArrct[0].eng);
			}
			
			return false;
		});
		

    }



})(jQuery)