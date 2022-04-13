var x = document.getElementById('ava');
// 单击头像开始/暂停背景音乐
var music = document.getElementById('music');
x.onclick = function () {
  if (music.paused) {
    music.play();
  }
  else {
    music.pause();
  }
}
//播放音乐旋转头像
music.onplay = function () {
  x.src = '../images/dyAva.gif';
  x.title = '点击暂停背景音乐';
}
//暂停音乐停止旋转头像
music.onpause = function () {
  x.src = '../images/reashal.png';
  x.title = '点击开启背景音乐';
}