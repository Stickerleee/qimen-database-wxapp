// components/item-advanced-info/item-advanced-info.js

// 设定最高等级和叠加数量
const NULL = 0
const MAX_LEVEL = 40
const MAX_NEGATIV_STACK = 15
const MAX_POSITIV_STACK = 40
const MAX_NEGATIV_BASE_STACK = 100

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        type:String,
        effect:Array,
        effectNum:Array,
        effectUpdata:Array,
        effectUpdataNum:Array,
        stackUpdata:{
            type:Array,
            optionalTypes: [0,0,0]
        },
        stackUpdataNum:{
            type:Array,
            optionalTypes: [0,0,0]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        switchMaxLvl: true,
        switchMaxStack: true
    },

    // 监听开关变化，改变对应效果
    observers: {
        'switchMaxLvl, switchMaxStack': function(switchMaxLvl, switchMaxStack){
            const {effectUpdataNum, stackUpdataNum, effect, effectNum} = this.properties
            const level = switchMaxLvl ? effectUpdataNum : [0,0,0]
            const stack = switchMaxStack ? stackUpdataNum : [0,0,0]
            this.setData({
                maxEffect: this.getMaxEffect(effect, effectNum, level, stack)
            })
        }
    },

    //组件初始化
    ready:function(){
        const {effectUpdataNum, stackUpdataNum, effect, effectNum, effectUpdata, stackUpdata} = this.properties
        this.setData({
            // 重新设置变量名，防止与properties冲突
            baseEffect: this.getBaseEffect(effect, effectNum),
            effectUp: this.getBaseEffect(effectUpdata, effectUpdataNum),
            stackUp: this.getBaseEffect(stackUpdata, stackUpdataNum),
            maxEffect: this.getMaxEffect(effect, effectNum, effectUpdataNum, stackUpdataNum)
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 强化选择开关
        switchChangeLvl:function(e){
            this.setData({
                switchMaxLvl:e.detail.value
            })
        },
        switchChangeStack:function(e){
            this.setData({
                switchMaxStack:e.detail.value
            })
        },

        
        // 计算强化后的数值
        getMaxEffect:function(strAry,nums,updata,stack){
            let result = ''
            if (!strAry.length) {
                return result
            }
            const len = strAry.length-1
            stack = stack.length ? stack : [0,0,0]
            for (let i = 0;i<len;i++){
                const newNum = nums[i] + updata[i] * MAX_LEVEL + stack[i] * MAX_POSITIV_STACK
                result += strAry[i] + newNum
            }
            return result + strAry[len]
        },
        // 组合字符串和数值
        getBaseEffect:function(strAry,nums){
            return this.getMaxEffect(strAry,nums,[0,0,0],[0,0,0])
        },
    }
})
