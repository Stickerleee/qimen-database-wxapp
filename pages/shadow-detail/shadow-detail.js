// pages/shadow-detail/shadow-detail.js

const util = require('../../utils/util')
const db = require('../../utils/db')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        greatNum: ['壹', '贰', '叁', '肆', '伍']
    },

    // 获取数据详情
    getItemDetail(type, id) {
        const itemDetail = db.getItemDetailById(type, id)
        const {
            divinatory,
            effect,
            effectUpdata,
            stackStep,
            maxStack,
            activ
        } = itemDetail
        // let stackUpdata
        // if (maxStack) {
        //     if(activ==='negativ'){
        //     stackUpdata = this.getStackEffect(effectUpdata,maxStack,stackStep)
        // }
        // }
        this.setData({
            ...itemDetail,
            // stackUpdata,
            baguaIcon: `/image/bagua/icon/${util.getBaguaIcon(divinatory)}.png`,
            color: util.getBaguaColor(divinatory)
        })
    },

    // 根据叠加数计算数值
    changeEffectByStack(str, stack, step) {
        console.log(str, stack, step)
        const reTmp = /(?<=[+-])\d+\.?\d*(?=%)?|\d+(?=%)/g
        const numArr = str.match(reTmp).map((item, index) => {
            const numItem = +item
            return step[index] * numItem * stack + numItem
        })
        const strArr = str.split(reTmp)
        console.log('inner', numArr)
        let result = ''
        let i = 0
        while (true) {
            result += strArr[i]
            if (i === numArr.length) {
                break
            }
            result += numArr[i]
            i++
        }
        return result
    },
    // 滑块回调函数
    stackSlider(e) {
        const value = e.detail.value
        const result = this.getStackEffect(this.data.effectUpdata, value, this.data.stackStep)
        this.setData({
            stackUpdata: result
        })
    },

    // 计算叠加效果，返回数组
    getStackEffect(effect, stack, stackStep) {
        const stackUpdata = effect.map((str, index) => {
            return this.changeEffectByStack(str, stack, stackStep[index])
        })
        return stackUpdata
    },
    // 更新叠加效果为指定value
    // changeStackEffect(value){
    //     const result = this.getStackEffect(this.effectUpdata, value, this.stackStep)
    //     this.setData({
    //         stackUpdata: result
    //     })
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (event) {
        const {
            type,
            id
        } = event
        this.getItemDetail(type, id)
        // console.log('result', this.changeEffectByStack('gojigoj=+10,sdfadf20%', 40, [0.1, 0.5]))
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