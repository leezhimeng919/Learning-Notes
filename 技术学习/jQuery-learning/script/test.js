/*
$(document).ready(function(){

        alert("hello jQuery!");
});
*/

$(".level1>a").click(function(){
    $(this).addClass("current")
    .next().show()
    .parent().siblings()
		.children("a").removeClass("current")

    .next().hide();
    return false;
});

$(function(){
	var $cr = $("#cr");
	var cr = $cr[0];
	$cr.click(function(){
		//DOM方式判断
		//if(cr.checked){
		//jQ方式判断
		if($cr.is(":checked")){
			alert("谢谢你的支持，你可以继续操作！");	
		}
	})
})

