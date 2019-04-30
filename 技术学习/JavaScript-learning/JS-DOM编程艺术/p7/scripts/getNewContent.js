function getNewContent() {
var request = getHTTPObject();
	if(request){
		//第三个参数用于指定请求是否以异步方式发送和处理
		request.open("GET","example.txt",true)
		//onreadystatechange是一个事件处理函数，
		//它会在服务器给XMLHttpRequest对象送回响应的时候被触发执行
		request.onreadystatechange =function(){
			//处理响应
			
			if(request.readyState == 4){
				alert("Response Revceive")
					var para = document.createElement("p");
					var txt = document.createTextNode(request.responseText);
					para.appendChild(txt);
					document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
		//console.log("1");
	}else{
		alert("sorry,your browser donsn\'t support XMLHttpRequest")

	}
alert("Function Done")
}

addLoadEvent(getNewContent);