// components/item-categorys/item-categorys.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        idx:Number,
        icon:String,
        name:String,
        type:String
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        showDetail:function(){
            // 根据类型跳转到相关页面
            wx.navigateTo({
              url: '/pages/shadow-detail/shadow-detail?type=' + this.properties.type +'&idx=' + this.properties.idx
            })
        }
    }
})
