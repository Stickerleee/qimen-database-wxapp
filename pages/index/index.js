// index.js
// 获取应用实例
const app = getApp()

Page({
    data:{

    },
    onLoad:function(){
        const a = "vara"
        const b = "varb"
        const str = "var1=${a},var2=${b}"
        console.log(`${str}`)
    }
})
