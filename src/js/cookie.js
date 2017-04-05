define(function(){
	return function(){
		$('.list li').on('click','a',function(){
			var src=$(this).children('img').attr('src');
			var name=$(this).children('p').text();
			document.cookie='src='+src;
			document.cookie='name='+name;
		})
	}
})