
var data = {
    "data":[
        {
            "type": "soul",
            "idx": 0,
            "id": "5111",
            "name": "啸月",
            "property": "攻击",
            "divinatory": "乾",
            "tags": [
              "增益",
              "爆发"
            ],
            "icon": "/image/soul/icon/51112.png",
            "pic0": "/image/soul/more-sizes/A_51111.png",
            "pic1": "/image/soul/more-sizes/A_51112.png",
            "pic2": "/image/soul/more-sizes/A_51113.png",
            "effect": "每隔15秒，命中率+20%，伤害加成+30%，持续5秒",
            "effect1": "攻击+10%",
            "info": "啸月的描述：嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻",
            "stepgrow": "伤害加成+0.3%",
            "step20": "持续时间+2秒",
            "step60": "变为全队效果",
            "stepfull": "每隔15秒，全队命中率+20%，伤害加成+48%，持续7秒"
          },
          {
            "type": "soul",
            "idx": "1",
            "id": "5112",
            "name": "破日",
            "property": "攻击",
            "divinatory": "乾",
            "tags": [
              "增益",
              "成长"
            ],
            "icon": "/image/soul/icon/51122.png",
            "pic0": "/image/soul/more-sizes/A_51121.png",
            "pic1": "/image/soul/more-sizes/A_51122.png",
            "pic2": "/image/soul/more-sizes/A_51123.png",
            "effect": "消灭敌人时有10%的几率攻击+1.5%，可叠加15层",
            "info": "破日的描述：嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻",
            "effect1": "攻击+10%",
            "stepgrow": "攻击+0.015%",
            "step20": "触发几率+10%",
            "step60": "叠加上限+5",
            "stepfull": "消灭敌人时有20%的几率攻击+2.4%，可叠加20层（+48%攻击）"
          },
          {
            "id": "5211",
            "name": "君卫",
            "property": "防御",
            "divinatory": "坤",
            "tags": ["增益","防御"],
            "effect": "全系防御+25%",
            "effect1": "",
            "info": "",
            "stepgrow": "全系防御+0.25%",
            "step20": "全系防御+10%",
            "step60": "全系防御+15%",
            "stepfull": "全系防御+65%"
          },
          {
            "id": "5212",
            "name": "百战",
            "property": "防御",
            "divinatory": "坤",
            "tags": ["反伤"],
            "effect": "将80%即将受到的伤害转换为真实伤害反弹给攻击者（对玩家30%）",
            "effect1": "",
            "info": "",
            "stepgrow": "反弹比例+0.8%",
            "step20": "生命上限+10%",
            "step60": "状态抗性+40%",
            "stepfull": "将128%即将受到的伤害转换为真实伤害反弹给攻击者（对玩家30%），生命上限+10%，状态抗性+40%"
          },
          {
            "id": "5311",
            "name": "玉净",
            "property": "治愈",
            "divinatory": "兑",
            "tags": ["恢复","团队"],
            "effect": "治疗加成+20%；每隔10秒，周围全队恢复相当于装配者8%生命上限的生命值",
            "effect1": "",
            "info": "",
            "stepgrow": "治疗加成+0.2%",
            "step20": "内置冷却-2秒",
            "step60": "恢复比例+2%",
            "stepfull": ""
          },
          {
            "id": "5312",
            "name": "蝶心",
            "property": "治愈",
            "divinatory": "兑",
            "tags": [],
            "effect": "每当施放或触发治疗效果时（持续恢复仅算作1次），对周围最多2个敌人造成相当于装配者10%当前血量的真实伤害，2秒内置冷却",
            "effect1": "",
            "info": "",
            "stepgrow": "血量比例+0.08%",
            "step20": "目标数+1",
            "step60": "使敌人命中-20%，持续4秒",
            "stepfull": ""
          }
    ]
}

module.exports.data = data;