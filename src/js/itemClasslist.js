define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');

		//显示隐藏效果
		// console.log($('.main-top'));
		// border:1px dotted #f8784b;
		$('.main-top ul li').has('ul').mouseenter(function(){
			$(this).children('ul').show();
			// $(this).css({border:1px dotted #f8784b});
			console.log($(this))
		}).mouseleave(function(){
			$(this).children('ul').hide();
			// $(this).css({border:0});
		})

		var $brandNav=$('.brand-nav');
		$.ajax({
			url:'../js/list.json',
			success:function(res){
				console.log(res.brand.length);
				for(var i=0;i<res.brand.length;i++){
					var $li=$('<li><a href="#">'+res.brand[i]+'</a></li>');
					$brandNav.children('ul').append($li);
				}

			}
		})


		//品牌列表的展开收起
		$brandNav.on('click','.moreshow',function(){
			 $brandNav.css({height:100});
			 $(this).hide().siblings('.morehide').show();

		})
		.on('click','.morehide',function(){
			 $brandNav.css({height:34});
			 $(this).hide().siblings('.moreshow').show();

		});
		
		

	}

})