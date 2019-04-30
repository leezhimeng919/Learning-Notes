function dispalyCitations() {
	if( !document.getElementsByTagName
		|| !document.createTextNode || !document.createElement )
		return false;
	var quotes = document.getElementsByTagName("blockquote");

	for(var i = 0 ; i<quotes.length ; i++){
		if(!quotes[i].getAttribute("cite"))continue;
		var url = quotes[i].getAttribute("cite");

		var quoteChildren = quotes[i].getElementsByTagName("*");

		if(quoteChildren.length<1)continue;
		var elem = quoteChildren[quoteChildren.length-1];

		var link = document.createElement("a");
		var link_text = document.createTextNode("来源");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);

	}

}

window.onload = dispalyCitations;