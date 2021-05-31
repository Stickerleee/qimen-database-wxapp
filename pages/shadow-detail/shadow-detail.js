// pages/shadow-detail/shadow-detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: { 

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (event) {
        const {type, idx} = event
        // 根据type选择数据来源
        const srcStr = type==='weapon' ? '../../data/weapons.js' : '../../data/shadows.js'
        const curData = require(srcStr)
        // 解包数据
        const curDataSrc = type==='weapon' ? curData.weapons.data[idx] : curData.shadows.data[idx]
        this.setData({
            curDataSrc
        })
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