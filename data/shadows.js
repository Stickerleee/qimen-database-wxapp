var shadows = {
    "data":[
        {
          "idx": 0,
          "type": "shadow",
          "name": "药水",
          "class": "positiv",
          "property": "治愈",
          "divinatory": "乾",
          "icon": "/image/shadow/yaoshui.png",
          "effect": ["恢复","%最大生命值。"],
          "effectNum":[40],
          "effectUpdata":["每级倍率额外+","%"],
          "effectUpdataNum":[0.1],
          "stackUpdata":["倍率额外+","%"],
          "stackUpdataNum":[1],
          "tags":["恢复"]
        },
        {
          "idx": 1,
          "type": "shadow",
          "name": "药水",
          "class": "positiv",
          "property": "治愈",
          "divinatory": "乾",
          "icon": "/image/shadow/yaoshui.png",
          "effect": ["恢复","%最大生命值，增加","%生命上限"],
          "effectNum":[20,15],
          "effectUpdata":["每级倍率额外+","%，+","%"],
          "effectUpdataNum":[0.1,0.05],
          "stackUpdata":["倍率额外+","%，+","%"],
          "stackUpdataNum":[1,0.5],
          "tags":["恢复"]
        },
        {
          "idx": 2,
          "type": "shadow",
          "name": "师刀",
          "class": "negativ",
          "property": "治愈",
          "divinatory": "乾",
          "icon": "/image/shadow/yaoshui.png",
          "effect": ["血量高于90%，暴击率+15%"],
          "effectNum":[15],
          "effectUpdata":["每级倍率额外+","%"],
          "effectUpdataNum":[0.15],
          "stackUpdata":["倍率额外+","%"],
          "stackUpdataNum":[1.5],
          "tags":["增益"]
        },
        
    ]
}

module.exports.shadows = shadows;