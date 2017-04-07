define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
		var str=location.href;
		var num=str.indexOf('?');
		var $details=$('.details');
		//获取商品编号
		var id=str.slice(num+1);
		console.log(id);
		var arr=[];
		var data=new Promise(function(resolve,reject){
			$.ajax({
				url:"http://localhost/fs/src/php/itemClasslist.php",
				dataType:'json',
				success:function(res){
					console.log(res);
					res.forEach(function(item){
						if(id==item.idx){
							$('.main-smallimg').children('img').attr('src','../img/list/'+item.idx+'-2-1.jpg')	;
							$('.main-img').children('img').attr('src','../img/list/'+item.idx+'-3-1.jpg');
							resolve(item.idx);
							$details.children('.details-top').children('h2').text(item.brand+item.name);
							$details.children('.idx').children('span').text(item.idx);
							$details.children('.price').children('span').html('&yen'+item.price)
						}
						
					})
				}
			})

		})

		data.then(function(res){
			$('.cartbtn').click(function(){
				arr.push(res);
				$('.tips').show();
				$.ajax({
					url:'http://localhost/fs/src/php/addcart.php',
					data:{num:id},
					success:function(res){
						console.log(res);
					}
				})
			})
		})
		
	}
})