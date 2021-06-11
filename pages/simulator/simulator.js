// pages/simulator/simulator.js

const db = require('../../utils/db')
const util = require('../../utils/util')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		soul: [{}, {}],
		weapon: [{}, {}, {}, {}, {}],
		shadowPositiv: [{}, {}],
		shadowNegativ: [{
				divinatory: '乾',
				title: '攻击',
				data: []
			},
			{
				divinatory: '坤',
				title: '防御',
				data: []
			},
			{
				divinatory: '离',
				title: '火系',
				data: []
			},
			{
				divinatory: '坎',
				title: '水系',
				data: []
			},
			{
				divinatory: '震',
				title: '雷系',
				data: []
			},
			{
				divinatory: '巽',
				title: '风系',
				data: []
			},
			{
				divinatory: '艮',
				title: '土系',
				data: []
			},
			{
				divinatory: '兑',
				title: '治愈',
				data: []
			}
		],
		shadowCount: 0,
		effect: [],
		showDetail: false,
		curitem: {},
		tabs: [{
				"title": "攻击",
				"title1": "乾",
			},
			{
				"title": "防御",
				"title1": "坤"
			},
			{
				"title": "火系",
				"title1": "离"
			},
			{
				"title": "水系",
				"title1": "坎"
			},
			{
				"title": "雷系",
				"title1": "震"
			},
			{
				"title": "风系",
				"title1": "巽"
			},
			{
				"title": "土系",
				"title1": "艮"
			},
			{
				"title": "治愈",
				"title1": "兑"
			}
		]
	},

	// 遮罩页切换
	hideDetailClick() {
		this.setData({
			showDetail: !this.data.showDetail,
			curitem: {}
		})
	},


	// 点击物品；保存被点击的selector的数据，以便遮罩页可以渲染详情页
	changeCurItem(e) {
		const {
			curitem,
			dataidx,
			datasrc,
			dividx
		} = e.currentTarget.dataset
		curitem.color = util.getBaguaColor(curitem.divinatory)
		this.setData({
			curitem,
			showDetail: !this.data.showDetail,
			selectedItemSrc: datasrc,
			selectedItemIdx: +dataidx,
			selectedShadowBundle: +dividx,
		})
	},

	// 清空对应条目的所有物品
	removeAll(e) {
		const {
			datasrc
		} = e.currentTarget.dataset
		let target = this.data[datasrc]
		let result
		if (datasrc === 'shadowNegativ') {
			result = target.map((item) => {
				item.data = []
				return item
			})
		} else {
			result = target.map(() => {
				return {}
			})
		}
		this.setData({
			[datasrc]: result
		})
	},

	// 删除遮罩页展示的物品
	deleteCurItem(e) {
		const selectedItemSrc = this.data.selectedItemSrc
		const targetBundel = this.data[selectedItemSrc]
		// 如果是被动残影集合，则提取对应卦象中的数据
		if (selectedItemSrc === 'shadowNegativ') {
			targetBundel[this.data.selectedShadowBundle].data.splice(this.data.selectedItemIdx, 1)
			this.subShadowCount()
		} else {
			// 正常删除
			targetBundel[this.data.selectedItemIdx] = {}
		}
		this.setData({
			showDetail: !this.data.showDetail,
			[selectedItemSrc]: targetBundel,
			curitem: {}
		})
	},

	// 云端/本地获取所有的目录
	async getAllCategorys() {
		const soulCategory = await db.getCategoryByType('soul')
		const weaponCategory = await db.getCategoryByType('weapon')
		const shadowCategory = await db.getCategoryByType('shadow')
		const shadowPositivCategory = shadowCategory.filter((item) => item.activ === 'positiv')
		// const negativCategory = this.sortedByDivi(shadowCategory.filter((item)=>item.activ==='negativ'))
		const negativCategory = util.sortedByDivi0(shadowCategory.filter((item) => item.activ === 'negativ'))
		this.setData({
			soulCategory,
			weaponCategory,
			shadowPositivCategory,
			negativCategory
		})
	},
	// 已转移到工具类
	// sortedByDivi(allShadows){
	// 	let foo = this.data.tabs
	// 	return foo.map((title)=>allShadows.filter((item)=>item.divinatory===title.title1))
	// },

	// 添加残影到已选队列
	addShadowToList(e) {
		const {
			curshadow
		} = e.currentTarget.dataset
		const targetDivinatory = curshadow.divinatory
		const targetId = curshadow.id
		let shadowNegativ = this.data.shadowNegativ
		for (let foo of shadowNegativ) {
			if (foo.divinatory === targetDivinatory) {
				// 判断是否已经存在于列表中
				// if (!foo.data.find((item) => item.id === targetId)) {
				if (!this.checkItemExistById(targetId, foo.data)) {
					foo.data.push(curshadow)
					this.addShadowCount()
					break
				}
			}
		}
		this.setData({
			shadowNegativ
		})
	},
	// 添加物品到对应的数组
	addItemTolist(e) {
		const {
			idxincate
		} = e.currentTarget.dataset
		const selectedItemSrc = this.data.selectedItemSrc
		const targetBundel = this.data[selectedItemSrc]
		const target = this.data[`${selectedItemSrc}Category`][idxincate]
		if (!this.checkItemExistById(target.id, targetBundel)) {
			targetBundel[this.data.selectedItemIdx] = target
			this.setData({
				showDetail: !this.data.showDetail,
				[selectedItemSrc]: targetBundel
			})
		}

	},

	// 根据目标id检测是否已在list中，会有弹窗
	checkItemExistById(targetId, list) {
		if (list.find((item) => item.id === targetId)) {
			wx.showToast({
				title: '已有重复物品',
				icon: 'error',
				duration: 1000
			})
			return true
		} else {
			return false
		}
	},

	// 被动残影计数器
	addShadowCount() {
		this.setData({
			shadowCount: this.data.shadowCount + 1
		})
	},

	subShadowCount() {
		this.setData({
			shadowCount: this.data.shadowCount - 1
		})
	},

	// 缓存
	async getLocalStorage() {
		const storage = await wx.getStorageSync('simulator')

		// )
		if (storage) {
			const soul = await wx.getStorageSync('soul')
			const weapon = await wx.getStorageSync('weapon')
			const shadowPositiv = await wx.getStorageSync('shadowPositiv')
			const shadowNegativ = await wx.getStorageSync('shadowNegativ')
			const shadowCount = await wx.getStorageSync('shadowCount')
			console.log('getLocalStorage success')
			this.setData({
				soul,
				weapon,
				shadowPositiv,
				shadowNegativ,
				shadowCount
			})
		} else {
			console.log('no local storage')
		}

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getAllCategorys()
		this.getLocalStorage()
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

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		try {
			wx.setStorageSync('soul', this.data.soul)
			wx.setStorageSync('weapon', this.data.weapon)
			wx.setStorageSync('shadowPositiv', this.data.shadowPositiv)
			wx.setStorageSync('shadowNegativ', this.data.shadowNegativ)
			wx.setStorageSync('shadowCount', this.data.shadowCount)
			wx.setStorageSync('simulator', 1)
			console.log('save storage success')
		} catch (e) {}
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