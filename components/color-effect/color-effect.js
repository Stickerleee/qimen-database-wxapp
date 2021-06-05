// components/color-effect/color-effect.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        str: String,
        color: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        black: "black",
        test:"造成暴击时，有100%的几率增加60%的暴击伤害，持续5秒，20秒冷却时间。雷攻雷防+20wx.getFileSystemManager()"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getStrArrayByRex(){
            const reTmp = /[\+-]\d+\.?\d*%?|\d+%/g
            const numArr = this.properties.str.match(reTmp)
            const strArr = this.properties.str.split(reTmp)
            this.setData({
                numArr,
                strArr
            })
        }
    },
    ready(){
        this.getStrArrayByRex()
    }
})
