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
            "title1":"all"
          },
          {
            "title": "乾"
          },
          {
            "title": "坤"
          },
          {
            "title": "离"
          },
          {
            "title": "坎"
          },
          {
            "title": "震"
          },
          {
            "title": "巽"
          },
          {
            "title": "艮"
          },
          {
            "title": "兑"
          }],
        tabDataSrc:[], //当前渲染数据
    },

    /**
     * 组件的方法列表
     */
    methods: {
		// 外部传入的回调函数
		changeIdx(e){
			e.title = this.data.vtabs[e.detail.index].title
			this.triggerEvent("changeIdx",e,{})
		}
    }
})
