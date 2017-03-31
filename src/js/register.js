define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
		var username;
		var pasw;
		$(':submit').click(function(){
			username=$('#user').val();
			pasw=$('#pasword').val();
			$.ajax({
				url:'http://localhost/fs/src/php/register.php',
				data:{username:username,pasw:pasw},
				type:'post',
				// dataType:'json',
				success:function(res){
					console.log(res);

				}
			})
		})
		
	}

})