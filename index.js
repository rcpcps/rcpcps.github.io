var wa = document.getElementById("wa");
var mp3 = document.getElementById('mp3')
var t = 0
var mar = document.getElementById('mar')
function getTodayDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줌
    var day = today.getDate();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    // 날짜를 문자열로 조합하여 반환
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
}

function play() {
    wa.innerText = '와!'
    mp3.play();
}

function marqueeSpeed(speed) {
    var marquee = document.getElementById("mar");
    marquee.setAttribute("scrollamount", speed);
}
function toggle() {
    var currentDirection = mar.getAttribute("direction");
    var newDirection = (currentDirection === "left") ? "right" : "left";
    mar.setAttribute("direction", newDirection);
}

function update() {
    wa.innerHTML = getTodayDate();
    marqueeSpeed(t/5)
    t += 1;
    
   
}
function update2() {
}

// 페이지 로드 시 실행되는 함수
window.onload = function() {
    mar.setAttribute('behavior', 'alternate')
    update();
    setInterval(update, 10); // 1초마다 updateClock 함수 실행
};


