var ava = document.getElementById('ava');
var music = document.getElementById('music');
var now;
var left = document.getElementById('lleft');
var right = document.getElementById('rright');
var dep = 0;
var btn = document.getElementById('btn');
function getTime() {
    now = music.currentTime;
    dep = Number(((now / 263.0) * 360)).toFixed(0);
    if (dep <= 180) {
        right.style.transform = `rotate(${dep}deg)`;
        left.style.transform = `rotate(0)`;
    }
    else {
        left.style.transform = `rotate(${dep - 180}deg)`;
        right.style.transform = `rotate(180px)`;
    }
}
btn.onclick = music.onclick;
if (music != null) {
    btn.style.display = "block";
    ava.onclick = function () {
        if (music.paused) {
            music.play();
            btn.className = "iconfont icon-pause";
            ava.src = "../images/reashal.gif";
            setInterval(function () { getTime() }, 500);
        }
        else {
            music.pause();
            btn.className = "iconfont icon-play";
            ava.src = "../images/reashal.png";
        }
    }
}