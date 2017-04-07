define(function(){
	return function(){
		$('.list li').on('click','a',function(){
			var guidx=$(this).attr(guidx);
			var now=new Date();
			now.setDate(now.getDate()+30);
			document.cookie='cookies='+guidx+';expires'+now;
		})
	}
})