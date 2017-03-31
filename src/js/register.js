define(['jquery'],function($){
	return function(){
		$('#header-top').load('header.html');
		$('#footer').load('footer.html');
	}

})