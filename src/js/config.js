requirejs.config({
	baseUrl:'../js',
	paths:{
		'jquery':'jquery-3.1.1',
		'xqltab':'jqurey.xqltab'


	},
	shim:{
		// 'ajax':{
		// 	exports:'ajax'
		// },
		 'xqltab': ["jquery"]

	}
	

});
