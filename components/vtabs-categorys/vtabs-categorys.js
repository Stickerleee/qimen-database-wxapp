// components/vtabs-categorys/vtabs-categorys.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
    },

    /**
     * 组件的初始数据
     */
    data: {
        vtabs:[{
            "title": "全部",
            "title1":"0"
          },
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
          }],
        tabDataSrc:[], //当前渲染数据
    },

    /**
     * 组件的方法列表
     */
    methods: {
		// 外部传入的回调函数
		changeIdx(e){
			e.title = this.data.vtabs[e.detail.index].title1
			this.triggerEvent("changeIdx",e,{})
		}
    }
})
