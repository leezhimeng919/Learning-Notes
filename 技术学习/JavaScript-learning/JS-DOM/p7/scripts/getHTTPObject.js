/*
早期微软在IE5中以ActiveX对象的形式实现了一个名叫XMLHTTP的对象
var request = new ActiveXObject("Msxml2.XMLHTTP.3.0")
其他浏览器基于XMLHttpRequest来创建新对象
var request = new XMLHttpRequest();
*/

//为了兼容所有浏览器
function getHTTPObject() {
	if(typeof XMLHttpRequest == "undefined")
		XMLHttpRequest=function(){
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}
			catch(e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}
			catch(e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e){}
			return false;

		}
		return new XMLHttpRequest();
}

