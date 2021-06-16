// pages/souls-category/souls-category.js
const db = require('../../utils/db')

Page({

    /**
     * 页面的初始数据
     */
    data: {},


    // 云端获取神魂数据
    async getSoulCate() {
        const categorys = await db.getCategoryByType('soul')
        this.setData({
            categorys
        })
    },

    // 神魂项目点击事件
    showDetail: function (event) {
        const {
            type,
            id
        } = event.currentTarget.dataset
        wx.navigateTo({
            url: '../soul-detail/soul-detail?type=' + type + '&id=' + id
        })
    },
    refreshData(){
        wx.startPullDownRefresh()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
        this.getSoulCate()
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