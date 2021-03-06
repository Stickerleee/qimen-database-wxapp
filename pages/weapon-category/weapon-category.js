// pages/weapon-category/weapon-category.js
const db = require('../../utils/db')
const util = require('../../utils/util')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		curIdx: 0,
		curTabData: [],
		allWeapons: []
	},
	// 侧边栏点击事件
	bindVtabClick: function (e) {
		const nextIdx = e.detail.detail.index
		this.renderByCuridx(nextIdx)
		
	},

	renderByCuridx(idx){
        const diviName = util.vtabs[idx].title1
        const filterWeapons = idx === 0 ? this.data.allWeapons : this.data.allWeapons.filter((item) => item.divinatory === diviName)
		this.setData({
			curIdx: idx,
			curTabData: filterWeapons
		})
	},
	
	// 云端获取灵器目录
	async getWeaponCate() {
		const allWeapons = await db.getCategoryByType('weapon')
		this.setData({
			allWeapons
		})
		this.renderByCuridx(this.data.curIdx)
	},


	refreshData() {
		wx.startPullDownRefresh()
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// const allWeapons = require('../../data/weapons').weapons.data
		// this.setData({
		// 	allWeapons,
		// 	curTabData:allWeapons
		// })
		wx.showNavigationBarLoading()
		this.getWeaponCate()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		wx.hideNavigationBarLoading()
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		this.getWeaponCate()
		wx.stopPullDownRefresh()
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})