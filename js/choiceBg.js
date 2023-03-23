const choiceBg = (type) => {
    if (type == 1) {
        $('body').css("background", "url(./img/bg/clearbg.jpg) no-repeat center/cover fixed")
    } else if (type == 2) {
        $('body').css("background", "url(./img/bg/cloudbg.jpg) no-repeat center/cover fixed")
    } else {
        $('body').css("background", "url(./img/bg/rainybg.jpg) no-repeat center/cover fixed")
    }
}

export default choiceBg;