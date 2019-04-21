/**
 * Doc name :plugins.js Explain :这是一个建立在jQuery开源框架下的扩展类脚本，遵循着jQuery的语法和规则. Type
 * :扩展脚本 Date :2011/2/17
 */
( function($, win) {
	/**
	 @name 		:剧终弹出框
	 @tyle		:扩展函数
	 @Date		:2011/2/17
	 @explain	:这个函数主要是用于一些基础的弹出对话框效果.
	 @call		:dialogBox(宽, 高, 标题, 内容, 异步请求地址) [注意：如果设置异步请求,内容参数可以为空,如果不为空会被覆盖掉]
	 */
	 win.dialogBox = function (width, height, title, cont, gurl) {
	        var isId = document.getElementById(cont) != null ? true : false;
	        var _tm = isId ? cont : new Date().getTime();
	        var width = width || 500, height = height == 0 ? 'auto' : height - 45 + 'px';
	        var elemObj = document.getElementById('popbox_' + cont) != null ? document.getElementById('popbox_' + cont) : false;
	        var elem = elemObj != false ? elemObj : $('<div id="popbox_' + _tm + '" class="pop-box-sy" style="width:' + width + 'px"></div>').appendTo('body');
	        var boxY = (window.innerHeight != null ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body != null ? document.body.clientHeight : null) / 2+$(window).scrollTop();
	        var boxX = document.documentElement.offsetWidth / 2 - width / 2;
	        var this0 = this;

	        this0.boxExe = function (content) {
	            var match = /<!--\[script >>>([\s\S]+)>>>end script\]-->/ig.exec(content);
	            if (elemObj != false) {
	                $(elem).css({
	                    'position': 'absolute',
	                    'top': boxY - parseInt($(elem).height()) * 0.5 - 30,
	                    'left': boxX,
	                    'zIndex': '999'
	                })
				.find('[close="1"]')
				.click(function () {
				    $(elem).hide();
				}).end();
	                $(elem).show();
	            } else {
	                elem.append('<div class="pop-box-sy-hd"><a href="javascript:;" class="pop-box-sy-close" close="1"></a><b>' + title + '</b></div><div class="pop-box-sy-bd" style="height:' + height + ';">' + content + '</div>')
				.css({
				    'position': 'absolute',
				    'top': boxY - parseInt(elem.height()) * 0.5 - 30,
				    'left': boxX,
				    'zIndex': '999'
				})
				.find('[close="1"]')
				.click(function () {
				    if (isId) {
				        elem.hide();
				    } else {
				        elem.remove();
				    }
				}).end();
	            }

	            //内嵌JS脚本编译
	            match && match[1] && eval('$(function(){ ' + match[1].replace(/(global)\s([\w]+);/ig, function (s, a, b) { return 'var ' + b + '=$("#popbox_' + _tm + '");'; }) + ' });');
	            return true;
	        };
	        if (gurl) {
	            $.get(gurl, function (data) {
	                this0.boxExe(data);
	            });
	        } else {
	            if (document.getElementById(cont) != null) {
	                this0.boxExe(document.getElementById(cont).innerHTML);
	            } else {
	                this0.boxExe(cont);
	            }
	        }
	    };
	/**
	 * @ end
	 */

	/**
	 * @name :冒泡显示框
	 * @tyle :扩展函数
	 * @Date :2011/2/17
	 * @explain :这个函数主要是用于一些基础的弹出对话框效果.
	 * @call :dialogBox(宽, 高, 标题, 内容, 异步请求地址) [注意：如果设置异步请求,内容参数可以为空,如果不为空会被覆盖掉]
	 */
	win.suspenBox = function(obj, width, height, cont, gurl) {
		var _tm = new Date().getTime();
		var width = width || 700, height = height || 'auto';
		if (!obj)
			return;
		// 定位
		var flag = obj.offsetLeft > document.documentElement.offsetWidth / 2;
		var mainMarging = document.documentElement.offsetWidth / 2 - 501;
		var boxY = obj.offsetTop + obj.offsetHeight + 9, boxX = flag ? obj.offsetLeft
				+ 20 + obj.offsetWidth / 2 - width
				: obj.offsetLeft - 20 - obj.offsetWidth / 2;
		var lackX = flag ? (boxX < mainMarging ? mainMarging - boxX : 0)
				: ((document.documentElement.offsetWidth - (boxX + width + 20)) < mainMarging ? boxX
						- mainMarging
						: 0);
		var elem = $('<div id="suspen_' + _tm
				+ '" class="suspen-box-sy" style="width:' + width
				+ 'px"></div>');
		var arrowFloat = flag ? 'right' : 'left';
		var match = /<!--\[script >>>([\s\S]+)>>>end script\]-->/i.exec(cont);
		var timeOut;

		elem.append(
				'<em class="suspen-box-sy-arrow" style="float:'
						+ arrowFloat
						+ ';'
						+ (flag ? 'margin-right:' + (lackX + 21) + 'px'
								: 'margin-left:' + (lackX + 20) + 'px')
						+ '"></em><div class="suspen-box-sy-bd" style="height:'
						+ (isNaN(height) ? height - 20 + 'px' : height) + ';">'
						+ (cont || '\u6570\u636E\u8F7D\u5165\u4E2D...')
						+ '</div>').css( {
			'position' : 'absolute',
			'top' : boxY,
			'left' : boxX + (flag ? lackX : -lackX)
		}).appendTo('body').add(obj).hover( function() {
			clearTimeout(timeOut);
		}, function() {
			clearTimeout(timeOut);
			timeOut = setTimeout( function() {
				elem.remove();
			}, 100);
		}).end();

		// 内嵌JS脚本编译
		match
				&& match[1]
				&& eval('$(function(){ ' + match[1].replace(
						/(global)\s([\w]+);/ig, function(s, a, b) {
							return 'var ' + b + '=$("#suspen_' + _tm + '");';
						}) + ' });');

		// 异步请求数据
		gurl && $.get(gurl, function(data) {
			elem.find('.suspen-box-sy-bd').html(data);
		});
	};
	/**
	 * @ end
	 */

	/**
	 * @name :表单验证
	 * @tyle :扩展函数
	 * @Date :2011/2/28
	 * @explain :这是一个通用的表单验证效果，用JQ框架的扩展的插件，依赖于JQ框架下.
	 * @call :$('form').Validator();
	 */
	$.fn.Validator = function(callback) {
		var callback = $.isFunction(callback) ? callback : function() {
		}, dataType = {
			Require : /[\S]+/,
			Phone : /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/,
			Mobile : /^[\d+-]{0,20}$/,          ///^((\(\d{3}\))|(\d{3}\-))?(13|14|15|18)\d{9}$/,
			Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			Date : /^\d{4}-\d{2}-\d{2}$/,
			Number : /^\d+$/,
			DecimalNumber : /^[0-9]\d*(\.\d+)?$/,
			Integer : /^[-\+]?\d+$/,
			Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
			Zip : /^[1-9]\d{5}$/,
			QQ : /^[1-9]\d{4,8}$/,
			English : /^[A-Za-z]+$/,
			Chinese : /^[\u0391-\uFFE5]+$/,
			IdCard : /^\d{15}(\d{2}[A-Za-z0-9])?$/,
			Group : "fn.MustChecked(this.getAttribute('name'), this.getAttribute('min'), this.getAttribute('max'))",
			Limit : "fn.limit(this.value.length, this.getAttribute('min'),this.getAttribute('max'))",
			Compare : {
				eq : 'document.getElementsByName(this.getAttribute("to"))[0].value == this.value',
				gt : 'parseInt(document.getElementsByName(this.getAttribute("to"))[0].value) > parseInt(this.value)',
				lt : 'parseInt(document.getElementsByName(this.getAttribute("to"))[0].value) < parseInt(this.value)'
			}
		}, dataMsg = {
			Require : '\u6B64\u9879\u4E0D\u80FD\u4E3A\u7A7A',
			Phone : '\u60A8\u8F93\u5165\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u9519\u8BEF\uFF0C\u6B63\u786E\u683C\u5F0F\u5982\uFF1A0571-88665566',
			Mobile : '\u60A8\u8F93\u5165\u7684\u624B\u673A\u53F7\u7801\u4E0D\u5B58\u5728',
			Email : '\u60A8\u8F93\u5165\u7535\u5B50\u90AE\u4EF6\u4E0D\u5B58\u5728',
			Date : '\u60A8\u8F93\u5165\u7684\u65E5\u671F\u683C\u5F0F\u9519\u8BEF\uFF0C\u6B63\u786E\u683C\u5F0F\u5982\uFF1A2011-02-01',
			Number : '\u60A8\u8F93\u5165\u7684\u5185\u5BB9\u4E0D\u662F\u6570\u5B57\u578B',
			DecimalNumber : '\u60a8\u8f93\u5165\u7684\u5185\u5bb9\u4e0d\u662f\u5341\u8fdb\u5236\u6570',
			Integer : '\u8BF7\u8F93\u5165\u6574\u6570\u578B',
			Url : '\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u5730\u5740\uFF0C\u683C\u5F0F\u5982\uFF1Ahttp\3A//www.taobao.com',
			Zip : '\u60A8\u8F93\u5165\u7684\u90AE\u653F\u7F16\u7801\u4E0D\u5B58\u5728',
			QQ : '\u60A8\u8F93\u5165\u7684QQ\u53F7\u7801\u4E0D\u5B58\u5728',
			English : '\u53EA\u5141\u8BB8\u8F93\u5165\u82F1\u6587\u5B57\u6BCD',
			Chinese : '\u53EA\u5141\u8BB8\u8F93\u5165\u4E2D\u6587',
			Group : '',
			Limit : '',
			IdCard : '\u8EAB\u4EFD\u8BC1\u53F7\u7801\u4E0D\u6B63\u786E',
			Compare : {
				eq : '\u524D\u540E\u4E0D\u4E00\u81F4',
				gt : '\u524D\u9762\u7684\u503C\u5C0F\u4E8E\u540E\u9762\u7684\u503C',
				lt : '\u524D\u9762\u7684\u503C\u5927\u4E8E\u540E\u9762\u7684\u503C'
			}
		}, fn = {
			MustChecked : function(name, min, max) {
				var groups = document.getElementsByName(name);
				var hasChecked = 0;
				min = min || 1;
				max = max || groups.length;
				for ( var i = groups.length - 1; i >= 0; i--)
					if (groups[i].checked)
						hasChecked++;
				return min <= hasChecked && hasChecked <= max;
			},
			limit : function(len, min, max) {
				min = min || 0;
				max = max || Number.MAX_VALUE;
				return min <= len && len <= max;
			}
		}, Validate = function(obj, flag) {
			var formRun = true;

			$('[data-type]', obj).blur( function() {
				var typeString = this.getAttribute('data-type').split('|');
				var flag2=true, msg, getMsg;
				getMsg = this.getAttribute('msg');
				var nullFlag = dataType['Require'].test(this.value);
				for ( var i = 0, len = typeString.length; i < len; i++) {
					var M = typeString[i].split(':');
					try {
						msg = eval("[" + getMsg + "]")[0][M[0]];
					} catch (e) {
						msg = getMsg;
					}
					
					switch (M[0]) {
					case 'Group':
						if (!nullFlag) break;
						flag2 = eval(dataType[M[0]]);
						msg = msg || dataMsg[M[0]];
						break;
					case 'Limit':
						if (!nullFlag) break;
						flag2 = eval(dataType[M[0]]);
						msg = msg || dataMsg[M[0]];
						break;
					case 'Compare':
						if (!nullFlag) break;
						flag2 = eval(dataType[M[0]][M[1]]);
						msg = msg || dataMsg[M[0]][M[1]];
						break;
					case 'Zhtrim':
						var name = $.trim(this.value);
						var reg = /^[\u4e00-\u9fa5]+(\s+[a-zA-Z]+){0,}$|^[a-zA-Z]+(\s+[a-zA-Z]+){0,}$/;
						//var trimReg = /\s+/g;
						if (!reg.test(name) ) {
							flag2 = false;
							msg = msg || dataMsg[M[0]][M[1]];
						}
						break;
					case 'Require':
						flag2 = nullFlag;
						msg = msg || dataMsg[M[0]];
						break;
					case 'Mobiles':
						//判断是否是国内号码
						var mobile = /^((086)|(\+86)|(86\+)|(86\-))\d{11}$/;
						var trueMobile = /^\+?\d{11}$/;
						var otherMobile = /^\+?\d{7,30}$/;
						if (mobile.test($.trim(this.value))) {
							flag2 = false;
							msg = '大陆地区，请直接输入手机号码，不需要加86!';
						} else {
							if (!trueMobile.test($.trim(this.value))) {
								if (otherMobile.test($.trim(this.value))) {
									flag2 = true;
									msg = '小灵通或境外（含港澳台）手机号码，无法收到来自系统的短信!';
								} else {
									flag2 = false;
									msg = '手机格试不正确!';
								}
							} else {
								msg = '';
								flag2 = true;
							}
						}
						break;
					case 'Asyn':
						if (!nullFlag) break;
						var af = this.getAttribute('isAsynFlag');
						if (!af) {
							flag2 = fn.vAsyn(this, this.getAttribute('to'), { value: this.value });
						}
						if (af == '1') {
							flag2 = true;
							msg = msg || dataMsg[M[0]];
						}
						if (af == '0') {
							flag2 = false;
							msg = msg || dataMsg[M[0]];
						}
						this.removeAttribute('isAsynFlag');
						break;
					case 'SpecialChar':
						flag2 = !dataType[M[0]].test($.trim(this.value));
						msg = msg || dataMsg[M[0]];
						break;
					case 'IdCard':
						var idtype =  $("#cid-type").val();
						var _this= $(this);
						var  id = _this.val();
						if(!idtype){
							flag2 = false;
							msg =  '请选择证件类型！';
							break;
						}
						if (!id) {
							flag2 = false;
							msg =  '请填写证件号码！';
							break;
						}
						if (idtype=="身份证") {
							var result  = checkIdCard(id);
							if (result) {
								flag2 =false;
								msg=result;
								break;
							}
							result = checkIdCardAndBirthday(id, $("#birthday").val());
							if (result) {
								flag2 =false;
								msg=result;
								break;
							}
						}
						flag2 =true;
						break;
					default:
						if (!nullFlag) break;
						flag2 = dataType[M[0]].test($.trim(this.value));
						msg = msg || dataMsg[M[0]];
						break;
				}

					callback(this, flag2, msg);

					if (flag2) {
						$(this).removeAttr('isFlag').removeClass('error');
					} else {
						$(this).attr('isFlag', '1').addClass('error');
						break;
					}
				}
			});

			if (flag) {
				$('[data-type]', obj).blur();
				$('[isFlag=1]', obj).each( function() {
					formRun = false;
				}).eq(0).focus();

				return formRun;
			}
		};

		this.each( function() {
			Validate(this);
		}).submit( function() {
			var validata =  Validate(this, true);
			if(validata){
				var fsum = oldFiles['attachments'].length+oldFiles['works'].length+oldFiles['others'].length;
				if(fsum>10){
					alert('附件最多为10个,请删除部分!');
					return false;
				}
				processXp();
				if($('#city').val()==''){
					$('#city').parents().siblings('.msg-error').html('现居住地不能为空!').fadeIn('slow');
					return false;
				}else{
					$('#city').parents().siblings('.msg-remind, .msg-right, .msg-error').hide();
				}
			}
			if (!validata) {
				$("#save_resmue_submit").attr("disabled",false);
			}
			return validata;
		});
	};
	/**
	 * @ end
	 */
})(jQuery, window);



//
//$('#idcard').bind('blur', function() {
//	var result, idCardType=$("#idCardType").val();
//	$(this).parent().siblings('.msg-remind, .msg-right, .msg-error').hide();
//	if($(this).val()==null||$(this).val()==""){
//		$(this).parent().siblings('.msg-error').html("此项不能为空").fadeIn('slow');
//		return;
//	}
//	if (idCardType=="身份证") {
//		result=checkIdCard($(this).val());
//		if(result!=null){
//			$(this).parent().siblings('.msg-error').html(result).fadeIn('slow');
//		}
//	} else if (idCardType=="护照") {
//		result=$(this).val().match("[A-Za-z]\\S+");
//		if(null==result){
//			$(this).parent().siblings('.msg-error').html(idCardType+"不存在").fadeIn('slow');
//		}
//	} else if (idCardType=="台胞证") {
//		result=$(this).val().match("\\d{8}");
//		if(null==result){
//			$(this).parent().siblings('.msg-error').html(idCardType+"不存在").fadeIn('slow');
//		}
//	}else{
//		$(this).parent().siblings('.msg-error').html("请输入证件类型").fadeIn('slow');
//		return;
//	}
//});

/**
 * @ 身份证号强校验
 */


/**
 * @ 身份证号强校验
 */
function checkIdCard(id){
	var result=null;
	var  regExp  = /^[a-zA-Z][0-9]{6}\([\w]{1}\)$/    ; //用于匹配香港身份证
	if (id.length == 15) {
		result=id.match('\^(11|12|31|51|15|65|54|64|45|81|82|23|22|21|13|14|63|37|41|32|34|35|36|43|42|44|46|62|61|51|52|53|71|33|50)\\d{13}$');
		if(null==result){
			return '身份证号有误!';
		}
		return null;
	} else if (id.length == 18) {
		result=id.match("\^(11|12|31|51|15|65|54|64|45|81|82|23|22|21|13|14|63|37|41|32|34|35|36|43|42|44|46|62|61|51|52|53|71|33|50)\\d{15}[Xx0-9]$");
		if(null==result){
			return '身份证号有误!';
		}
		
		var check = 0;
		var checkNum = new Array(2, 4, 8, 5, 10, 9, 7, 3, 6, 1, 2, 4, 8, 5, 10, 9, 7);
		var checkNum2 = new Array( "1", "0", "X", "9", "8", "7", "6", "5", "4","3", "2" );
		for (var i = 0; i < 17; i++) {
			check += id.substring(16-i,17-i) * checkNum[i];
		}
		if(checkNum2[(check % 11)]!=id.substring(17,18)){
			return '身份证号有误!';
		}
		return null;
	}else if(regExp.test(id)){
		return null
	} 
	else {
		return '身份证号有误!';
	}
}

/**
 * @ 身份证号生日年份
 * 421022198810064521 => 1988
 * 421022881006452 => 1988
 */
function getBirthdayYearFromIdCard(idCard){
	if (idCard == undefined) {
		return null;
	}
	if (idCard.length == 15) {
		return "19" + idCard.substring(6, 8);
	}
	if (idCard.length == 18) {
		return idCard.substring(6, 10);
	}
	return null;
}

/**
 * @ 身份证号生日月份
 * 421022198810064521 => 10
 * 421022881006452 => 10
 */
function getBirthdayMonthFromIdCard(idCard){
	if (idCard == undefined) {
		return null;
	}
	if (idCard.length == 15) {
		return idCard.substring(8, 10);
	}
	if (idCard.length == 18) {
		return idCard.substring(10, 12);
	}
	return null;

}

/**
 * @ 身份证号生日月份
 * 421022198810064521 => 10
 * 421022881006452 => 10
 */
function getBirthdayDayFromIdCard(idCard){
	if (idCard == undefined) {
		return null;
	}
	if (idCard.length == 15) {
		return idCard.substring(10, 12);
	}
	if (idCard.length == 18) {
		return idCard.substring(12, 14);
	}
	return null;

}

/**
 * @ 身份证号与生日效验
 */
function checkIdCardAndBirthday(idCard, birthday){
	var idCardResult = checkIdCard(idCard);
	if (idCardResult == null && birthday != '') {
		var yearFromIdCard = getBirthdayYearFromIdCard(idCard);
		var monthFromIdCard = getBirthdayMonthFromIdCard(idCard);
		var dayFromIdCard = getBirthdayDayFromIdCard(idCard);
		var birthday_year = birthday.substring(0, 4);
		var birthday_month = birthday.substring(5, 7);
		var birthday_day = birthday.substring(8, 10);
		if (yearFromIdCard != birthday_year) {
			return "出生年份与身份证不符。";
		}
		if (monthFromIdCard != birthday_month) {
			return "出生月份与身份证不符。";
		}
		if (dayFromIdCard != birthday_day) {
			return "出生日期与身份证不符。";
		}
	}
	return null;
}
