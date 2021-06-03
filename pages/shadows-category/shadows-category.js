const {diviName} = require('../../utils/util')
const util = require('../../utils/util')
// const db = require('../../utils/db')

// pages/shadows-category/shadows-category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        curIdx: 0, // 当前数据索引
        tabDataSrc:[], //当前渲染数据
        allshadows:{},  // 所有的数据
        tabs : [{title:'主动残影'},{title:'被动残影'}],
	},
	// 侧边栏点击触发函数
    bindVtabClick: function(e) {
        // 获得索引值
		const nextIdx = e.detail.detail.index
        const str = diviName[nextIdx-1]
        this.loadDiviItems(this.data.allshadows,str,nextIdx)
    },
    // 根据对象数据和卦象过滤出相关残影,并同步数据
    loadDiviItems:function(dataObj,diviName,idx){
        const filterShadows = idx!==0 ? dataObj.filter((item)=>item.divinatory===diviName) : dataObj
        const positivShadows = filterShadows.filter((item)=>item.class==='positiv')
        const negativShadows = filterShadows.filter((item)=>item.class==='negativ')
        this.setData({
            tabDataSrc:[positivShadows,negativShadows],
            curIdx:idx
        })
    },

    // 云端获取残影数据
    async getCategory(){
        const db = wx.cloud.database()
        const allshadows = (await db.collection('shadow').get()).data
        const positivShadows = allshadows.filter((item)=>item.class==='positiv')
        const negativShadows = allshadows.filter((item)=>item.class==='negativ')
        this.setData({
            allshadows,
            tabDataSrc:[positivShadows,negativShadows]
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // const allshadows = require('../../data/shadows').shadows.data
        // const positivShadows = allshadows.filter((item)=>item.class==='positiv')
        // const negativShadows = allshadows.filter((item)=>item.class==='negativ')
        // this.setData({
        //   	allshadows,
        //     tabDataSrc:[positivShadows,negativShadows]
        // })
        this.getCategory()
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