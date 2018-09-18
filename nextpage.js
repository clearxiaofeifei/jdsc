var tits=document.getElementById('pos').getElementsByTagName('td');
var place=document.getElementById('place');
var sap1=document.getElementById('sap1');
var sap2=document.getElementById('sap2');
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
    var old_text=sap2.innerHTML;
    var new_text='︿';
    sap2.innerHTML=new_text;
    place.style.backgroundColor='white';
}
mD.onmouseout=function () {
    var old_text=sap2.innerHTML;
    var new_text='﹀';
    sap2.innerHTML=new_text;
    place.style.backgroundColor='#f2f2f2';
}
pos.onmouseover=function () {
    var old_text=sap2.innerHTML;
    var new_text='︿';
    sap2.innerHTML=new_text;
    place.style.backgroundColor='white';
}
pos.onmouseout=function () {
    var old_text=sap2.innerHTML;
    var new_text='﹀';
    sap2.innerHTML=new_text;
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
/*main2....................*/
var nav2=document.getElementById('nav2');
var sap4=document.getElementById('sap4');
var dD2=document.getElementById('dD2');
var top_left=document.getElementById('top_left');
nav2.onmouseover=function () {
    var old_text=sap4.innerHTML;
    var new_text='︿';
    sap4.innerHTML=new_text;
    nav2.style.backgroundColor='white';
   top_left.style.background="url(imgnext/jd2015img.png) 0 -25px no-repeat" ;
}
nav2.onmouseout=function () {
    var old_text=sap4.innerHTML;
    var new_text='﹀';
    sap4.innerHTML=new_text;
    nav2.style.backgroundColor='#f2f2f2';
    top_left.style.background="url(imgnext/jd2015img.png) 0 0px no-repeat" ;
}
dD2.onmouseover=function () {
    var old_text=sap4.innerHTML;
    var new_text='︿';
    sap4.innerHTML=new_text;
    nav2.style.backgroundColor='white';
    top_left.style.background="url(imgnext/jd2015img.png) 0 -25px no-repeat" ;
}
dD2.onmouseout=function () {
    var old_text=sap4.innerHTML;
    var new_text='﹀';
    sap4.innerHTML=new_text;
    nav2.style.backgroundColor='#f2f2f2';
    top_left.style.background="url(imgnext/jd2015img.png) 0 0px no-repeat" ;
}
//main3/////////////////
var nav3=document.getElementById('nav3');
var sap5=document.getElementById('sap5');
var dD3=document.getElementById('dD3');
nav3.onmouseover=function () {
    var old_text=sap5.innerHTML;
    var new_text='︿';
    sap5.innerHTML=new_text;
    nav3.style.backgroundColor='white';
}
nav3.onmouseout=function () {
    var old_text=sap5.innerHTML;
    var new_text='﹀';
    sap5.innerHTML=new_text;
    nav3.style.backgroundColor='#f2f2f2';
}
dD3.onmouseover=function () {
    var old_text=sap5.innerHTML;
    var new_text='︿';
    sap5.innerHTML=new_text;
    nav3.style.backgroundColor='white';
}
dD3.onmouseout=function () {
    var old_text=sap5.innerHTML;
    var new_text='﹀';
    sap5.innerHTML=new_text;
    nav3.style.backgroundColor='#f2f2f2';
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
/*fL上下切换、、、、、、、、、、、、、、、、、、、*/
var fL_All=document.getElementById("fL_All");
var up=document.getElementById("up");
fL_All.onmouseover=function () {
    var old_text=up.innerHTML;
    var new_text='︿';
    up.innerHTML=new_text;
}
fL_All.onmouseout=function () {
    var old_text=up.innerHTML;
    var new_text='﹀';
    up.innerHTML=new_text;
}
/*放大镜tab切换。。。。。。、、、、、、、、、*/
var ximg=document.getElementById('ximg').getElementsByTagName('li');
var imgs=document.getElementById('img').getElementsByTagName('img');
var img=document.getElementById('img');
var fDj=document.getElementById('fDj');
var fDj2=document.getElementById('fDj2');
var rpicss=['imgnext/ddt1.jpg','imgnext/ddt2.jpg','imgnext/ddt3.jpg','imgnext/ddt4.jpg','imgnext/ddt5.jpg']
var rpic=document.getElementById('rpic');
var cover=document.getElementById('cover');
for(var i=0;i<ximg.length;i++) {
    ximg[i].index = i;
    ximg[i].onmouseover = function () {
        for (var j = 0; j < ximg.length; j++) {
            ximg[j].className = '';
            imgs[j].style.display = 'none';
        }
        this.className = 'chose';
        imgs[this.index].style.display = 'block';
        rpic.src=rpicss[this.index];
    }
}

cover.onmousemove=function (e) {
    var ev=window.event||e;
    var mouse_left=ev.offsetX||ev.layerX;
    var mouse_top=ev.offsetY||ev.layerY;
    document.title=mouse_left+"|"+mouse_top;
    //计算色块位置
    var fDj_left=mouse_left-120;
    var fDj_top=mouse_top-120;
    //判断
    if(fDj_left<0){
        fDj_left=0;
    }
    if(fDj_left>110){
        fDj_left=110;
    }
    if(fDj_top<0){
        fDj_top=0;
    }
    if(fDj_top>209){
        fDj_top=209;
    }
    //让放大镜(色块移动)移动
    fDj.style.left=fDj_left+'px';
    fDj.style.top=fDj_top+'px';
    //计算右侧图片的位置
    var rpic_left=fDj_left*-2;
    var rpic_top=fDj_top*-2;
    //让右侧图片移动
    rpic.style.left=rpic_left+'px';
    rpic.style.top=rpic_top+'px';

}
//给左侧家鼠标事件
cover.onmouseover=function () {
    //让左侧fDj和右侧div显示
    fDj.style.display='block';
    fDj2.style.display='block';
}
cover.onmouseout=function () {
    //让左侧fDj和右侧div显示
    fDj.style.display='none';
    fDj2.style.display='none';
}

/*sizeCode.................................*/
var size=document.getElementById('size').getElementsByTagName('li');
for(var i=0;i<size.length;i++){
    size[i].id=i;
    size[i].onclick=function () {
        for(var j=0;j<size.length;j++){
            size[j].className='';
        }
        this.className='sizeCode';
    }
}
/*inp..........*/
var value=document.getElementById('value');
/*var jia=document.getElementById('jia');
var jian=document.getElementById('jian');*/
var prices1=document.getElementById('prices1');
var prices2=document.getElementById('prices2');
var prices3=document.getElementById('prices3');
var prices4=document.getElementById('prices4');
var num=value.value;
 value.onblur=function () {
     if(value.value==NaN && value.value==0){
         value.value=1;
     }else if(value.value==''){
         value.value=1;
         priceJ();
     }else {
         num=value.value;
         priceJ();
     }
 }
function jiaa() {
        if(num>=1){
            num++;
            value.value=num;
        }else {
            num=1;
        }
    priceJ();
}
function jiann() {
    if(num>1){
        num--;
        value.value=num;
    }else {
        num=1;
    }
    priceJ();
}

function priceJ() {
    var price=num*119;
    prices1.innerHTML=parseInt(price/3);
    prices2.innerHTML=parseInt(price/6);
    prices3.innerHTML=parseInt(price/12);
    prices4.innerHTML=parseInt(price/24);

}
/*right下拉滑动*/
var xS=document.getElementById("xS");
var xX=document.getElementById("xX");
var lW=document.getElementById("lW");
var h=1;
function xSS() {
    k=parseInt(lW.style.top);
    if(h==1){
        k=-495;
        lW.style.top=k+'px';
        h=2;
    }else {
        k=0;
        lW.style.top=k+'px';
        h=1;
    }
}
function xXX() {
    k=parseInt(lW.style.top);
    if(h==1){
        k=0;
        lW.style.top=k+'px';
        h=2;
    }else {
        k=-495;
        lW.style.top=k+'px';
        h=1;
    }
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
/*toobar结束*/
/*滚动条  下拉导航出现*/

var gDt=document.getElementById('gDt');
window.onscroll=function () {
    var ht=pageYOffset;
    if(ht>=1200){
        gDt.style.display='block';
    }else {
        gDt.style.display='none';
    }
}
/*tab页 详情*/
var top_tit=document.getElementById('top_tit').getElementsByTagName('li');
var all_Spq=document.getElementById('all_Spq').getElementsByTagName('div');
for(var i=0;i<top_tit.length;i++){
    top_tit[i].id=i;
    top_tit[i].onclick=function () {
        for(var j=0;j<top_tit.length;j++){
            top_tit[j].className='';
            all_Spq[j].style.display='none';
        }
        this.className='cloRx';
        all_Spq[this.id].style.display='block';
    }
}

