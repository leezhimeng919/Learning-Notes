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

 	function insertAfter(newElement,targetElement){
 		var parent = targetElement.parentNode;
 		if(parent.lastChild == targetElement){
 			parent.appendChild(newElement);
 		}
 		else{
 			parent.insertBefore(newElement,targetElement.nextSibling);
 		}

 	}