// pages/shadow-detail/shadow-detail.js

const util = require('../../utils/util')
const db = require('../../utils/db')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        greatNum:['壹','贰','叁','肆','伍']
    },

    // 获取数据详情
    getItemDetail(type,id){
        const itemDetail =  db.getItemDetailById(type,id)
        const {divinatory} = itemDetail
        this.setData({
            ...itemDetail,
            color: util.getBaguaColor(divinatory)
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (event) {
        const {type, id} = event
        this.getItemDetail(type,id)
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