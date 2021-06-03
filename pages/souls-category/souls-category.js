// pages/souls-category/souls-category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },


    // 云端获取神魂数据
    async getSoulCate(){
        const db = wx.cloud.database()
        const categorys = (await db.collection('soul').get()).data
        this.setData({
            categorys
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 加载数据
        // const categorys = require('../../data/souls.js').data.data
        // this.setData({
        //     categorys
        // })
        this.getSoulCate()
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