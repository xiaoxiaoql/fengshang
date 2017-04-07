define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
		var arr=[];

		//分页默认显示第一页内容
		var page=0;
		//点击分页效果
		var $page=$('.page');
		show();

		//显示隐藏效果
		$('.main-top ul li').has('ul').mouseenter(function(){
			$(this).children('ul').show();
		}).mouseleave(function(){
			$(this).children('ul').hide();
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

		
		console.log($page)
		$page.on('click','span a',function(){
			console.log($(this).index())
			page=$(this).index();
			show();
			
		}).on('click','.pre',function(){
			page--;
			show();
			

		}).on('click','.next',function(){
			page++;
			show();

		})


		function show(){
			if(page<0){
				page=0;
				$(this).css('color','#ccc');
			}
			var len=$page.children('span').children().length;
		 	if(page>len-1){
				page=len-1;
				$(this).css('color','#ccc');
			}
			$page.children('span').children().eq(page).addClass('curren')
			.siblings().removeClass('curren');
			ajax();

		}
		$('.list')on('click','a',function(){
			var cookieidx=$(this).attr('guid-data');
			arr.push(cookieidx); 
			var now=new Date();
			now.setDate(now.getDate()+30)
			document.cookie='goods='+JSON.stringify(arr)+';expires'+now;
		})


		//封装把数据库内容写入页面的函数
		function ajax(){
			$.ajax({
				url:'http://localhost/fs/src/php/itemClasslist',
				data:{page:page},
				dataType:'json',
				success:function(res){
					console.log($page);
					$('.rightsection').children('ul').html('');
					res.forEach(function(item){
					var li=$('<li><a href="details.html?'+item.idx+'"target="_blank" guid-data="'+item.idx+'"><img src="../img/list/'+item.url+'"></a><p class="name"><a href="details.html?'+item.idx+'">'+item.brand+item.name+'</a></p><span class="price">&yen'+item.price+'</span><div class="buybtn"><a href="#">立即订购</a></div></li>')
					$('.rightsection').children('ul').append(li);

					})


				}
			})

		}
		$('.rightsection ul').on('click','li',function(){
			$(this).children('a').addClass('active');
			$(this).siblings('li').children('a').removeClass('active');

		})

	}

})