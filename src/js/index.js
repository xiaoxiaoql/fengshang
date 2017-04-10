define(['jquery','xqltab'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
		$('#header-center').load('search.html');
		$('.index-nav').load('nav.html');


		//tab切换
		$('.tab').xqltab();

		//克隆第一张实现无缝轮播
		$('.banner').find('li').eq(0).clone().appendTo($('.banner').children('ul'));
		var times;
		var idx=0;
		var $banner=$('.banner');
		var width=$banner.outerWidth();
		var len=$banner.children('ul').children().length;
		$banner.children('ul').css({'width':len*width});
		//轮播图
		//添加分页
		var $page=$('<div/>');
		$page.addClass('page');
		$('.banner').append($page);
		for(var i=0;i<len-1;i++){
			$('<span/>').appendTo($page);
		}

		$('.page').on('click',' span',function(){
			idx=$(this).index()
			show();
		})

		//鼠标移入停止轮播，鼠标移除继续轮播
		$banner.on('mouseenter',function(){
			clearInterval(times);
		}).on('mouseleave',function(){
			times=setInterval(function(){
				idx++;
				show();
			},3000);
		}).trigger('mouseleave');


		//默认第一张添加高亮
		$('.page').children('span').eq(idx).addClass('active');
		function show(){
			if(idx>len-1){
				$('.banner').find('ul').css({left:0})
				idx=1
			}
			if(idx<0){
				idx=len-1;
			}
			if(idx==len-1){
				$('.page').children('span').eq(0).addClass('active')
			.siblings('span').removeClass('active');
			}else{
				$('.page').children('span').eq(idx).addClass('active')
			.siblings('span').removeClass('active');
			}
			//添加动画
			$('.banner').children('ul').animate({left:-idx*width},500);
		}	

		$.ajax({
			url:"http://localhost/fs/src/php/addcart.php",
			dataType:'json',
			success:function(data){
				$('.shopcart').html(data.length);

			}
		})
		$.ajax({
			url:"http://localhost/fs/src/php/goodscart.php",
			dataType:'json',
			success:function(data){
				console.log(data);
				var html='';
				for(var i=0;i<6;i++){
					console.log(data[i])
					html+=` 
					<li>
						<a href="details.html?${data[i].idx}"><img src="../img/list/${data[i].idx}-1.jpg" ></a>
						<p><a href="details.html?${data[i].idx}">${data[i].brand}${data[i].name}</a></p>
						<span class="price">&yen${data[i].price}</span>
					</li>
					`;
				}
				$('.hot-list').children('ul').append(html);
				

			}
		})

	}
})