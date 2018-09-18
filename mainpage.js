var tits=document.getElementById('pos').getElementsByTagName('td');
var place=document.getElementById('place');
var sap1=document.getElementById('sap1');
var mD=document.getElementById('mD');
var pos=document.getElementById('pos');
for(var i=0;i<tits.length;i++){
    tits[i].id=i;
    tits[i].onclick=function () {
        for(var j=0;j<tits.length;j++)
        {
            tits[j].className='';
        }
        this.className='select';
        var old_cotent=this.innerHTML;//下
        var old_cotent2=sap1.innerHTML;//上   把下面的值传到上面去
        var new_content2=old_cotent;
        sap1.innerHTML=new_content2;
    }
}
mD.onmouseover=function () {
    place.style.backgroundColor='white';
}
mD.onmouseout=function () {
    place.style.backgroundColor='#f2f2f2';
}
pos.onmouseover=function () {
    place.style.backgroundColor='white';
}
pos.onmouseout=function () {
    place.style.backgroundColor='#f2f2f2';
}
//main1///////////////////////////////////////////
var nav1=document.getElementById('nav1');
var sap3=document.getElementById('sap3');
var dD=document.getElementById('dD');
nav1.onmouseover=function () {
    var old_text=sap3.innerHTML;
    var new_text='︿';
    sap3.innerHTML=new_text;
    nav1.style.backgroundColor='white';
}
nav1.onmouseout=function () {
    var old_text=sap3.innerHTML;
    var new_text='﹀';
    sap3.innerHTML=new_text;
    nav1.style.backgroundColor='#f2f2f2';
}
dD.onmouseover=function () {
    var old_text=sap3.innerHTML;
    var new_text='︿';
    sap3.innerHTML=new_text;
    nav1.style.backgroundColor='white';
}
dD.onmouseout=function () {
    var old_text=sap3.innerHTML;
    var new_text='﹀';
    sap3.innerHTML=new_text;
    nav1.style.backgroundColor='#f2f2f2';
}
//main4////////////////////
var nav4=document.getElementById('nav4');
var sap6=document.getElementById('sap6');
var dD4=document.getElementById('dD4');
nav4.onmouseover=function () {
    var old_text=sap6.innerHTML;
    var new_text='︿';
    sap6.innerHTML=new_text;
    nav4.style.backgroundColor='white';
}
nav4.onmouseout=function () {
    var old_text=sap6.innerHTML;
    var new_text='﹀';
    sap6.innerHTML=new_text;
    nav4.style.backgroundColor='#f2f2f2';
}
dD4.onmouseover=function () {
    var old_text=sap6.innerHTML;
    var new_text='︿';
    sap6.innerHTML=new_text;
    nav4.style.backgroundColor='white';
}
dD4.onmouseout=function () {
    var old_text=sap6.innerHTML;
    var new_text='﹀';
    sap6.innerHTML=new_text;
    nav4.style.backgroundColor='#f2f2f2';
}
//main5/////////////////////
var nav5=document.getElementById('nav5');
var sap7=document.getElementById('sap7');
var dD5=document.getElementById('dD5');
nav5.onmouseover=function () {
    var old_text=sap7.innerHTML;
    var new_text='︿';
    sap7.innerHTML=new_text;
    nav5.style.backgroundColor='white';
}
nav5.onmouseout=function () {
    var old_text=sap7.innerHTML;
    var new_text='﹀';
    sap7.innerHTML=new_text;
    nav5.style.backgroundColor='#f2f2f2';
}
dD5.onmouseover=function () {
    var old_text=sap7.innerHTML;
    var new_text='︿';
    sap7.innerHTML=new_text;
    nav5.style.backgroundColor='white';
}
dD5.onmouseout=function () {
    var old_text=sap7.innerHTML;
    var new_text='﹀';
    sap7.innerHTML=new_text;
    nav5.style.backgroundColor='#f2f2f2';
}
/*空格填充*/
var sap8=document.getElementById('sap8');
var sap9=document.getElementById('sap9');
var sap10=document.getElementById('sap10');
var sap11=document.getElementById('sap11');
var sap12=document.getElementById('sap12');
sap8.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
sap9.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
sap10.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
sap11.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
sap12.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
/*ad开始......................................*/
var ad=document.getElementById('ad');
var wrong=document.getElementById('wrong');

wrong.onclick=function () {
    ad.style.opacity='0.8';
    ad.style.transition='opacity 1s';
    setTimeout(function () {
        ad.style.display='none';
    },800)
}
//toolBar开始》》》》》》》》》》》》》》》》》》.。。。。。。。。。。。。。。。。。。。。。。。。
/*第一个*/
var allNum=document.getElementById("allNum");
var user_num=document.getElementById('user_num');
var sat;
var over;
var wth;
allNum.onmouseover=function () {
    setTimeout(function () {
        clearInterval(over);
        sat=setInterval(function () {
            wth=parseInt(user_num.style.width);
            if(wth<75){
                user_num.style.width=(wth+15)+'px';
            }
        },50)
    },100)
}
allNum.onmouseout=function () {
        setTimeout(function () {
            clearInterval(sat);
            over=setInterval(function (){
                wth=parseInt(user_num.style.width);
                if(wth>0){
                    user_num.style.width=(wth-15)+'px';
                }
            },50)
        },100)
}
/*第二个............................................*/
var allNum2=document.getElementById("allNum2");
var user_num2=document.getElementById('user_num2');
var sat2;
var stop2;
var w2;

allNum2.onmouseover=function () {
    setTimeout(function () {
        clearInterval(stop2);
        sat2=setInterval(function () {
            w2=parseInt(user_num2.style.width);
            if(w2<75){
                user_num2.style.width=(w2+15)+'px';
            }
        },50)
    },100)
}
allNum2.onmouseout=function () {

    setTimeout(function () {
        clearInterval(sat2);
        stop2=setInterval(function (){
            w2=parseInt(user_num2.style.width);
            if(w2>0){
                user_num2.style.width=(w2-15)+'px';
            }
        },50)
    },100)
}
/*第三个、、、、、、、、、、、、、、、、、、、、、、、、、、、、、*/
var allNum3=document.getElementById("allNum3");
var user_num3=document.getElementById('user_num3');
var sat3;
var stop3;
var w3;

allNum3.onmouseover=function () {
    setTimeout(function () {
        clearInterval(stop3);
        sat3=setInterval(function () {
            w3=parseInt(user_num3.style.width);
            if(w3<75){
                user_num3.style.width=(w3+15)+'px';
            }
        },50)
    },100)
}
allNum3.onmouseout=function () {
    setTimeout(function () {
        clearInterval(sat3);
        stop3=setInterval(function (){
            w3=parseInt(user_num3.style.width);
            if(w3>0){
                user_num3.style.width=(w3-15)+'px';
            }
        },50)
    },100)
}
/*第四个、、、、、、、、、、、、、、、、、、、、、、、、、、、、、*/
var allNum4=document.getElementById("allNum4");
var user_num4=document.getElementById('user_num4');
var sat4;
var stop4;
var w4;

allNum4.onmouseover=function () {
    setTimeout(function () {
        clearInterval(stop4);
        sat4=setInterval(function () {
            w4=parseInt(user_num4.style.width);
            if(w4<75){
                user_num4.style.width=(w4+15)+'px';
            }
        },50)
    },100)
}
allNum4.onmouseout=function () {
    setTimeout(function () {
        clearInterval(sat4);
        stop4=setInterval(function (){
            w4=parseInt(user_num4.style.width);
            if(w4>0){
                user_num4.style.width=(w4-15)+'px';
            }
        },50)
    },100)
}

/*第五个、、、、、、、、、、、、、、、、、、、、、、、、、、、、、*/
var allNum5=document.getElementById("allNum5");
var user_num5=document.getElementById('user_num5');
var sat5;
var stop5;
var w5;

allNum5.onmouseover=function () {
    setTimeout(function () {
        clearInterval(stop5);
        sat5=setInterval(function () {
            w5=parseInt(user_num5.style.width);
            if(w5<75){
                user_num5.style.width=(w5+15)+'px';
            }
        },50)
    },100)
}
allNum5.onmouseout=function () {
    setTimeout(function () {
        clearInterval(sat5);
        stop5=setInterval(function (){
            w5=parseInt(user_num5.style.width);
            if(w5>0){
                user_num5.style.width=(w5-15)+'px';
            }
        },50)
    },100)
}
/*第六个、、、、、、、、、、、、、、、、、、、、、、、、、、、、、*/
var allNum6=document.getElementById("allNum6");
var user_num6=document.getElementById('user_num6');
var sat6;
var stop6;
var w6;

allNum6.onmouseover=function () {
    setTimeout(function () {
        clearInterval(stop6);
        sat6=setInterval(function () {
            w6=parseInt(user_num6.style.width);
            if(w6<75){
                user_num6.style.width=(w6+15)+'px';
            }
        },50)
    },100)
}
allNum6.onmouseout=function () {
    setTimeout(function () {
        clearInterval(sat6);
        stop6=setInterval(function (){
            w6=parseInt(user_num6.style.width);
            if(w6>0){
                user_num6.style.width=(w6-15)+'px';
            }
        },50)
    },100)
}
/*第七个、、、、、、、、、、、、、、、、、、、、、、、、、、、、、*/
var allNum7=document.getElementById("allNum7");
var user_num7=document.getElementById('user_num7');
var sat7;
var stop7;
var w7;

allNum7.onmouseover=function () {
    setTimeout(function () {
        clearInterval(stop7);
        sat7=setInterval(function () {
            w7=parseInt(user_num7.style.width);
            if(w7<75){
                user_num7.style.width=(w7+15)+'px';
            }
        },50)
    },100)
}
allNum7.onmouseout=function () {
    setTimeout(function () {
        clearInterval(sat7);
        stop7=setInterval(function (){
            w7=parseInt(user_num7.style.width);
            if(w7>0){
                user_num7.style.width=(w7-15)+'px';
            }
        },50)
    },100)
}
/*第八个、、、、、、、、、、、、、、、、、、、、、、、、、、、、、*/
var allNum8=document.getElementById("allNum8");
var user_num8=document.getElementById('user_num8');
var sat8;
var stop8;
var w8;

allNum8.onmouseover=function () {
    setTimeout(function () {
        clearInterval(stop8);
        sat8=setInterval(function () {
            w8=parseInt(user_num8.style.width);
            if(w8<75){
                user_num8.style.width=(w8+15)+'px';
            }
        },50)
    },100)
}
allNum8.onmouseout=function () {
    setTimeout(function () {
        clearInterval(sat8);
        stop8=setInterval(function (){
            w8=parseInt(user_num8.style.width);
            if(w8>0){
                user_num8.style.width=(w8-15)+'px';
            }
        },50)
    },100)
}
/*轮播图js、、、、、、、、、、、、、、、、、、、、、、、、、、、、*/
var wrap = document.getElementById('wrap');
var pic = document.getElementById('pic').getElementsByTagName("li");
var list = document.getElementById('list').getElementsByTagName('li');
var spaimg=document.getElementById('spaimg');
var spaimg2=document.getElementById('spaimg2');
var index = 0;
var lose=null;
var timer = null;

//定义点击切换
function oclk1() {
    index--;
    if (index <0) {
        index=pic.length-1;
    }
    changePic(index);
    clearTimeout(lose);
}
function oclk2() {
    index++;
    if (index >= pic.length) {
        index = 0;
    }
    changePic(index);
    clearTimeout(lose);
}
//点击调用
spaimg.onclick=function () {
    oclk1();
}
spaimg2.onclick=function () {
    oclk2();
}
//隐藏
spaimg.style.display='none';
spaimg2.style.display='none';
// 定义并调用自动播放函数
timer=setInterval(autoPlay,3000);
// 鼠标划过整个容器时停止自动播放
wrap.onmouseover = function () {
    clearInterval(timer);
    clearTimeout(lose);
    spaimg.style.display='block';
    spaimg2.style.display='block';
}

// 鼠标离开整个容器时继续播放至下一张
wrap.onmouseout = function () {
    timer=setInterval(autoPlay,3000);
    spaimg.style.display='none';
    spaimg2.style.display='none';
}
// 遍历所有数字导航实现划过切换至对应的图片
for(var i=0;i<list.length;i++){
    list[i].id=i;
    list[i].onmouseover=function () {
        index=this.id;
        changePic(index);
    }
}
function autoPlay() {
    index++;
    if (index >= pic.length) {
        index = 0;
    }
    changePic(index);
}
// 定义图片切换函数
function changePic(curIndex) {
    for (var j = 0; j < pic.length; j++) {
        pic[j].style.opacity = 1;
        pic[j].style.display = 'none';
        list[j].className = '';
    }
    list[index].className = 'on';
    pic[index].style.display = 'block';
  /*  lose = setTimeout(function () {
        pic[index].style.opacity = 0.5;
    }, 2800)*/
}

/*lunhuan//////////////////////////////*/
var lh=document.getElementById('lunhuan').getElementsByTagName('a');
var adAs=document.getElementById('adA').getElementsByTagName('div');
for(var i=0;i<lh.length;i++){
    lh[i].id=i;
    lh[i].onmouseover=function () {
        for(var j=0;j<lh.length;j++){
            lh[j].className='';
            adAs[j].style.display='none';
        }
        this.className='select';
        adAs[this.id].style.display='block';
    }
}
/*倒计时。。。。。。。。。。。。。。。。。。。。*/
showTime();
function cTime(i) {
    if(i<10){
        return "0" + i;
    }else {
        return i;
    }
}
function showTime() {
    var hours=document.getElementById('hours');
    var mits=document.getElementById('mits');
    var sec=document.getElementById('sec');
    var endtime=new Date("2017/8/22,23:30:30")//结束时间
    var nowtime=new Date();//当前时间
    var lefttime=parseInt((endtime.getTime()- nowtime.getTime())/1000);//获取秒
   /* var d=parseInt(lefttime/(24*60*60));//获取天*/
    var h=parseInt(lefttime/(60*60)%24);//获取时
    var m=parseInt(lefttime/60%60);//获取分
    var s=parseInt(lefttime%60);//获取秒
    h=cTime(h);
    m=cTime(m);
    s=cTime(s);
    hours.innerHTML=h;
    mits.innerHTML=m;
    sec.innerHTML=s;
    setTimeout(showTime,1000);
}

/*图片移动*/
var clko=document.getElementById('clko');
var clko2=document.getElementById('clko2');
var allimgs=document.getElementById('allimgs');
var prodts=document.getElementById('prodts');
var l=1000;
var w;
/*点击向左*/
clko.onclick=function () {
    changeL();
}
/*点击向右*/
clko2.onclick=function () {
    changeL2();
}

clko.style.display='none';
clko2.style.display='none';
prodts.onmouseover=function () {
    clko.style.display='block';
    clko2.style.display='block';
}
prodts.onmouseout=function () {
    clko.style.display='none';
    clko2.style.display='none';
}
/*function changeL() {
    setTimeout(function () {
        setInterval(function () {
            w=parseInt(allimgs.style.left);
            w=w-l;
            if(w==-4000){
                w=0;
            }
            gD();
            allimgs.style.left=w+'px';
        },2000)
    },100)

}*/
function changeL() {
    w=parseInt(allimgs.style.left);
    w=w-l;
    if(w<-4000){
        w=-1000;
        allimgs.style.left=w+'px';
        allimgs.style.transition='all 0s linear';
    }else {
        allimgs.style.left=w+'px';
        allimgs.style.transition='all 1s linear';
    }

}
function changeL2() {
    w=parseInt(allimgs.style.left);
    w=w+l;
    if(w>-1000){
        w=-4000;
        allimgs.style.left=w+'px';
        allimgs.style.transition='all 0s linear';
    }else{
        allimgs.style.left=w+'px';
        allimgs.style.transition='all 1s linear';
    }
}
/*小轮播*/
var xiaoLb = document.getElementById('xiaoLb');
var picq = document.getElementById('picq').getElementsByTagName("li");
var lB = document.getElementById('lB').getElementsByTagName('li');
var inde = 0;
var los=null;
var time = null;
// 定义并调用自动播放函数
time=setInterval(autoPlayr,2000);
// 鼠标划过整个容器时停止自动播放
xiaoLb.onmouseover = function () {
    clearInterval(time);
    clearTimeout(los);
}

// 鼠标离开整个容器时继续播放至下一张
xiaoLb.onmouseout = function () {
    time=setInterval(autoPlayr,2000);
}
// 遍历所有数字导航实现划过切换至对应的图片
for(var i=0;i<lB.length;i++){
    lB[i].id=i;
    lB[i].onmouseover=function () {
        inde=this.id;
        changePice(inde);
    }
}
function autoPlayr() {
    inde++;
    if (inde >= picq.length) {
        inde = 0;
    }
    changePice(inde);
}
// 定义图片切换函数
function changePice(curIndex) {
    for (var j = 0; j < picq.length; j++) {
        picq[j].style.opacity = 1;
        picq[j].style.display = 'none';
        lB[j].className = '';
    }
    lB[inde].className = 'on2';
    picq[inde].style.display = 'block';
    los= setTimeout(function () {
        picq[inde].style.opacity = 0.7;
    }, 1900)
}
/*。。。。。。。。。。。。。。。。轮播、、、、、、、、、、、、、、、、*/

var wra = document.getElementById('wra');
var picer = document.getElementById('picer').getElementsByTagName("li");
var lister = document.getElementById('lister').getElementsByTagName('li');
var spaimg3=document.getElementById('spaimg3');
var spaimg4=document.getElementById('spaimg4');
var pig =0;
var stop=null;
var start = null;

//定义点击切换
function oclk3() {
    pig--;
    if (pig <0) {
        pig=picer.length-1;
    }
    changePicer(pig);
    clearTimeout(stop);
}
function oclk4() {
    pig++;
    if (pig>= picer.length) {
        pig = 0;
    }
    changePicer(pig);
    clearTimeout(stop);
}
//点击调用
spaimg3.onclick=function () {
    oclk3();
}
spaimg4.onclick=function () {
    oclk4();
}
//隐藏
spaimg3.style.display='none';
spaimg4.style.display='none';
// 定义并调用自动播放函数
start=setInterval(autoPlayer,3000);
// 鼠标划过整个容器时停止自动播放
wra.onmouseover = function () {
    clearInterval(start);
    clearTimeout(stop);
    spaimg3.style.display='block';
    spaimg4.style.display='block';
}

// 鼠标离开整个容器时继续播放至下一张
wra.onmouseout = function () {
    start=setInterval(autoPlayer,3000);
    spaimg3.style.display='none';
    spaimg4.style.display='none';
}
// 遍历所有数字导航实现划过切换至对应的图片
for(var i=0;i<lister.length;i++){
    lister[i].id=i;
    lister[i].onmouseover=function () {
        pig=this.id;
        changePicer(pig);
    }
}
function autoPlayer() {
    pig++;
    if (pig >= picer.length) {
        pig= 0;
    }
    changePicer(pig);
}
// 定义图片切换函数
function changePicer(curIndex) {
    for (var j = 0; j < picer.length; j++) {
        picer[j].style.opacity = 1;
        picer[j].style.display = 'none';
        lister[j].className = '';
    }
    lister[pig].className = 'on3';
    picer[pig].style.display = 'block';
    stop = setTimeout(function () {
        picer[pig].style.opacity = 0.5;
    }, 2800)
}
/*移动  centf_right‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’*/
/*var aAll=document.getElementById('candy').getElementsByTagName('a');*/
/*var allfood=document.getElementById('allThings').getElementsByTagName("div");*/
/*var lPing=document.getElementById('lPing');
var tXun=document.getElementById('tXun');
var sTao=document.getElementById('sTao');
var cBu=document.getElementById('cBu');
var tGou=document.getElementById('tGou');
    lPing.onmouseover = function () {
        line.style.transform = 'translate(0px)'
    }

    tXun.onmouseover=function () {
        line.style.transform='translate(70px)';
    }

    sTao.onmouseover=function () {
        line.style.transform='translate(140px)';
    }

    cBu.onmouseover=function () {
        line.style.transform='translate(210px)';
    }

    tGou.onmouseover=function () {
        line.style.transform='translate(280px)';
    }*/

/*tab选项卡开始...............................*/
/*移动  centf_right‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’‘’*/
var line=document.getElementById("line");
var food=document.getElementById('allThings').getElementsByTagName("div");
var a_All=document.getElementById('candy').getElementsByTagName('a');
for(var i=0;i<a_All.length;i++){
    a_All[i].num=i;
    a_All[i].onmouseover=function () {
        for(var j=0;j<a_All.length;j++){
            food[j].style.display='none';
        }
        food[this.num].style.display='block';
        if(this.num==0){
            line.style.transform = 'translate(0px)';
        }else if(this.num==1){
            line.style.transform='translate(70px)';
        }else if(this.num==2){
            line.style.transform='translate(140px)';
        }else if(this.num==3){
            line.style.transform='translate(210px)';
        }else if(this.num==4){
            line.style.transform='translate(280px)';
        }
    }//onmouseover结束
}//遍历结束
/*小拉动。。。。。。。。。*/
var xlD=document.getElementById("xlD");
var k;
    function leftMax() {
        k = parseInt(xlD.style.left);
        xlD.style.left = (k - 582) + 'px';
        if (k == -582) {
            xlD.style.left = 0 + 'px';
        }
    }


var xlD2=document.getElementById("xlD2");
var h;
/*leftMax();*/

function rightMax() {
    h=parseInt(xlD2.style.left);
    xlD2.style.left=(h-582)+'px';
    if(h==-582){
        xlD2.style.left=0+'px';
    }
}

/*小拉动。。。。。。。。。*/
var xlD3=document.getElementById("xlD3");
var k3;
function leftMax2() {
    k3 = parseInt(xlD3.style.left);
    xlD3.style.left = (k3 - 582) + 'px';
    if (k3 == -582) {
        xlD3.style.left = 0 + 'px';
    }
}


var xlD4=document.getElementById("xlD4");
var h4;
/*leftMax();*/

function rightMax2() {
    h4=parseInt(xlD4.style.left);
    xlD4.style.left=(h4-582)+'px';
    if(h4==-582){
        xlD4.style.left=0+'px';
    }
}

/*小拉动。。。。。。。。。*/
var xlD5=document.getElementById("xlD5");
var k5;
function leftMax3() {
    k5 = parseInt(xlD5.style.left);
    xlD5.style.left = (k5 - 582) + 'px';
    /*alert(xlD.style.left);*/
    if (k5 == -582) {
        xlD5.style.left = 0 + 'px';
    }
}


var xlD6=document.getElementById("xlD6");
var h6;
/*leftMax();*/

function rightMax3() {
    h6=parseInt(xlD6.style.left);
    xlD6.style.left=(h6-582)+'px';
    if(h6==-582){
        xlD6.style.left=0+'px';
    }
}
/*小拉动。。。。。。。。。*/
var xlD7=document.getElementById("xlD7");
var k7;
function leftMax4() {
    k7 = parseInt(xlD7.style.left);
    xlD7.style.left = (k7 - 582) + 'px';
    if (k7 == -582) {
        xlD7.style.left = 0 + 'px';
    }
}


var xlD8=document.getElementById("xlD8");
var h8;
/*leftMax();*/

function rightMax4() {
    h8=parseInt(xlD8.style.left);
    xlD8.style.left=(h8-582)+'px';
    /* alert(xlD.style.left);*/
    if(h8==-582){
        xlD8.style.left=0+'px';
    }
}
/*小拉动。。。。。。。。。*/
var xlD9=document.getElementById("xlD9");
var k9;
function leftMax5() {
    k9= parseInt(xlD9.style.left);
    xlD9.style.left = (k9 - 582) + 'px';
    if (k9 == -582) {
        xlD9.style.left = 0 + 'px';
    }
}


var xlD10=document.getElementById("xlD10");
var h10;
/*leftMax();*/

function rightMax5() {
    h10=parseInt(xlD10.style.left);
    xlD10.style.left=(h10-582)+'px';
    /* alert(xlD.style.left);*/
    if(h10==-582){
        xlD10.style.left=0+'px';
    }
}
/*小拉动。。。。。。。。。*/
var xlD11=document.getElementById("xlD11");
var k11;
function leftMax6() {
    k11= parseInt(xlD11.style.left);
    xlD11.style.left = (k11 - 582) + 'px';
    /*alert(xlD.style.left);*/
    if (k11== -582) {
        xlD11.style.left = 0 + 'px';
    }
}


var xlD12=document.getElementById("xlD12");
var h12;
/*leftMax();*/

function rightMax6() {
    h12=parseInt(xlD12.style.left);
    xlD12.style.left=(h12-582)+'px';
    /* alert(xlD.style.left);*/
    if(h12==-582){
        xlD12.style.left=0+'px';
    }
}

/*小拉动。。。。。。。。。*/
var xlD13=document.getElementById("xlD13");
var k13;
function leftMax7() {
    k13= parseInt(xlD13.style.left);
    xlD13.style.left = (k13 - 582) + 'px';
    if (k13== -582) {
        xlD13.style.left = 0 + 'px';
    }
}


var xlD14=document.getElementById("xlD14");
var h14;
/*leftMax();*/

function rightMax7() {
    h14=parseInt(xlD14.style.left);
    xlD14.style.left=(h14-582)+'px';
    /* alert(xlD.style.left);*/
    if(h14==-582){
        xlD14.style.left=0+'px';
    }
}
/*小拉动。。。。。。。。。*/
var xlD15=document.getElementById("xlD15");
var k15;
function leftMax8() {
    k15= parseInt(xlD15.style.left);
    xlD15.style.left = (k15 - 582) + 'px';
    if (k15== -582) {
        xlD15.style.left = 0 + 'px';
    }
}

var xlD16=document.getElementById("xlD16");
var h16;
/*leftMax();*/

function rightMax8() {
    h16=parseInt(xlD16.style.left);
    xlD16.style.left=(h16-582)+'px';
    if(h16==-582){
        xlD16.style.left=0+'px';
    }
}
/*小拉动。。。。。。。。。*/
var xlD17=document.getElementById("xlD17");
var k17;
function leftMax9() {
    k17= parseInt(xlD17.style.left);
    xlD17.style.left = (k17 - 582) + 'px';
    if (k17== -582) {
        xlD17.style.left = 0 + 'px';
    }
}

var xlD18=document.getElementById("xlD18");
var h18;
/*leftMax();*/

function rightMax9() {
    h18=parseInt(xlD18.style.left);
    xlD18.style.left=(h18-582)+'px';
    if(h18==-582){
        xlD18.style.left=0+'px';
    }
}
/*下拉导航的控制*/

var xSd=document.getElementById('xSd');
window.onscroll=function () {
    var ht=pageYOffset;
    if(ht>=800){
        xSd.style.display='block';
    }else {
        xSd.style.display='none';
    }
}
/*、、、、、、、、、、、文字小轮播*/
var sXs=document.getElementById('sX').getElementsByTagName('li');
var Alls=document.getElementById('aBq_all').getElementsByTagName('div');
var cover_All=document.getElementById('cover_All');
// 如果不需要按钮点击控制，可以删掉
var left_img=document.getElementById('left_img');
var right_img=document.getElementById('right_img');
var leg=0;
var timeer;
var stoper;
//小圆切换 切换的同时也改变图片
for(var i=0;i<sXs.length;i++){
    sXs[i].coder=i;
    sXs[i].onmouseover=function () {
        leg=this.coder;
        changimg(leg);//切换的同时也改变图片 通过传参实现
    }
}
// 通过定时器调用
function autoBf() {
    leg++;
    if(leg>=Alls.length){
        leg=0;
    }
    changimg(leg);
}
//图片切换函数changimg
function changimg(currValue) {
    for(var i=0;i<Alls.length;i++){
        Alls[i].style.opacity='0';
        sXs[i].className='';
    }
    Alls[leg].style.opacity='1';
    Alls[leg].style.transition="opacity 1s";
    sXs[leg].className='xW';
}
//定时器调用自动播放
timeer=setInterval(autoBf,3000);
//鼠标放上最大容器的时候出现，移开消失
//当我鼠标放上cover_All的时候的时候停止切换
cover_All.onmouseover=function () {
    stoper=clearInterval(timeer);
    left_img.style.display='block';
    right_img.style.display='block';
}
//当我鼠标移开cover_All的时候的时候继续切换
cover_All.onmouseout=function () {
    timeer=setInterval(autoBf,3000);
    left_img.style.display='none';
    right_img.style.display='none';
}
//当我点击左侧按钮的时候定时器停止（因为按钮已经在最大的这个容器里面，
// 在点击的时候要停止定时器，所以就不用去点击的时候停止定时器）
//只需设置按钮点击让他切换图片和对应的小圆标(小圆标和图片在函数中是同时进行的)
function onclk_left() {
    leg--;
    if(leg<0){
        leg=Alls.length-1;
    }
    stoper=clearInterval(timeer);
    changimg(leg);
}

function onclk_right() {
    leg++;
    if(leg>=Alls.length){
        leg=0;
    }
    stoper=clearInterval(timeer);
    changimg(leg);
}
//设置点击事件
left_img.onclick=function () {
    onclk_left();
}
right_img.onclick=function () {
    onclk_right();
}
/*videoMP4视频处理*/
var start_Btm=document.getElementById("start_Btm");
var stop_Btm=document.getElementById("stop_Btm");
var zhanlang=document.getElementById('zhanlang');
//开始按钮
start_Btm.onclick=function () {
    zhanlang.play();
}
//暂停
stop_Btm.onclick=function () {
    zhanlang.pause();
}
/*........................................toolbar左侧.............................................*/
var left_Bar=document.getElementById('left_Bar').getElementsByTagName('li');
var lefB=document.getElementById('left_Bar');
var kaiS;
for(var i=0;i<left_Bar.length;i++){
    left_Bar[i].colll=i;
    function min() {
        for(var j=0;j<left_Bar.length;j++){
            left_Bar[j].className='';
            clearInterval(kaiS);
        }
    }
    left_Bar[i].onclick=function () {
        min();
        this.className='lift_item_on';
    }
   /* left_Bar[i].onmouseout=function () {
       kaiS=setInterval(abc,100);
    }*/
    function abc() {
        var a=pageYOffset;
        if(a>1800&&a<2700){
            min();
            lefB.style.display='block'
            left_Bar[0].className='lift_item_on';
        }else if(a>2700&&a<3300){
            min();
            left_Bar[1].className='lift_item_on';
        }else if(a>3300&&a<3900){
            min();
            left_Bar[2].className='lift_item_on';
        }else if(a>3900&&a<4600){
            min();
            left_Bar[3].className='lift_item_on';
        }else if(a>4600&&a<5200){
            min();
            left_Bar[4].className='lift_item_on';
        }else if(a>5200&&a<6000){
            min();
            left_Bar[5].className='lift_item_on';
        }else if(a>6000&&a<6600){
            min();
            left_Bar[6].className='lift_item_on';
        }else if(a>6600&&a<7200){
            min();
            left_Bar[7].className='lift_item_on';
        }else if(a>7200&&a<7800){
            min();
            left_Bar[8].className='lift_item_on';
        }else if(a>7800&&a<8000){
            min();
            left_Bar[9].className='lift_item_on';
        }else if(a>8000&&a<8600){
            min();
            left_Bar[10].className='lift_item_on';
        }else if(a<1800){
            lefB.style.display='none';
        }
    }
  kaiS=setInterval(abc,100);
}
/*........................................toolbar左侧.............................................*/
