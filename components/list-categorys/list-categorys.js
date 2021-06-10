// components/list-categorys/list-categorys.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        id0: Number,
        idx: Number,
        icon: String,
        name: String,
        property: String,
        divinatory: String,
        tags: Array,
        type: String
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
        // 跳转到物品详情页
        showDetail: function (event) {
            if (this.properties.type === 'soul') {
                wx.navigateTo({
                    url: '../soul-detail/soul-detail?type=' + this.properties.type + '&id=' + this.properties.id0
                })
            }
        },
    }
})