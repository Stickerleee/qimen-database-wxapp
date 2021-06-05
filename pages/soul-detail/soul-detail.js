// pages/soul-detail/soul-detail.js
const db = require('../../utils/db')
const util = require('../../utils/util')

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    // async getSoulDetail(id){
    //     const db = wx.cloud.database()
    //     const _ = db.command
    //     const detail = (db.collection('soul').where({
    //         id: _.eq(id)
    //     }).get()).data[0]
    //     const {pic0,pic1,pic2,text0,text1,text2} = detail
    //     this.setData({
    //         ...detail,
    //         soulShowbundle:[{name:"神魂 · 上",pic:pic0,text:text0},{name:"神魂 · 中",pic:pic1,text:text1},{name:"神魂 · 下",pic:pic2,text:text2}]
    //     })
    // },

    getSoulDetail(id){
        const detail =  db.getSoulDetailById(id)
        const {pic0,pic1,pic2,text0,text1,text2,divinatory} = detail
        this.setData({
            ...detail,
            color: util.getBaguaColor(divinatory),
            soulShowbundle:[{name:"神魂 · 上",pic:pic0,text:text0},{name:"神魂 · 中",pic:pic1,text:text1},{name:"神魂 · 下",pic:pic2,text:text2}]
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (event) {
        const id0 = event.id
        this.getSoulDetail(id0)
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