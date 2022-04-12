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
  x.src = 'https://images.reashal.com/resources/avator/dyAva.gif';
}