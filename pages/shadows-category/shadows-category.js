const util = require('../../utils/util')
const db = require('../../utils/db')

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
	// 侧边栏点击触发目录更新
    bindVtabClick: function(e) {
        // 获得索引值
        const nextIdx = e.detail.detail.index
        const diviName = e.detail.title
        this.loadDiviItems(this.data.allshadows,diviName,nextIdx)
    },

    // 分类主动和被动残影
    filterPosAndNeg: function(items){
        const positivShadows = items.filter((item)=>item.activ==='positiv')
        const negativShadows = items.filter((item)=>item.activ==='negativ')
        return [positivShadows,negativShadows]
    },


    // 根据对象数据和卦象过滤出相关残影,同步并渲染数据
    loadDiviItems:function(dataObj,diviName,idx){
        const filterShadows = idx!==0 ? dataObj.filter((item)=>item.divinatory===diviName) : dataObj
        const tabDataSrc = this.filterPosAndNeg(filterShadows)
        this.setData({
            tabDataSrc,
            curIdx:idx
        })
    },

    // 云端获取残影数据
    getCategory(){
        const allshadows = db.getCategoryByType('shadow')
        console.log('local',allshadows)
        const tabDataSrc = this.filterPosAndNeg(allshadows)
        console.log('local',tabDataSrc)
        this.setData({
            allshadows,
            tabDataSrc
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // const allshadows = require('../../data/shadows').shadows.data
        // const positivShadows = allshadows.filter((item)=>item.activ==='positiv')
        // const negativShadows = allshadows.filter((item)=>item.activ==='negativ')
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