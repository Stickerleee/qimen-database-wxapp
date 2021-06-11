// index.js

Page({
	data: {
		test: []
	},
	onLoad: function () {
		let data = require('../../data/weapons').weapons.data
		
		data.map((item,index) => {
			item.idx = index
			item.icon = "/image/weapon/"+ item.id +".png"
			item.effectUpdata = item.effect
			delete item.baguaIcon
		})
		this.setData({
			test:data
		})
	}
})