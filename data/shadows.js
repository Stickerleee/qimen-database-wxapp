var shadows = {
	"data": [{
			"idx": 0,
			"id": "62003",
			"type": "shadow",
			"name": "玉净瓶",
			"activ": "positiv",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/62003.png",
			"effect": ["恢复40%生命值上限的生命值"],
			"effectUpdata": ["恢复44%生命值上限的生命值"],
			"tags": ["恢复"]
		},
		{
			"idx": 0,
			"id": "61002",
			"type": "shadow",
			"name": "真元水晶",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61001.png",
			"effect": ["攻击+10", "攻击+5%"],
			"effectUpdata": ["攻击+30", "攻击+7%"],
			"tags": ["增益"],
			"lockEffect": [
				"角色技能和普攻伤害+12%",
				"伤害加成+8%",
				"命中率+10%",
				"技能冷却-8%"
			],
			"maxStack": 100,
			"stackStep": [
				[0.5],
				[0.1]
			]
		},
		{
			"idx": 0,
			"id": "61009",
			"type": "shadow",
			"name": "三清铃",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61001.png",
			"effect": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成50%攻击伤害"],
			"effectUpdata": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成90%攻击伤害"],
			"tags": ["群攻","减防"],
			"lockEffect": [
				"12%提升至16%",
				"在两个敌人位置触发爆炸",
				"造成伤害后，并使其防御-20%，持续3秒"
			],
			"maxStack": 15
		},
		{
			"idx": 0,
			"id": "61017",
			"type": "shadow",
			"name": "九龙剑",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61001.png",
			"effect": ["消灭敌人时有10%几率角色技能和普攻伤害+1%，持续180秒，可叠加18层"],
			"effectUpdata": ["消灭敌人时有10%几率角色技能和普攻伤害+1.4%，持续180秒，可叠加18层"],
			"tags": ["成长","增益"],
			"lockEffect": [
				"10%提升至13%",
				"18层提升至24层",
				"每层额外提供命中率+1%"
			],
			"maxStack": 15
		},
		{
			"idx": 0,
			"id": "61033",
			"type": "shadow",
			"name": "破灭剑",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61001.png",
			"effect": ["对生命低于30%的敌人"],
			"effectUpdata": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成90%攻击伤害"],
			"tags": ["群攻","减防"],
			"lockEffect": [
				"12%提升至16%",
				"在两个敌人位置触发爆炸",
				"造成伤害后，并使其防御-20%，持续3秒"
			],
			"maxStack": 15
		},
		{
			"idx": 0,
			"id": "61009",
			"type": "shadow",
			"name": "三清铃",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61001.png",
			"effect": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成50%攻击伤害"],
			"effectUpdata": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成90%攻击伤害"],
			"tags": ["群攻","减防"],
			"lockEffect": [
				"12%提升至16%",
				"在两个敌人位置触发爆炸",
				"造成伤害后，并使其防御-20%，持续3秒"
			],
			"maxStack": 15
		},
		{
			"idx": 0,
			"id": "61009",
			"type": "shadow",
			"name": "三清铃",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61001.png",
			"effect": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成50%攻击伤害"],
			"effectUpdata": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成90%攻击伤害"],
			"tags": ["群攻","减防"],
			"lockEffect": [
				"12%提升至16%",
				"在两个敌人位置触发爆炸",
				"造成伤害后，并使其防御-20%，持续3秒"
			],
			"maxStack": 15
		},
		{
			"idx": 0,
			"id": "61009",
			"type": "shadow",
			"name": "三清铃",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61001.png",
			"effect": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成50%攻击伤害"],
			"effectUpdata": ["使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成90%攻击伤害"],
			"tags": ["群攻","减防"],
			"lockEffect": [
				"12%提升至16%",
				"在两个敌人位置触发爆炸",
				"造成伤害后，并使其防御-20%，持续3秒"
			],
			"maxStack": 15
		}
	]
}

module.exports.shadows = shadows;