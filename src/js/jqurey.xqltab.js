;(function($){
	//tab标签切换插件
	$.fn.xqltab = function(opt){
		var defaults = {
			
			title:['tab1','tab2','tab3'],
		};
		for(var attr in opt){
			defaults[attr]=opt[attr];
		};

		//根据数据生成标签
		var html='';
		defaults.title.forEach(function(item){
			html+=`<span>${item}</span>`;
		})
		this.children().eq(0).html(html);


		//给第一个添加高亮
		this.children('.tab-title').children().first().addClass('active');
		this.children('.content').children().not(':first').hide();


		this.on('mouseenter','span',function(){
			// 事件委托
				// 这里的this表示事件源对象
				$(this).addClass('active').siblings().removeClass('active');

				// 获取this所在同辈元素中的索引值
				var idx = $(this).index();
				// 动画
				$('.tab').children('.content').children().eq(idx).show().siblings().hide();
		})
	}
})(jQuery);

