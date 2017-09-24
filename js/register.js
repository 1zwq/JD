var inp = document.getElementById('inp');
var pwd = document.getElementById('pwd');
var qpwd = document.getElementById('qpwd');
var phone = document.getElementById('phone');
var inpYzm = document.getElementById('inpYzm');
var phoneYzm = document.getElementById("phoneYzm");
var btn = document.getElementById('btn');
//---------------获取光标里面的内容为空光标为黑色----------------
inp.onfocus = function(){
  inp.placeholder = '';
  inp.style.color = 'black';
}
pwd.onfocus = function(){
  pwd.placeholder = '';
  pwd.style.color = 'black';
}
qpwd.onfocus = function(){
  qpwd.placeholder = '';
  qpwd.style.color = 'black';
}
phone.onfocus = function(){
  phone.placeholder = '';
  phone.style.color = 'black';
}
inpYzm.onfocus = function(){
  inpYzm.placeholder = '';
  inpYzm.style.color = 'black';
}
phoneYzm.onfocus = function(){
  phoneYzm.placeholder = '';
  phoneYzm.style.color = 'black';
}
//-----用户名开头必须是字母数字为6-15位手机号开头必须是1共11位数----------

var pat = /^[a-zA-Z]\w{6,15}/;
var pat1 = /^1\d{10}/;
btn.onclick = function(){
  if (inp.value == '') {
    alert('用户名不能为空！')
    return
  }
//如果密码的value符合正则或者密码不为空,密码的值不等于确认密码的值就弹出alert密码必须一致
//否则就弹出密码输入错误或不能为空
  if (pat.test(pwd.value) || pwd.value != '') {
    if (pwd.value != qpwd.value) {
      alert('密码必须一致')
      return
    }
  } else{
    alert('密码输入错误或不能为空')
    return
  }
  //常用手机的内容不为空或者不符合正则就弹出号码输入错误或者手机不能为空
  if (phone.value != '') {
    if (!pat1.test(phone.value)) {
      alert('号码输入错误！')
      return
    }
  } else{
    alert('手机号不能为空！')
    return
  }
  //input验证码不为空时或者不等于验证码里面的内容就弹出验证码错误
  //否则弹出验证码不能为空，如果满足要求则跳到登录页面
  if (inpYzm.value != '') {
    if (inpYzm.value != yzm.innerHTML) {
      alert('验证码错误！')
      return
    }
  } else{
    alert('验证码不能为空！')
    return
  }
  self.location = 'login3.html'
}
//
var yzm = document.getElementById('yzm');
var res = '';
var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
for(var i = 1; i <= 4; i++){
  var a = parseInt(Math.random()*arr.length-1);//随机出现的数
  res += arr[a];
}
yzm.innerHTML = res;//得出的验证码
yzm.onclick = function(){
  var res = '';
  var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
  for(var i = 1; i <= 4; i++){
    var a = parseInt(Math.random()*arr.length-1);
    res += arr[a];
  }
  yzm.innerHTML = res;
}
//-----------点击登录页面--------------------
var log = document.getElementById("logi");
log.onclick = function(){
  self.location = "login3.html"
}