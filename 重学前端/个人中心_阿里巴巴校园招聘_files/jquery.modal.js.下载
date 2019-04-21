(function($){

	"use strict";

	$.fn.modal = function(options){
		options = $.extend({
			type: "dialog",
			width: 500,
			html: "",
			events: ""
		}, options || {});

		function close($target){
			$target.remove();
		}

		return this.each(function(){

			var $modal = $("<div class=\"modal\"></div>");
			var $overlay = $("<div class=\"overlay\"></div>");
			var content = options.html;
			var height;
			this.close = close;
			this.$modal = $modal;
			this.$overlay = $overlay;
			if (options.type === "confirm") {
				content += "<a href=\"#\" class=\"btn btn-primary\" style=\"margin-top:25px;margin-right:30px;\">确定</a><a href=\"#\" class=\"btn btn-cancel\" style=\"margin-top:25px;\">取消</a>";

				$modal.on("click", ".btn-primary", function(e){
					e.preventDefault();
					options.onConfirm && $.isFunction(options.onConfirm) && options.onConfirm(e);
					close($modal);
					close($overlay);
				});
				$modal.on("click", ".btn-cancel", function(e){
					e.preventDefault();
					close($modal);
					close($overlay);
				});
			}
			$modal.html(content);

			if (options.events) {
				$.each(options.events, function(binds, eventHandle){
					binds = binds.split(" ");
					if(".btn-continue" === binds[1]) {
						$modal.on(binds[0], binds[1], function(e){
							eventHandle(e);
						});
					} else {
						$modal.on(binds[0], binds[1], function(e){
							eventHandle(e);
							close($modal);
							close($overlay);
						});
					}
				})
			}

			$modal.css({
				"width": options.width,
				"margin-left": - options.width / 2
			});

			$("body").append($modal, $overlay);

			height = $modal.outerHeight();

			$modal.css({
				"margin-top": - height / 2
			});

		});
	}

})(jQuery)