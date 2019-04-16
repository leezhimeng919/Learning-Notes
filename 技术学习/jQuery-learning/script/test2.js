//基本选择器
/*$("#one")
	.css("background","#bbffaa");

$(".mini")
	.css("background","#bbffaa");

$("span,#two")
	.css("background","#bbffaa");

$("*")
	.css("background","#bbffaa");
*/

//层次选择器

/*//祖先 后代
$("div span")
	.css("background","#bbffaa");

//父>子
$("div >span")
	.css("background","#bbffaa");*/

//前+后一同辈
//可用.next()
/*$(".one+div")
	.css("background","#bbffaa");*/

//前~后所有同辈
//可用.nextAll()
/*$("#two~div")
	.css("background","#bbffaa");*/

/*$(":animated")
	.css("background","#bbffaa")*/

$("div:hidden")
	.show(3000);
/*$("div:visible")
	.css("background","#bbffaa");*/