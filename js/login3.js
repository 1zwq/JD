//--------------点击登录时用户名开头必须是字母后面必须是数字必须是5-18位-----------
//---------------密码开头必须是字母密码必须是5-18----------------------------------
var btn = document.getElementById("btn");
var pat = /^[a-zA-Z_]\w{5,18}\d$/;
var pat1 =/^[a-zA-Z_]\w{5,18}$/;
btn.onclick = function(){
	if(pat.test(inp.value)){
		if(pat1.test(pwd.value)){
			self.location ="index.html" ;
		}else{
			alert("密码输入错误")
		}
	}else{
		alert("账户输入错误")
	}
}
var nava = document.getElementById("nava");
nava.onclick = function(){
	self.location = "register.html"
}