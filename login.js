//登录切换、、、、、、、
var hds=document.getElementById('hd').getElementsByTagName('li');
var divs=document.getElementById('con').getElementsByTagName('div');
for(var i=0;i<hds.length;i++){
    hds[i].id=i;

    hds[i].onclick=function () {
        for(var j=0;j<hds.length;j++){
            hds[j].className='';
            divs[j].style.display='none';
        }
        this.className='lTer';
       divs[this.id].style.display='block';
    }
}
//show 图片移动//mask刷新.................................
var show=document.getElementById('show');
var sJi=document.getElementById('sJi');
var mask=document.getElementById('mask');
var sX=document.getElementById('sX');
var lose;
var addH;
   show.onmouseover=function () {
       clearInterval(addH);
      lose= setInterval(function () {
           var h=show.style.left;
           var hl=parseInt(h);
           k=-10;
           if(hl>=30){
               show.style.left=(hl+k)+'px';
               mask.style.display='none';
           }
       },50);
       if(h1=30){
           sJi.style.visibility='visible';
       }

   }
show.onmouseout=function () {
    clearInterval(lose);
    addH=setInterval(function () {
        var h=show.style.left;
        var hl=parseInt(h);
        k=10;
        if(hl<100){
            show.style.left=(hl+k)+'px';
            sJi.style.visibility='hidden';
            }
    },70);
    setTimeout(function () {
        mask.style.display='block';
    },10000);
}
sX.onclick=function () {
    location.reload();
}
//登录///////////////////////////////////////////////////
var sub=document.getElementById('sub');
var myTab=document.getElementById('myTab');
sub.onclick=function () {
    myTab.action='register.html';
    myTab.method='post';
    myTab.submit();
}
/*。。。。。。。。。。。。背景切换。。。。。。。。。。。。。。。*/
var session=document.getElementById('session');
var imgAlls=['imglogin/bcg.jpg','imglogin/bcg1.png','imglogin/bcg2.jpg'];
var imgAll=document.getElementById('imgAll');
function sXh() {
        var x=parseInt(Math.random()*3);
        if(x==0){
            session.style.background='#F1C812';
            imgAll.src=imgAlls[0];
        }else if(x==1){
            session.style.background='#E83854';
            imgAll.src=imgAlls[1];
        }else  if(x==2){
            session.style.background='#0E0195';
            imgAll.src=imgAlls[2];
        }
}
sXh();
/*.................登录页面............*/
var fontS=document.getElementById('fontS');
var userName=document.getElementById('userName');
var pass=document.getElementById('pass');
var b=userName.value;
var c=pass.value;
var bCuo=document.getElementById('bCuo');
/*var d=['请输入用户名和密码','请输入用户名','请输入密码'];*/
function panduan() {
    if(userName.value=="" && pass.value==""){
        fontS.innerHTML='请输入用户名和密码';
        bCuo.style.visibility='visible'
    }else if(userName.value!='' && pass.value==""){
        fontS.innerHTML='请输入密码';
        bCuo.style.visibility='visible'
    } else if(userName.value=='' && pass.value!=""){
        fontS.innerHTML='请输入用户名';
        bCuo.style.visibility='visible'
    }else {
        bCuo.style.visibility='hidden';
    }
}











