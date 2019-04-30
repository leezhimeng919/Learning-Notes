
//document.write
function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}
//innerHTML
 function insertParagraph2() {
	document.getElementById("testdiv").innerHTML = "<p>innerHTML</p>";
}
//createElement
function insertParagraph3(){
  var testdiv = document.getElementById("testdiv");
  var para = document.createElement("p");
  testdiv.appendChild(para);
  var text = document.createTextNode("createElement");
  para.appendChild(text);
}

addLoadEvent(insertParagraph2);
addLoadEvent(insertParagraph3);
insertParagraph("document.write");





