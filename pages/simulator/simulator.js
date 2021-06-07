// pages/simulator/simulator.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        soul:[],
        weapon:[{
            "idx": 2,
            "id":"60337",
            "type": "weapon",
            name: "山河社稷图",
            "property": "水",
            "divinatory": "坎",
            "icon": "/image/weapon/60305.png",
            "effect": ["水攻水防+5","对敌人施加的负面状态的持续时间+20%"],
            "effectUpdata":["",""],
            "tags":["增益"],
            "lockEffect":["风攻风防+","水伤加成+","雷攻雷防+","风伤加成+"],
            "baguaIcon": "/image/bagua/icon/bagua_kan.png",
            },{}
        ],
        shadowpositiv:[],
        shadownegativ:[],
        effect:[],
        showDetail:false,
        test:"123",
        tabs:[
          {
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
          }]
    },

    showDetailStatus(){
        this.setData({
            showDetail:!this.data.showDetail
        })
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