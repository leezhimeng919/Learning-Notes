function displayAbbreviations() {
	if( !document.getElementsByTagName
		|| !document.createTextNode || !document.createElement )
		return false;
	//if(!document.getElementById("title"))return false;

	var abbreviations = document.getElementsByTagName('abbr');
	if(abbreviations.length<1) return false;
	var defs=[];

	for(var i = 0 ; i < abbreviations.length ; i ++)
	{
		if(abbreviations[i].childNodes.length<1)continue;
		var definition = abbreviations[i].getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = definition;
	}

  	var dlist = document.createElement("dl");

  	for(key in defs){
  		var dtitle = document.createElement("dt");
  		var ddesc = document.createElement("dd");
  		var dtitle_text = document.createTextNode(key);
  		var ddesc_text = document.createTextNode(defs[key]);
  		dtitle.appendChild(dtitle_text);
  		ddesc.appendChild(ddesc_text);

  		dlist.appendChild(dtitle);
  		dlist.appendChild(ddesc);

  	}
  	if(dlist.childNodes.length<1)return false;
  	//document.body.appendChild(dlist);
  	var header = document.createElement("h2");
  	var header_text = document.createTextNode("Abbreviations");
  	header.appendChild(header_text);

  	document.body.appendChild(header);
  	document.body.appendChild(dlist);


}

//window.onload = displayAbbreviations;