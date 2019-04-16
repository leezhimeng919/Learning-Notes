var $category = $("ul li:gt(5):not(:last)");
$category.hide();
var $toggleBtn = $("div.showmore>a");
/*$toggleBtn.click(function(){
		if($category.is(":visible")){
				$category.hide(1000);
				$(this).find("span").text("显示全部品牌");
				//.filter()对自身集合进行筛选
				//.find()对子集操作
				$('ul li')
				.removeClass("promoted");
		}
		else{
				$category.show(1000);
				$(this).find("span").text("精简显示品牌");
				//.filter()对自身集合进行筛选
				//.find()对子集操作
				$('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
				.addClass("promoted");
		}

	return false;
})*/
$toggleBtn.toggle(function(){
		$category.show();
				$(this).find("span").text("显示全部品牌");
				//.filter()对自身集合进行筛选
				//.find()对子集操作
				$('ul li')
				.removeClass("promoted");
return false;
},function(){
			$category.hide();
				$(this).find("span").text("精简显示品牌");
				//.filter()对自身集合进行筛选
				//.find()对子集操作
				$('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
				.addClass("promoted");
return false;
})	
