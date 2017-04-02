requirejs.config({
	baseUrl:'../js',
	paths:{
		'jquery':'jquery-3.1.1'
	},
	paths:{
		'jquery':'jquery-3.1.1',
		'xqltab':'jqurey.xqltab.js'
	},
	shim:{
		'ajax':{
			exports:'ajax'
		},
		'xqltab':['jquery']
	}
	

});
