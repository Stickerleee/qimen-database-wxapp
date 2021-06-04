// index.js
// 获取应用实例
const app = getApp()

Page({
    data:{
        test:[
          {
            "id": "62003",
            "idx": 0,
            "type": "shadow",
            "activ": "positiv",
            "name": "药水",
            "property": "治愈",
            "divinatory": "兑",
            "icon": "cloud://cloud1-8g9u0weo00d027a4.636c-cloud1-8g9u0weo00d027a4-1306026199/image/shadow/62003.png",
            "tags": [
              "恢复"
            ],
            "effect": [
              "恢复40%最大生命值。"
            ],
            "effectUpdata": [
              "恢复44%最大生命值。"
            ],
            "stackUpdata": [
              "恢复84%最大生命值。"
            ]
          }
        ]
    },
    onLoad:function(){
        const a = this.data.test
        const b = a.map((item)=>{
            const {name, divinatory,icon,id,property,tags,type,idx,activ} = item
            let foo = {
                name, divinatory,icon,id,property,tags,type,idx,activ
            }
            return foo
        })
        this.setData({
            b
        })
    }
})
