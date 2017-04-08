define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
		$('#header-center').load('search.html');
		$('.index-nav').load('nav.html');


		/*     浏览记录     */
		var arr=[];
		//根据cookie写浏览记录
		// console.log(document.cookie)
		var cookie=document.cookie.split(';');//字符串变数组
		// console.log(cookie);
		cookie.forEach(function(item){
			arr=item.split('=');
			if(arr[0]=='goods'){
				arr=JSON.parse(arr[1]);
				// console.log(arr);
			}
		})
		writecookie();
		function writecookie(){
			$.ajax({
				url:'http://localhost/fs/src/php/goodscart.php',
				dataType:'json',
				success:function(data){//数据处理
					console.log(data);
					var html='';
					for(var i=0;i<arr.length;i++){
						data.forEach(function(item){
							if(item.idx==arr[i]){
								html+=`
								<li>
									<a href="#"><img src="../img/list/${item.url}" alt=""></a>
									<p class="name">
										<a href="#" >${item.brand}${item.name}</a>
									</p>
									
								</li>
								`;
							}
						})
					}
					//用html同时有插入信息前先清空的功能
					$('.history').find('ul').html(html);
					
				}
			})
		}

		//清空浏览记录
		$('.history').on('click','.delbtn',function(){
			//清空cookie里的内容
			arr=[];
			writecookie();

		})


		//显示隐藏效果
		$('.main-top ul li').has('ul').mouseenter(function(){
			$(this).children('ul').show();
		}).mouseleave(function(){
			$(this).children('ul').hide();
		})

		//品牌列表的展开收起
		var $brandNav=$('.brand-nav');
		$brandNav.on('click','.moreshow',function(){
			 $brandNav.css({height:100});
			 $(this).hide().siblings('.morehide').show();

		})
		.on('click','.morehide',function(){
			 $brandNav.css({height:34});
			 $(this).hide().siblings('.moreshow').show();

		});



		/*        分页     */
		//分页默认显示第一页内容
		var page=0;
		//点击分页效果
		var $page=$('.page');
		show();
		$.ajax({
			url:'../js/list.json',
			success:function(res){
				console.log(res.brand.length);
				for(var i=0;i<res.brand.length;i++){
					var $li=$('<li><a href="#">'+res.brand[i]+'</a></li>');
					$brandNav.children('ul').append($li);
				}

			}
		});
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
		//封装分页显示函数
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


		
		$('.list').on('click','a',function(){
			var cookieidx=$(this).attr('guid-data');
			//判断cookie里面是否有相同的商品号
			for(var i=0;i<arr.length;i++){
				if(cookieidx===arr[i]){
					break;
				}
			}
			if(i==arr.length){
				arr.push(cookieidx);
			}
			// arr.forEach(function(item){
			// 	if(cookieidx!==item){
			// 		arr.push(cookieidx); 
			// 	}
			// })
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
					var tex='';
					$('.rightsection').children('ul').html('');
					res.forEach(function(item){
						// var li=$('<li><a href="details.html?'+item.idx+'"target="_blank" guid-data="'+item.idx+'"><img src="../img/list/'+item.url+'"></a><p class="name"><a href="details.html?'+item.idx+'">'+item.brand+item.name+'</a></p><span class="price">&yen'+item.price+'</span><div class="buybtn"><a href="#">立即订购</a></div></li>')
						// $('.rightsection').children('ul').append(li);
						tex+=`
							<li>
			 					<a href="details.html?${item.idx}" target="_blank" guid-data="${item.idx}"><img src="../img/list/${item.url}" alt=""></a>
			 					<p class="name"><a href="details.html?${item.idx}">${item.brand}${item.name}</a></p>
			 					<span class="price">&yen${item.price}</span>
			 					<div class="buybtn"><a href="details.html?${item.idx}">立即订购</a></div>
			 				</li>
						`;

					})
					$('.rightsection').children('ul').html(tex);

				}
			})

		}
		$('.rightsection ul').on('click','li',function(){
			$(this).children('a').addClass('active');
			$(this).siblings('li').children('a').removeClass('active');

		})

	}

})