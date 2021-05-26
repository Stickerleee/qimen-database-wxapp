// pages/souls-category/souls-category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categorys:[]
    },

    // 跳转到物品详情页
    showDetail: function (event) {
        console.log(event);
        wx.navigateTo({
          url: '../soul-detail/soul-detail',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 加载数据
        var a = require('../../data/souls.js').data
        this.setData({
            categorys:a.data
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