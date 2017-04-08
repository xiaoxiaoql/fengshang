define(['jquery','xqltab'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');

		var $table=$('.goodscart');
		var cart=new Promise(function(resolve,reject){
			$.ajax({
				url:"http://localhost/fs/src/php/addcart.php",
				dataType:'json',
				success:function(res){
					resolve(res);

				}
			})

		});

		cart.then(function(res){
				$.ajax({
					url:'http://localhost/fs/src/php/goodscart.php',
					dataType:'json',
					success:function(data){
						console.log(data)
						console.log(res)
						//购物车商品总数
						$('.cartTotal').find('.kind').text(res.length)
						//添加进入购物车的商品信息
						var arr=[];
						for(let i=0;i<res.length;i++){
							for(var j=0;j<data.length;j++){
								if(data[j].idx==res[i].idx){
								arr.push(data[j])

								}
							}
						}
						//总金额
						var total=0;
						//遍历数组 把信息写入页面
						var html='';
						var $tbody=$table.children('tbody');
						arr.forEach(function(item){
							 html+=`<tr>
						 	<td><input type="checkbox" ></td>
						 	<td><img src="../img/list/${item.idx}-3-1" > <span><a href="datails?${item.idx}">${item.brand}${item.name}</a></span></td>
						 	<td class="guidx">${item.idx}</td>
						 	<td class="price">&yen${item.price}</td>
						 	<td>有库存</td>
						 	<td>是</td>
						 	<td class="number"><span class='add'>+</span><input type="text" value="1"/><span class="sub">-</span></td>
						 	<td class="sum">&yen${item.price}</td>
						 	<td><a href="#">收藏</a><a href="#" class="del">删除</a></td>
						 </tr>`;
						 total+=Number(item.price);

						})
						$tbody.html(html);
						$('.total').text(total);
						return new Promise(function(resolve,reject){
							resolve();

						})

					}
				})
		})
		.then(function(){
			//点击删除当行
			$table.on('click','.del',function(){
				$(this).closest('tr').remove();
				var delid=$(this).closest('td').siblings('.guidx').text();
				//发送请求，删除数据库里的信息
				$.ajax({
					url:'http://localhost/fs/src/php/addcart.php',
					data:{del:delid},
					success:function(data){
					}

				})
			})
			$('.all').on('click',function(){
				if($(this).prop('checked')){
					$table.children('tbody').find(':checkbox').each(function(){
						$(this).prop('checked',true);
					});
				}else{
					$table.children('tbody').find(':checkbox').each(function(){
						$(this).prop('checked',false);
					});
				}

			});

			//商品数量的加减 金额改变
			$table.on('click','.add',function(){
				var goodsval=$(this).next('input').val();
				$(this).next('input').val(Number(goodsval)+1);
				var subtotal=Number($(this).next('input').val())*Number($(this).closest('tr').find('.price').text().slice(1));
				$(this).closest('tr').find('.sum').text(subtotal);
				//总计
				// var zj=0;
				// $table.find('tr').each(function(){
				// 	zj+=Number($(this).children('.price').text().slice(1))*Number($(this).find('input').val());
				// })
				// $('.total').each(function(){
				// 	$(this).text(zj);
				// })

			}).on('click','.sub',function(){
				var goodsval=$(this).prev('input').val();
				if(Number(goodsval)<=1){
					$(this).prev('input').val(1);
				}else{
					$(this).prev('input').val(Number(goodsval)-1);
				}
				var subtotal=Number($(this).prev('input').val())*Number($(this).closest('tr').find('.price').text().slice(1));
				$(this).closest('tr').find('.sum').text(subtotal);
			})


		})
		
	}
})