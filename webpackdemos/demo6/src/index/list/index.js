require('./list.css')
module.exports = {
	name: "list",
	data () {
		return {
		listData : [
		  {
		  	title: "标题",
		  	content: "内容"
		  },
		  {
		  	title: "标题2",
		  	content: "内容2"
		  },
		  {
		  	title: "标题3",
		  	content: "内容3"
		  }
		]
		}
	},
	template: require('./list.html')
}
