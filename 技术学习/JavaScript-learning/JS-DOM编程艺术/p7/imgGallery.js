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
//动态创建标签createElement/setAttribute/appendChild/createTextNode
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	var description = document.createElement("p");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images2.0/product.png");
	placeholder.setAttribute("alt","show the pictrue");
	description.setAttribute("id","description");
	var text=document.createTextNode("Choose an image");
	description.appendChild(text);
	//console.log(document.getElementsByTagName("body")[0]);

	//方法一
	//document.getElementsByTagName("body")[0].appendChild(placeholder);
	//document.getElementsByTagName("body")[0].appendChild(description);

	//方法二HTML-DOM body属性
	//document.body.appendChild(placeholder);
	//document.body.appendChild(description);

	//方法三parentElement.insertBefore(newElement,targetElement);/parentNode
	var imagegallery = document.getElementById("imagegallery");
	imagegallery.parentNode.insertBefore(description,imagegallery);
	//imagegallery.parentNode.insertBefore(placeholder,description);
	insertAfter(placeholder,imagegallery)
	//console.log(document.body==imagegallery.parentNode);
	
}

	addLoadEvent(prepareGallery);
	addLoadEvent(preparePlaceholder);