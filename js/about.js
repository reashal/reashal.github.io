var abo=document.getElementById("abo")
var reashal=document.getElementById("reashal")
var aboutme=document.getElementById("aboutme")
abo.onclick=function(){
    if(abo.className==="iconfont icon-pencil"){
        abo.className="iconfont icon-homefill"
        abo.title='Home'
        reashal.style.display='none'
        aboutme.style.display='block'
    }
    else{
        abo.className="iconfont icon-pencil"
        abo.title='About'
        aboutme.style.display='none'
        reashal.style.display='block'
    }
}