// components/item-advanced-info/item-advanced-info.js

const utilModule = require('../../utils/util')
const getBaseEffect = utilModule.getBaseEffect
const getMaxEffect = utilModule.getMaxEffect

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
    // observers: {
    //     'switchMaxLvl, switchMaxStack': function(switchMaxLvl, switchMaxStack){
    //         const {effectUpdataNum, stackUpdataNum, effect, effectNum} = this.properties
    //         const level = switchMaxLvl ? effectUpdataNum : [0,0,0]
    //         const stack = switchMaxStack ? stackUpdataNum : [0,0,0]
    //         this.setData({
    //             maxEffect: getMaxEffect(effect, effectNum, level, stack)
    //         })
    //     }
    // },

    //组件初始化
    ready:function(){
        // const {effectUpdataNum, stackUpdataNum, effect, effectNum, effectUpdata, stackUpdata} = this.properties
        // this.setData({
        //     // 重新设置变量名，防止与properties冲突
        //     baseEffect: getBaseEffect(effect, effectNum),
        //     effectUp: getBaseEffect(effectUpdata, effectUpdataNum),
        //     stackUp: getBaseEffect(stackUpdata, stackUpdataNum),
        //     maxEffect: getMaxEffect(effect, effectNum, effectUpdataNum, stackUpdataNum)
        // })
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
    }
})
