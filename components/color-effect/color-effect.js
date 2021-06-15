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
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getStrArrayByRex(){
            // 选择带加减号或百分号的数值（含小数点）
            // const reTmp = /[\+-]\d+\.?\d*%?|\d+\.?\d*%/g
            const reTmp = /[\+-]\d+\.?\d*%?|\d+\.?\d*%/g
            // 拆分数值和文字
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
