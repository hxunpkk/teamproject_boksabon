
    const h = document.querySelector('#h');
    const b = document.body;
    
    let base = (e) => {
        var x = e.pageX / window.innerWidth - 0.5;
        var y = e.pageY / window.innerHeight - 0.5;
        h.style.transform = `
            perspective(90vw)
            rotateX(${y * 4 + 75}deg)
            rotateZ(${-x * 12 + 45}deg)
            translateZ(-9vw)
        `;
    }
    
    b.addEventListener('pointermove', base);
    
    $('.house .puerta_open').mouseover(function () {
        $('.stats').css({'opacity':'1', 'z-index':'9999'})
        $('.info').css({'opacity':'0'})
    })
    $('.house .puerta_open').mouseout(function () {
        $('.stats').css({'opacity':'0', 'z-index':'-1'})
        $('.info').css({'opacity':'1'})
    })

