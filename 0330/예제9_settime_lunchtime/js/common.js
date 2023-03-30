function startTime() {
    const today = new Date();
    // 0 ~ 23
    let h = today.getHours();
    // 0 ~ 59
    let m = today.getMinutes();
    let s = today.getSeconds();
    console.log(`${h}시 ${m}분 ${s}초`);
    setTimeout(startTime, 500);
    h = zeroCheck(h);
    m = zeroCheck(m);
    s = zeroCheck(s);

    function lunchTime(){
        document.body.style.backgroundImage = 'url(./img/background_01.gif)';
        document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time<br>${h}:${m}:${s}</p>`;
    }

    // 시간조건식 : 아침 점심 저녁, 평일 휴일
    if( h == 12 && m > 50 || h < 14 ){
        // 점심시간
        lunchTime();
        // document.getElementById('txt').innerHTML = `${h}시 ${m}분 ${s}초`;
    } else {
        document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
        document.body.style.backgroundImage = 'url(./img/background_02.jpg)';
        document.body.style.backgroundColor = '#67c7b2';
    }

}

function zeroCheck(time) {
    if (time < 10) {
        return time = '0' + time;
    } else {
        return time;
    }
}