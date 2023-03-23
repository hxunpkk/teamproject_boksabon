const makeCody = (type) => {
    let codyList = ""
    codyList += `<ul><li>`
    if (type == 1) {
        codyList += `<div class="text">반팔셔츠</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/shirts1.svg" alt=""></div>`
        codyList += `</li><li>`
        codyList += `<div class="text">반바지</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/pants3.svg" alt=""></div>`
        codyList += `</li><li>`
        codyList += `<div class="text">블라우스</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/set1.svg" alt=""></div>`
        codyList += `</li>`
        codyList += `<li><div class="text">모자</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/hat.svg" alt=""></div>`
        codyList += `</li></ul>`
        codyList += `<div id=tips> <span>tips</span> 자외선 차단을 위한 선크림을 구비하세요.</div>`
        codyList += `<div id=tips> <span>tips</span> 수분을 많이 섭취하여 주세요.</div>`
    } else if (type == 2) {
        codyList += `<div class="text">긴팔셔츠</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/shirts5.svg" alt=""></div>`
        codyList += `</li><li>`
        codyList += `<div class="text">청바지</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/pants2.svg" alt=""></div>`
        codyList += `</li><li>`
        codyList += `<div class="text">블라우스</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/set2.svg" alt=""></div>`
        codyList += `</li>`
        codyList += `<li><div class="text">우산</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/umbrella.jpg" alt=""></div>`
        codyList += `</li></ul>`
        codyList += `<div id=tips> <span>tips</span> 얇은 아웃도어를 구비하면 좋습니다.</div>`
        codyList += `<div id=tips> <span>tips</span> 일교차로 인한 감기를 주의하세요.</div>`

    } else if (type == 3) {
        codyList += `<div class="text">아우터</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/outer3.svg" alt=""></div>`
        codyList += `</li><li>`
        codyList += `<div class="text">바지</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/pants1.svg" alt=""></div>`
        codyList += `</li><li>`
        codyList += `<div class="text">코트</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/coat1.png" alt=""></div>`
        codyList += `</li>`
        codyList += `<li><div class="text">우산</div>`
        codyList += `<div class="clothes"><img src="./img/clothes/umbrella.jpg" alt=""></div>`
        codyList += `</li></ul>`
        codyList += `<div id=tips> <span>tips</span> 추위를 대비하여 아웃도어를 준비하세요.</div>`
        codyList += `<div id=tips> <span>tips</span> 장기간 외출은 삼가하세요.</div>`
    } 
    $('.wrap').append(codyList)
}

export default makeCody;

