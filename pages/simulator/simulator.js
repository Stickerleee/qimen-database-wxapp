// pages/simulator/simulator.js

const db = require('../../utils/db')
const util = require('../../utils/util')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		soul: [{
			"id": "5711",
			"name": "箕灵",
			"property": "风系",
			"divinatory": "巽",
			"tags": [
				"冷却"
			],
			"effect": ["没有“箕灵”状态时，每隔12秒获得“箕灵”：下两个释放的角色技能冷却缩减30%"],
			"effect1": "风攻风防+15%",
			"info": "",
			"stepgrow": "冷却缩减+0.3%",
			"step20": "内置冷却-2秒",
			"step60": "30%概率改为减少下三个释放的角色技能的冷却时间",
			"stepfull": "没有“箕灵”状态时，每隔10秒获得“箕灵”：下两个释放的角色技能冷却缩减48%；有30%概率获得“箕灵”：下三个释放的角色技能冷却缩减48%",
			"idx": 12,
			"type": "soul",
			"icon": "/image/soul/icon/57112.png",
			"pic0": "/image/soul/more-sizes/A_57111.png",
			"pic1": "/image/soul/more-sizes/A_57112.png",
			"pic2": "/image/soul/more-sizes/A_57113.png",
			"text0": "攻击+100，攻击+100，攻击+100，攻击+100",
			"text1": "攻击+100，攻击+100，攻击+100，攻击+100",
			"text2": "攻击+100，攻击+100，攻击+100，攻击+100"
		}, {
			"id": "5711",
			"name": "箕灵",
			"property": "风系",
			"divinatory": "巽",
			"tags": [
				"冷却"
			],
			"effect": ["没有“箕灵”状态时，每隔12秒获得“箕灵”：下两个释放的角色技能冷却缩减30%"],
			"effect1": "风攻风防+15%",
			"info": "",
			"stepgrow": "冷却缩减+0.3%",
			"step20": "内置冷却-2秒",
			"step60": "30%概率改为减少下三个释放的角色技能的冷却时间",
			"stepfull": "没有“箕灵”状态时，每隔10秒获得“箕灵”：下两个释放的角色技能冷却缩减48%；有30%概率获得“箕灵”：下三个释放的角色技能冷却缩减48%",
			"idx": 12,
			"type": "soul",
			"icon": "/image/soul/icon/57112.png",
			"pic0": "/image/soul/more-sizes/A_57111.png",
			"pic1": "/image/soul/more-sizes/A_57112.png",
			"pic2": "/image/soul/more-sizes/A_57113.png",
			"text0": "攻击+100，攻击+100，攻击+100，攻击+100",
			"text1": "攻击+100，攻击+100，攻击+100，攻击+100",
			"text2": "攻击+100，攻击+100，攻击+100，攻击+100"
		}],
		weapon: [{
			"idx": 2,
			"id": "60337",
			"type": "weapon",
			name: "山河社稷图",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/weapon/60305.png",
			"effect": ["水攻水防+5", "对敌人施加的负面状态的持续时间+20%"],
			"effectUpdata": ["", ""],
			"tags": ["增益"],
			"lockEffect": ["风攻风防+", "水伤加成+", "雷攻雷防+", "风伤加成+"],
			"baguaIcon": "/image/bagua/icon/bagua_kan.png",
		}, {
			"idx": 2,
			"id": "60505",
			"type": "weapon",
			"name": "精魂·蓝面蛛",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/weapon/60305.png",
			"effect": ["水攻水防+5", "残影充能加成+12% （水曜日时1.5倍效果）"],
			"effectUpdata": ["", ""],
			"tags": ["增益"],
			"lockEffect": ["风攻风防+", "", "雷攻雷防+", ""],
			"baguaIcon": "/image/bagua/icon/bagua_kan.png",
		}, {}, {}, {}],
		shadowPositiv: [{
			"idx": 0,
			"id": "5111",
			"type": "shadow",
			"name": "玉净瓶",
			"activ": "positiv",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/62003.png",
			"baguaIcon": "/image/bagua/icon/bagua_dui.png",
			"effect": ["恢复40%生命值上限的生命值"],
			"effectUpdata": ["恢复44%生命值上限的生命值"],
			"stackUpdata": ["恢复84%生命值上限的生命值"],
			"tags": ["恢复"]
		}, {}],
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
				data: [{
						"idx": 0,
						"id": "60022",
						"type": "weapon",
						"name": "沉香墨玉",
						"property": "水",
						"divinatory": "坎",
						"icon": "/image/weapon/60022.png",
						"effect": ["水攻水防+5", "造成暴击时，有50%的几率增加60%的暴击伤害，持续5秒，20秒冷却时间。"],
						"effectUpdata": ["水攻水防+25", "造成暴击时，有50%的几率增加120%的暴击伤害，持续5秒，20秒冷却时间。"],
						"tags": ["爆发", "增益"],
						"vipProp": ["闪避率+5% <侯淑彦专属>"],
						"vipRole": 0,
						"lockEffect": ["风攻风防+20", "造成暴击时，有100%的几率增加60%的暴击伤害，持续5秒，20秒冷却时间。", "雷攻雷防+20", "30%几率使全队获得"],
						"baguaIcon": "/image/bagua/icon/bagua_kan.png",
					},
					{
						"idx": 1,
						"id": "60021",
						"type": "weapon",
						"name": "精美法器",
						"property": "水",
						"divinatory": "坎",
						"icon": "/image/weapon/60021.png",
						"effect": ["水攻水防+5", "使用角色技能或普攻时，有12%几率生成一根冰锥攻击敌人，造成100%水攻的伤害"],
						"effectUpdata": ["", ""],
						"tags": ["爆发", "控制"],
						"vipProp": ["水攻+5% <侯淑彦专属>"],
						"vipRole": 0,
						"lockEffect": ["风攻风防+", "生成巨型冰锥会穿透敌人", "雷攻雷防+", "8%几率生成两根冰锥"],
						"baguaIcon": "/image/bagua/icon/bagua_kan.png",
					}
				]
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
				data: [{
					"idx": 2,
					"id": "60306",
					"type": "weapon",
					"name": "空明油",
					"property": "土",
					"divinatory": "艮",
					"icon": "/image/weapon/60305.png",
					"effect": ["土攻土防+5", "每隔10秒，随机定身1个目标，持续2秒，并造成100%土攻伤害"],
					"effectUpdata": ["", ""],
					"tags": ["控制"],
					"lockEffect": ["雷攻雷防+", "", "火攻火防+", ""],
					"baguaIcon": "/image/bagua/icon/bagua_gen.png",
				}]
			},
			{
				divinatory: '兑',
				title: '治愈',
				data: []
			}
		],
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
			result = target.map(() => {})
		}
		console.log(result)
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
		const negativCategory = util.sortedByDivi0(shadowCategory)
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
				if(!this.checkItemExistById(targetId,foo.data)){
					foo.data.push(curshadow)
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
		if (!this.checkItemExistById(target.id,targetBundel)){
			targetBundel[this.data.selectedItemIdx] = target
			this.setData({
				showDetail: !this.data.showDetail,
				[selectedItemSrc]: targetBundel
			})
		}
		
	},

	// 根据目标id检测是否已在list中，会有弹窗
	checkItemExistById(targetId,list){
		if (list.find((item) => item.id === targetId)){
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

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		this.getAllCategorys()
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