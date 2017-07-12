var x, y, z;

function myFunction() {
    $("#h01").html("Hello jQuery");
}
$(document).ready(myFunction);
/*
function myFunction()
{
var obj=document.getElementById("h01");
obj.innerHTML="Hello jQuery";
}
onload=myFunction;

*/

/*
function changeText() {
	x = document.getElementById("get");
	if (x.innerHTML.match("hi")) {
		x.innerHTML = "Change!";
		x.style.color = "#ff0000";
		//		document.write("<p>Bu...</p>");
		//		document.write in function will overwrite the whole document
	} else {
		x.innerHTML = "JavaScript say hi.";
		x.style.color = "#000000";
	}
}

function mOver(obj) {
	obj.innerHTML = ":)";
}

function mOut(obj) {
	obj.innerHTML = ":(";
}

var myDate = new Date();
myDate.setFullYear(2017, 6, 11);

var today = new Date();

if (myDate > today) {
	alert("Today is before 11th July 2017");
} else {
	alert("Today is after 11th July 2017");
}

var txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt += "<p>Browser Name: " + navigator.appName + "</p>";
txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
txt += "<p>Platform: " + navigator.platform + "</p>";
txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
txt += "<p>User-agent language: " + navigator.systemLanguage + "</p>";

document.getElementById("example").innerHTML = txt;

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		var c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			var c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) { c_end = document.cookie.length; }
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

function setCookie(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : "; expires=" + exdate.toGMTString());
}

function checkCookie() {
	var username = getCookie('username');
	if (username != null && username != "") {
		alert('Welcome again ' + username + '!');
	} else {
		username = prompt('Please enter your name:', "");
		if (username != null && username != "") {
			setCookie('username', username, 365);
		}
	}
}

function changeImage() {
	y = document.getElementById("myimage");
	if (y.src.match("on")) {
		y.src = "http://www.w3school.com.cn/i/eg_bulboff.gif";
	} else {
		y.src = "http://www.w3school.com.cn/i/eg_bulbon.gif";
	}
}

function verifyText() {
	z = document.getElementById("text").value;
	if (z === "" || isNaN(z)) {
		alert("Not Numeric");
	}
}

function multiply(c, d) {
	var t = 5;
	if (t === "5") {
		return c * d;
	}
	//	if(t=="5") {
	//		return c * d;	
	//	}
	//  test the difference between == and ===
	//  == compare the value
	//  === compare the value & type
}

document.getElementById("demo").innerHTML = multiply(3, 4);

var a = "test";
var b = a.replace("t", "r");
document.write(b + "5");

function greetings() {
	var time = new Date().getHours();
	if (time < 10) {
		var x = "Good Morning";
	} else if (time < 20) {
		x = "Good Day";
	} else {
		x = "Good Evening";
	}
	document.getElementById("time").innerHTML = x;
}

function throwError() {
	try {
		x = document.getElementById("input").value;
		if (x == "") {
			throw "Empty Input";
		}
		if (isNaN(x)) {
			throw "Not a Number";
		}
		if (x > 10) {
			throw "Too Great";
		}
		if (x < 5) {
			throw "Too Less";
		}
	} catch (err) {
		var y = document.getElementById("mess");
		y.innerHTML = "Error: " + err;
	}
}

x = document.getElementById("intro");
document.write('<p>Text of id="intro" are: ' + x.innerHTML + '</p>');

x = document.getElementById("main");
y = x.getElementsByTagName("p");
document.write('1st paragraph from div id="main" is ' + y[0].innerHTML);
*/
