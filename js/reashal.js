// 指针聚焦头像,换动图
var x= document.getElementById('avator');
var y= document.getElementById('ava');
x.onmousemove=function(){
  y.src='https://images.reashal.com/resources/avator/dyAva.gif';
}
x.onmouseout=function(){
  y.src='https://images.reashal.com/resources/avator/reashal.png';
}
// 单击头像开始/暂停背景音乐
var music=document.getElementById('music');
x.onclick=function(){
  if(music.paused){
    music.play();
  }
  else{
    music.pause();
  }
}