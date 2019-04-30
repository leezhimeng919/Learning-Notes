	function showPic(whichpic){
		if(!document.getElementById("placeholder"))
			return false;
 		var placeholder=document.getElementById("placeholder");

 		var source = whichpic.getAttribute("href");

 		if(placeholder.nodeName!="IMG")
 			return false;
 		//placeholder.setAttribute("src",source);
 		placeholder.src=source;
 		if(document.getElementById("description")){
 		 var description=document.getElementById("description")
 		/* if(whichpic.getAttribute("title")){
      	var text = whichpic.getAttribute("title");
      }else{
      	var text="";
      }*/
		var text= whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		
      	if(description.lastChild.nodeType==3)
 		description.lastChild.nodeValue=text;
		}
		return true;
 		//textHolder.setAttribute(textHolder.childNodes[0].nodeValue,title)
 	}

 	function prepareGallery() {
 	if(!document.getElementById) return false;
 	if(!document.getElementsByTagName) return false;	
 	if(!document.getElementById("imagegallery")) return false;

 	var gallary=document.getElementById("imagegallery");
 	var links=document.getElementsByTagName("a");
 	for(var i=0;i<links.length;i++){
 			links[i].onclick = function(){
 				return !showPic(this);
 				//return false;
 			}
 			links[i].onkeypress = links[i].onclick;
 	}
 	}

 	function addLoadEvent(func){
 	var oldonload=window.onload;
 	if(typeof oldonload!='function'){
 		window.onload=func;
 	}
 	else{

 		window.onload=function(){
 			oldonload();
 			func();
 		}
 	}
 	}

 	function firstFunction(){

 		alert("111");
 	}

 	function secondFunction(){
 		alert("222");
 	}