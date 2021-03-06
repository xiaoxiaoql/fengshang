define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
		$('#header-center').load('search.html');
		$('.index-nav').load('nav.html');
		/*          浏览记录        */
		/*     浏览记录     */
		var goodslist=[];
		//根据cookie写浏览记录
		// console.log(document.cookie)
		var cookie=document.cookie.split(';');//字符串变数组
		// console.log(cookie);
		cookie.forEach(function(item){
			goodslist=item.split('=');
			if(goodslist[0]=='goods'){
				goodslist=JSON.parse(goodslist[1]);
				console.log(goodslist);
				// console.log(goodslist);
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
					for(var i=0;i<goodslist.length;i++){
						data.forEach(function(item){
							if(item.idx==goodslist[i]){
								html+=`
								<li>
								<a href="detaile.html?${item.idx}"><img src="../img/list/${item.idx}-1.jpg" alt=""></a>
								<span><a href="detaile.html?${item.idx}">${item.brand}${item.name}</a></span>
								</li>
								`;
							}
						})
					}
					//用html同时有插入信息前先清空的功能
					$('.historylist').find('ul').html(html);
					
				}
			})
		}



		var str=location.href;
		var num=str.indexOf('?');
		var $details=$('.details');
		//获取商品编号
		var id=str.slice(num+1);
		console.log(id);
		var arr=[];
		var data=new Promise(function(resolve,reject){
			$.ajax({
				url:"http://localhost/fs/src/php/goodscart.php",
				dataType:'json',
				success:function(res){
					console.log(res);
					res.forEach(function(item){
						if(id==item.idx){
							$('.main-smallimg').html($('<img src="../img/list/'+item.idx+'-2-1.jpg" data-img="../img/list/'+item.idx+'-2-1">'));
							$('.main-img').html($('<img src="../img/list/'+item.idx+'-3-1.jpg" >'));
							$details.children('.details-top').children('h2').text(item.brand+item.name);
							$details.children('.idx').children('span').text(item.idx);
							$details.children('.price').children('span').html('&yen'+item.price)
							var url=isHasImg('../img/list/'+item.idx+'-4-1.jpg');
							if(url){
								console.log(url)
								$('.adv').children().eq(0).append('<img src="../img/list/'+item.idx+'-4-1.jpg">');

							}
							resolve(item.idx);
						}
						
					})
				}
			})

		})

		data.then(function(res){
			$('.details').on('click','.cartbtn',function(){
				arr.push(res);
				$('.tips').show();
				$.ajax({
					url:'http://localhost/fs/src/php/addcart.php',
					// data:{num:id},
					dataType:'json',
					success:function(res){
						//若购物车中商品存在，则不再添加 并且出现提示
						for(var i=0;i<res.length;i++){
							if(res[i].idx===id){
								$('.tips').find('p').text('购物车中已存在该商品')
								.css('color','#f00');
								break;
							}
						}
						if(i==res.length){
							$.ajax({
								url:'http://localhost/fs/src/php/addcart.php',
								data:{num:id,check:1}
							})
						}
					}
				})
			})
			.on('click','.closebtn',function(){
				$('.tips').hide();
			});
			
			$('.details').on('click','.add',function(){
				var val=$(this).prev().val();
				$(this).prev().val(Number(val)+1);

			}).on('click','.reduce',function(){
				var val=$(this).next().val();
				if(val=1){
					val=2;
				}
				$(this).next().val(Number(val)-1);

			})
			//放大镜效果
			zoom();

		});
		
		

		$('.adv').children().eq(0).show().siblings().hide()
		$('.title-nav').on('click','span',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).closest('.f-main').find('.adv').children().eq($(this).index()).show()
			.siblings().hide();
		})

		//封装放大镜函数
		function zoom(){
			var $smallcon=$('.main-smallimg');
			var bigtop=$smallcon.offset().top;
			var bigleft=$smallcon.offset().left;
			//大图小图比例
			var pri=560/380;
			//小图宽高
			var swidth=$smallcon.outerWidth();
			var sheight=$smallcon.outerHeight();
			//大图宽高
			var bwidth=swidth*pri;
			var bheight=sheight*pri;
			var bigurl=$smallcon.children('img').attr('data-img');
			$bigcon=$('<div/>').addClass('bigcon');
			$zoom=$('<div/>').addClass('zoom');
			$smallcon.append($zoom);
			$('body').append($bigcon);
			$('<img src="'+bigurl+'">').appendTo($bigcon);
			$zoom.css({width:swidth/pri,height:sheight/pri})
			$bigcon.css({width:400,height:400,top:bigtop,left:bigleft+swidth+20});

			//鼠标移入移除

			$smallcon.mouseenter(function(){
				$zoom.show();
				$bigcon.show();
				
			}).mousemove(function(e){
				var oleft=e.pageX-bigleft-$zoom.width()/2;
				var otop=e.pageY-bigtop-$zoom.height()/2;
				//边界处理
				if(oleft < 0){
				    oleft = 0;
				}else if(oleft > swidth-swidth/pri){
				    oleft = swidth- swidth/pri
				}

				if(otop < 0){
				    otop = 0;
				}else if(otop > sheight - sheight/pri){
				    otop = sheight - sheight/pri;
				}

				$zoom.css({left:oleft,top:otop});
				$bigcon.children('img').css({left:-oleft*pri,top:-otop*pri})
			})
			.mouseleave(function(){
				$zoom.hide();
				$bigcon.hide();
			})

		}
		
		function isHasImg(url)  
		    {      
		        var xmlHttp ;  
		        if (window.ActiveXObject)  
		         {  
		          xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
		         }  
		         else if (window.XMLHttpRequest)  
		         {  
		          xmlHttp = new XMLHttpRequest();  
		         }   
		        xmlHttp.open("get",url,false);  
		        xmlHttp.send();  
		        if(xmlHttp.status==404)  
		        return false;  
		        else  
		        return true;  
		    }   

		


	}
})