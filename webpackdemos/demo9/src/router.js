module.exports = function(router) {
	router.map({
		'/': {
	      name: "view1",
	      component: function (resolve) {
    			require(['./js/view1'], resolve)
    		}
	    },
	    '/v2': {
	    	name: "view2",
	    	component: function (resolve) {
    			require(['./js/view2'], resolve)
    		}
	    }
	})
	router.redirect({
    '*': '/'
    })
}