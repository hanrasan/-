function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);// 0~23
    m = checkTime(m);
    s = checkTime(s);


    function lunchTime(){                
        document.body.style.backgroundImage = 'url(./img/background_01.gif)';
        document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time</p><p>${h}: ${m}: ${s}</p>`;
    }

    // 시간조건식 : 아침 점심 저녁, 평일 휴일
    if( h == 12 && m > 50 || h == 13 ){
        // 점심시간
        lunchTime();
    }else{
        document.body.style.backgroundImage = 'url(./img/background_02.jpg)';
        document.body.style.backgroundColor = '#67c7b2';
        document.getElementById('txt').innerHTML = `<p>${h}: ${m}: ${s}:</p>`;
    }

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        return '0' + i;
    }
    return i;
}