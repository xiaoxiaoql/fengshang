define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
		var str=location.href;
		var num=str.indexOf('?');
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
						console.log(item.idx);
						if(id==item.idx){
							$('.main-smallimg')	.children('img').attr('src','../img/list/'+item.idx+'-2-1.jpg')	;
							$('.main-img').children('img').attr('src','../img/list/'+item.idx+'-3-1.jpg');
							resolve(item.idx);

						}
						
					})
				}
			})

		})

		data.then(function(res){
			$('.cartbtn').click(function(){
				arr.push(res);
				var now=new Date();
				now.setDate(now.getDate()+999);
				document.cookie='goods='+JSON.stringify(arr)+';expires='+now;
			})
		})
		
	}
})