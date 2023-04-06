
(function($){
    $(window).on('load', season())
    function season() {
    
        let today = new Date()
        let month = today.getMonth()+1 
        // let month = 6

        // let local = ''

        if (3<=month && month<=5) {
            season = 'spring'
        } else if (6<=month && month<=8) {
            season = 'summer'
        } else if (9<=month && month<=11) {
            season = 'fall'
        } else if (12<=month || month<=2) {
            season = 'winter'
        }
        /* console.log(season) */
        // console.log(local)
        
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
    }
    // 버튼별 지역명을 클래스로 붙이기
    $('button#seoul').on('click', function(){
        $('#map button').removeClass()
        $('#map .outTitle').addClass('off')
        $('#contBox .inTitle').empty().append(`<i class="fa-solid fa-car-side"></i> 오늘은 <span>서울 근교</span>로 떠나볼까? <i class="fa-solid fa-car-side"></i>`)
        $(this).addClass('on')
        $('#contBox').removeClass('close busan gangwon daejeon gwangju jeju').addClass('seoul')
        
    })
    $('button#busan').on('click', function(){
        $('#map button').removeClass()
        $('#map .outTitle').addClass('off')
        $('#contBox .inTitle').empty().append(`<i class="fa-solid fa-car-side"></i> 오늘은 <span>부산 근교</span>로 떠나볼까? <i class="fa-solid fa-car-side"></i>`)
        $(this).addClass('on')
        $('#contBox').removeClass('close seoul gangwon daejeon gwangju jeju').addClass('busan')
    })
    $('button#gangwon').on('click', function(){
        $('#map button').removeClass()
        $('#map .outTitle').addClass('off')
        $('#contBox .inTitle').empty().append(`<i class="fa-solid fa-car-side"></i> 오늘은 <span>강원도</span>로 떠나볼까? <i class="fa-solid fa-car-side"></i>`)
        $(this).addClass('on')
        $('#contBox').removeClass('close seoul busan daejeon gwangju jeju').addClass('gangwon')
    })
    $('button#daejeon').on('click', function(){
        $('#map button').removeClass()
        $('#map .outTitle').addClass('off')
        $('#contBox .inTitle').empty().append(`<i class="fa-solid fa-car-side"></i> 오늘은 <span>대전 근교</span>로 떠나볼까? <i class="fa-solid fa-car-side"></i>`)
        $(this).addClass('on')
        $('#contBox').removeClass('close seoul busan gangwon gwangju jeju').addClass('daejeon')
    })
    $('button#gwangju').on('click', function(){
        $('#map button').removeClass()
        $('#map .outTitle').addClass('off')
        $('#contBox .inTitle').empty().append(`<i class="fa-solid fa-car-side"></i> 오늘은 <span>광주 근교</span>로 떠나볼까? <i class="fa-solid fa-car-side"></i>`)
        $(this).addClass('on')
        $('#contBox').removeClass('close seoul busan gangwon daejeon jeju').addClass('gwangju')
    })
    $('button#jeju').on('click', function(){
        $('#map button').removeClass()
        $('#map .outTitle').addClass('off')
        $('#contBox .inTitle').empty().append(`<i class="fa-solid fa-car-side"></i> 오늘은 <span>제주도</span>로 떠나볼까? <i class="fa-solid fa-car-side"></i>`)
        $(this).addClass('on')
        $('#contBox').removeClass('close seoul busan gangwon daejeon gwangju').addClass('jeju')
    })

    // 모바일창 닫기버튼
    $('button#close').on('click', function(){
        $('#contBox').removeClass('seoul busan gangwon daejeon gwangju jeju').addClass('close')
        $('button').removeClass('on')
        $('#map .outTitle').removeClass('off')
    })

    $('#contBox.close').on('click', function(){
        $('#contBox .inTitle').empty().append('<i class="fa-solid fa-car-side"></i> 오늘은 어디로 떠나볼까? <i class="fa-solid fa-car-side"></i>')
        
    })

    // 지도 3d로 움직이게 하기
    const frame = document.getElementById('map')
      const card = document.getElementById('map')
      const light = document.getElementById('map')

      let { x, y, width, height } = frame.getBoundingClientRect()

      function mouseMove(e) {
        const left = e.clientX - x
        const top = e.clientY - y
        const centerX = left - width / 2
        const centerY = top - height / 2
        const d = Math.sqrt(centerX**2 + centerY**2)

        card.style.transform = `
          rotate3d(
            ${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg
          )
        `
      }

      frame.addEventListener('mouseenter', () => {
        frame.addEventListener('mousemove', mouseMove)
      })

      frame.addEventListener('mouseleave', () => {
        frame.removeEventListener('mousemove', mouseMove)
        card.style.boxShadow = ''
        card.style.transform = ''
        light.style.backgroundImage = ''
      })

        
})(jQuery)


