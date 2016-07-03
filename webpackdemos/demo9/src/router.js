module.exports = function(router) {
	router.map({
		'/': {
	      name: "view1",
	      component: require('./js/view1')
	    },
	    '/v2': {
	    	name: "view2",
	    	component: require('./js/view2')
	    }
	})
	router.redirect({
    '*': '/'
    })
}