//账户输入框
var userName=document.getElementById("userName");
var users=document.getElementById("users");
var k=0;
userName.onclick=function () {
    users.innerHTML="<img src='imagesReg/user.png'>";
};
userName.onblur=function () {
    /*users.innerHTML="";*/
    var nameValue = userName.value;
    var pattern = /^[a-zA-Z_]\w{5,19}$/g;
    if(nameValue =="" || nameValue==null){
        users.innerHTML = "用户名不能为空!";
    }
    else if(pattern.test(nameValue)){
        users.innerHTML = "正确!";
        k=1;
    }
    else{
        users.innerHTML= "长度在4-20位之间！";
    }
};
//密码输入框
var password=document.getElementById('password');
var passwords=document.getElementById('passwords');
password.onclick=function () {
    passwords.innerHTML="<img src='imagesReg/password.png'>";
};
password.onblur=function () {
   /* passwords.innerHTML="";*/
    var passValue = password.value;
    var pattern = /^\w{6,15}$/g;
    if(pattern.test(passValue)){
        passwords.innerHTML = "正确!";
        k=2;
    }
    else if(passValue =="" || passValue==null){
        passwords.innerHTML = "密码不能为空!";
    }
    else{
        passwords.innerHTML = "密码长度在6-15位之间！";
    }
};
//密码确认输入框
var rPass=document.getElementById('rPass');
var rP=document.getElementById('rP');
rPass.onclick=function () {
    rP.innerHTML="<img src='imagesReg/rep.png'>";
};
rPass.onblur=function () {
   /* rP.innerHTML="";*/
    var pass1Value = password.value;
    var pass2Value = rPass.value;
    if(pass2Value =="" || pass2Value==null){
        rP.innerHTML = "密码不能为空!";
    }
    else if(pass1Value == pass2Value){
        rP.innerHTML = "输入正确!";
        k=3;
    }
    else if(pass1Value!=pass2Value){
        rP.innerHTML= "两次密码输入不一致!";
    }
    else{
        span_password2.innerHTML = "密码长度在6-15位之间！";
    }
};

//手机确认输入框
var tel=document.getElementById('tel');
var phone=document.getElementById('phone');
tel.onclick=function () {
    phone.innerHTML="<img src='imagesReg/test.png'>";
};
tel.onblur=function () {
   /* phone.innerHTML="";*/
    var telValue = tel.value;
    var pattern = /^1(83|52|38|)\d{8}$/g;
    if(pattern.test(telValue)){
        phone.innerHTML = "正确!";
        k=4;
    }
    else if(telValue =="" || telValue==null){
        phone.innerHTML = "手机号码不能为空!";
    }
    else{
        phone.innerHTML = "长度必须11位！";
    }
};
//验证码确认输入框
var codeWord=document.getElementById('codeWord');
var yz=document.getElementById('yz');
var span2=document.getElementById('span2');
codeWord.onclick=function () {
    yz.innerHTML="<img src='imagesReg/test.png'>";
};
//验证码
function createNum() {
    var arr=new Array;
    for(var i=0;i<10;i++){
        arr[i]=i;
    }
    for(var j=0;j<26;j++){
        arr[arr.length]=String.fromCharCode(65+j);//arr.length原来的长度增加1；
    }
    for(var k=0;k<26;k++){
        arr[arr.length]=String.fromCharCode(97+k);//arr.length原来的长度增加1；
    }
    var let=6;
    var code='';
    for(var i=0;i<let;i++){
        var random=Math.floor(Math.random()*62);
        code+=arr[random];//存放随机产生的数组元素
    }
    span2.innerHTML=code;
}
createNum();

codeWord.onblur=function () {
   /* yz.innerHTML="";*/
    var testValue =codeWord.value;
    if(testValue =="" || testValue==null){
       yz.innerHTML = "验证码不能为空!";
        createNum();
    }else if(testValue==span2.innerHTML){
        yz.innerHTML = "正确!";
        k=5;

    }
    else{
        yz.innerHTML = "验证码不正确！";
        createNum();
    }
};
span2.onclick=function () {
    createNum();
}
//提交按钮
var button=document.getElementById('button');
var myForm=document.getElementById('myForm');
    button.onclick=function () {
        if(k==5){
            myForm.action='login.html';
            myForm.method='post';
            myForm.submit();
        }else {
            confirm("请确认填写信息是否完整");
        }
    }
//国家选择。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
var sec=document.getElementById('country').getElementsByTagName('li');
var span6=document.getElementById('span6');
var divs=document.getElementById('cons').getElementsByTagName('div');
for(var i=0;i<sec.length;i++){
    sec[i].id=i;
   //鼠标点击
    sec[i].onclick=function () {
        for(var j=0;j<sec.length;j++){
            sec[j].className='';
            divs[j].style.display='none';
        }
        this.className='select';
        span6.innerHTML=this.innerHTML;
        divs[this.id].style.display='block';
    }
}
//国家切换
var span7=document.getElementById('span7');
var jias=document.getElementById('jia').getElementsByTagName('dt');
for (var i=0;i<jias.length;i++){
    jias[i].index=i;
    jias[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias1=document.getElementById('jia1').getElementsByTagName('dt');
for (var i=0;i<jias1.length;i++){
    jias1[i].index=i;
    jias1[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias2=document.getElementById('jia2').getElementsByTagName('dt');
for (var i=0;i<jias2.length;i++){
    jias2[i].index=i;
    jias2[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias3=document.getElementById('jia3').getElementsByTagName('dt');
for (var i=0;i<jias3.length;i++){
    jias3[i].index=i;
    jias3[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}


var jias4=document.getElementById('jia4').getElementsByTagName('dt');
for (var i=0;i<jias4.length;i++){
    jias4[i].index=i;
    jias4[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}
var jias5=document.getElementById('jia5').getElementsByTagName('dt');
for (var i=0;i<jias5.length;i++){
    jias5[i].index=i;
    jias5[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}
var jias6=document.getElementById('jia6').getElementsByTagName('dt');
for (var i=0;i<jias6.length;i++){
    jias6[i].index=i;
    jias6[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias7=document.getElementById('jia7').getElementsByTagName('dt');
for (var i=0;i<jias7.length;i++){
    jias7[i].index=i;
    jias7[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias8=document.getElementById('jia8').getElementsByTagName('dt');
for (var i=0;i<jias8.length;i++){
    jias8[i].index=i;
    jias8[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias9=document.getElementById('jia9').getElementsByTagName('dt');
for (var i=0;i<jias9.length;i++){
    jias9[i].index=i;
    jias9[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias10=document.getElementById('jia10').getElementsByTagName('dt');
for (var i=0;i<jias10.length;i++){
    jias10[i].index=i;
    jias10[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias11=document.getElementById('jia11').getElementsByTagName('dt');
for (var i=0;i<jias11.length;i++){
    jias11[i].index=i;
    jias11[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias12=document.getElementById('jia12').getElementsByTagName('dt');
for (var i=0;i<jias12.length;i++){
    jias12[i].index=i;
    jias12[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias13=document.getElementById('jia13').getElementsByTagName('dt');
for (var i=0;i<jias13.length;i++){
    jias13[i].index=i;
    jias13[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}
var jias14=document.getElementById('jia14').getElementsByTagName('dt');
for (var i=0;i<jias14.length;i++){
    jias14[i].index=i;
    jias14[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}
var jias15=document.getElementById('jia15').getElementsByTagName('dt');
for (var i=0;i<jias15.length;i++){
    jias15[i].index=i;
    jias15[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}
var jias16=document.getElementById('jia16').getElementsByTagName('dt');
for (var i=0;i<jias16.length;i++){
    jias16[i].index=i;
    jias16[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias17=document.getElementById('jia17').getElementsByTagName('dt');
for (var i=0;i<jias17.length;i++){
    jias17[i].index=i;
    jias17[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias18=document.getElementById('jia18').getElementsByTagName('dt');
for (var i=0;i<jias18.length;i++){
    jias18[i].index=i;
    jias18[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias19=document.getElementById('jia19').getElementsByTagName('dt');
for (var i=0;i<jias19.length;i++){
    jias19[i].index=i;
    jias19[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}

var jias20=document.getElementById('jia20').getElementsByTagName('dt');
for (var i=0;i<jias20.length;i++){
    jias20[i].index=i;
    jias20[i].onclick=function () {
        span7.innerHTML=this.innerHTML
    }
}
//打开选择，关闭
var country=document.getElementById('country');
var c=1;
    function choose() {

        if(c==1){
            country.style.display='block'; 
            c=2;
        }else if(c==2){
            country.style.display='none';
            c=1;
        }
    }


/*。。。。。。。。。。。。。。。。遮罩层。。。。。。。。。。。。。。。。。。。。。*/
/*遮罩层*/
var masks = document.querySelector("#mask");
var masks2 = document.querySelector("#mask_layer");
function mask(){
    masks.style.display = "none";
    masks2.style.display = "none";
}