// app.js


const db = require('./utils/db')

App({
	onLaunch() {
		this.initData()
		// 展示本地存储能力
		const logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)
		
		// 登录
		// wx.login({
		//   success: res => {
		//     // 发送 res.code 到后台换取 openId, sessionKey, unionId
		//   }
		// })
	},
	globalData: {
		userInfo: null
	},
	async initData() {
		const {
			soul,
			weapon,
			shadow
		} = await db.getAlldata()
		this.globalData = {
			soul,
			weapon,
			shadow
		}
		console.log('Data download success: ', this.globalData)
	}
})