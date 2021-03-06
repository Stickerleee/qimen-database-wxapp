var shadows = {
	"data": [{
			"idx": 0,
			"id": "61002",
			"type": "shadow",
			"name": "真元水晶",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61002.png",
			"effect": [
				"攻击+10",
				"攻击+5%"
			],
			"effectUpdata": [
				"攻击+30",
				"攻击+7%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"角色技能和普攻伤害+12%",
				"伤害加成+8%",
				"命中率+10%",
				"技能冷却-8%"
			],
			"maxStack": 100,
			"stackStep": [
				[
					0.5
				],
				[
					0.1
				]
			]
		},
		{
			"idx": 1,
			"id": "61009",
			"type": "shadow",
			"name": "三清铃",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61009.png",
			"effect": [
				"使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成50%攻击伤害"
			],
			"effectUpdata": [
				"使用角色技能或普攻时，有12%几率触发爆炸，对周围敌人造成90%攻击伤害"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"lockEffect": [
				"12%提升至16%",
				"在两个敌人位置触发爆炸",
				"造成伤害后，并使其防御-20%，持续3秒"
			],
			"maxStack": 15
		},
		{
			"idx": 2,
			"id": "61017",
			"type": "shadow",
			"name": "九龙剑",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61017.png",
			"effect": [
				"消灭敌人时有10%几率角色技能和普攻伤害+1%，持续180秒，可叠加18层"
			],
			"effectUpdata": [
				"消灭敌人时有10%几率角色技能和普攻伤害+1.4%，持续180秒，可叠加18层"
			],
			"tags": [
				"成长",
				"增益"
			],
			"lockEffect": [
				"10%提升至13%",
				"18层提升至24层",
				"每层额外提供命中率+1%"
			],
			"maxStack": 15
		},
		{
			"idx": 3,
			"id": "61033",
			"type": "shadow",
			"name": "破灭剑",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61033.png",
			"effect": [
				"对生命低于30%的敌人造成的攻击伤害附加15%攻击加成"
			],
			"effectUpdata": [
				"对生命低于30%的敌人造成的攻击伤害附加21%攻击加成"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"对生命低于40%的敌人造成的攻击伤害附加15%攻击加成",
				"对生命低于18%的敌人造成的攻击伤害附加30%攻击加成",
				"对生命低于30%的敌人造成的最高元泰伤害附加15%最高元泰攻击加成"
			],
			"maxStack": 15
		},
		{
			"idx": 4,
			"id": "61025",
			"type": "shadow",
			"name": "幻月魔箭",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61025.png",
			"effect": [
				"使用角色技能或普攻时有12%几率发射箭阵，每只造成25%攻击伤害"
			],
			"effectUpdata": [
				"使用角色技能或普攻时有12%几率发射箭阵，每只造成45%攻击伤害"
			],
			"tags": [
				"群攻"
			],
			"lockEffect": [
				"12%提升至16%",
				"箭矢数量额外+2",
				"由发射箭阵改为发射巨箭，且伤害提高"
			],
			"maxStack": 15
		},
		{
			"idx": 5,
			"id": "61041",
			"type": "shadow",
			"name": "仙人镜",
			"activ": "negativ",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/61041.png",
			"effect": [
				"角色技能或普攻伤害+30%，火攻/水攻/土攻/风攻/雷攻-30%"
			],
			"effectUpdata": [
				"角色技能或普攻伤害+42%，火攻/水攻/土攻/风攻/雷攻-30%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"由火/水/土/风/雷攻-30%改为水/风/雷攻-30%",
				"由火/水/土/风/雷攻-30%改为火/土/雷攻-30%",
				"由火/水/土/风/雷攻-30%改为火/水/风攻-30%"
			],
			"maxStack": 15
		},
		{
			"idx": 6,
			"id": "62001",
			"type": "shadow",
			"name": "金刀",
			"activ": "positiv",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/62001.png",
			"effect": [
				"生成三柄金刀依次攻击敌人，每柄造成40%攻击伤害，并使其防御-30%，持续5秒"
			],
			"effectUpdata": [
				"生成三柄金刀依次攻击敌人，每柄造成56%攻击伤害，并使其防御-30%，持续5秒"
			],
			"tags": [
				"减防"
			],
			"maxStack": 40
		},
		{
			"idx": 7,
			"id": "62009",
			"type": "shadow",
			"name": "白水真人像",
			"activ": "positiv",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/62009.png",
			"effect": [
				"获得真人之力加持，攻击+20%，持续6秒"
			],
			"effectUpdata": [
				"获得真人之力加持，攻击+24%，持续6秒"
			],
			"tags": [
				"增益"
			],
			"maxStack": 40
		},
		{
			"idx": 8,
			"id": "62017",
			"type": "shadow",
			"name": "机关箭",
			"activ": "positiv",
			"property": "攻击",
			"divinatory": "乾",
			"icon": "/image/shadow/62017.png",
			"effect": [
				"放置机关箭，存在12秒。自动射击每次造成30%攻击伤害，并使受击者流血：每3秒造成3%攻击伤害，持续9秒，可叠加5层"
			],
			"effectUpdata": [
				"放置机关箭，存在12秒。自动射击每次造成42%攻击伤害，并使受击者流血：每3秒造成3%攻击伤害，持续9秒，可叠加5层"
			],
			"tags": [
				""
			],
			"maxStack": 40
		},
		{
			"idx": 9,
			"id": "61010",
			"type": "shadow",
			"name": "金刚锤",
			"activ": "negativ",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/61010.png",
			"effect": [
				"使用角色技能或普攻时天降金刚锤攻击千峰敌人，造成75%防御伤害，15秒内置冷却"
			],
			"effectUpdata": [
				"使用角色技能或普攻时天降金刚锤攻击千峰敌人，造成135%防御伤害，15秒内置冷却"
			],
			"tags": [
				"群攻"
			],
			"lockEffect": [
				"冷却由15秒缩减至12秒",
				"攻击前方和后方的敌人",
				"造成伤害后，并使其移速-40%，持续3秒"
			],
			"maxStack": 15
		},
		{
			"idx": 10,
			"id": "61018",
			"type": "shadow",
			"name": "疾走狼靴",
			"activ": "negativ",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/61018.png",
			"effect": [
				"受到伤害时，闪避率+20%，持续5秒。20秒内置冷却"
			],
			"effectUpdata": [
				"受到伤害时，闪避率+28%，持续5秒。20秒内置冷却"
			],
			"tags": [
				"生存"
			],
			"lockEffect": [
				"冷却由20秒缩减至15秒",
				"持续时间由5秒提升至8秒",
				"+15%移速"
			],
			"maxStack": 15
		},
		{
			"idx": 11,
			"id": "61034",
			"type": "shadow",
			"name": "五彩幻戒",
			"activ": "negativ",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/61034.png",
			"effect": [
				"血量低于25%时，防御+40%"
			],
			"effectUpdata": [
				"血量低于25%时，防御+56%"
			],
			"tags": [
				"生存",
				"反伤"
			],
			"lockEffect": [
				"由低于25%时改为低于35%血量",
				"攻击+10%",
				"将20%即将受到的伤害转换为真实伤害反弹给攻击者（对玩家10%）"
			],
			"maxStack": 15
		},
		{
			"idx": 12,
			"id": "61026",
			"type": "shadow",
			"name": "云锦天衣",
			"activ": "negativ",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/61026.png",
			"effect": [
				"正面伤害减免+15%"
			],
			"effectUpdata": [
				"正面伤害减免+21%"
			],
			"tags": [
				"生存",
				"反伤"
			],
			"lockEffect": [
				"伤害减免+8%",
				"移速+10%",
				"将20%即将受到的伤害转换为真实伤害反弹给攻击者（对玩家10%）"
			],
			"maxStack": 15
		},
		{
			"idx": 13,
			"id": "61042",
			"type": "shadow",
			"name": "不详长卷",
			"activ": "negativ",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/61042.png",
			"effect": [
				"防御+10%",
				"受到伤害时有8%几率将周围敌人向自己吸引一段距离"
			],
			"effectUpdata": [
				"防御+14%",
				"受到伤害时有8%几率将周围敌人向自己吸引一段距离"
			],
			"tags": [
				"生存",
				"聚怪"
			],
			"lockEffect": [
				"受到伤害时有11%几率",
				"吸引更大范围敌人",
				"向自己吸引一大段距离"
			],
			"maxStack": 15
		},
		{
			"idx": 14,
			"id": "61002",
			"type": "shadow",
			"name": "山海镇",
			"activ": "negativ",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/61002.png",
			"effect": [
				"防御+20",
				"防御+5%"
			],
			"effectUpdata": [
				"防御+60",
				"防御+7%"
			],
			"tags": [
				"生存"
			],
			"lockEffect": [
				"伤害减免+10%",
				"正面伤害减免+15%",
				"闪避率+10%",
				"移速+10%"
			],
			"maxStack": 100
		},
		{
			"idx": 15,
			"id": "62002",
			"type": "shadow",
			"name": "倒刺胃",
			"activ": "positiv",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/62002.png",
			"effect": [
				"自身获得尖刺护体：防御+20%，将自身40%即将受到的伤害转换为真实伤害反弹给攻击者（对玩家20%），持续6秒"
			],
			"effectUpdata": [
				"自身获得尖刺护体：防御+24%，将自身56%即将受到的伤害转换为真实伤害反弹给攻击者（对玩家28%），持续6秒"
			],
			"tags": [
				"反伤"
			],
			"maxStack": 40
		},
		{
			"idx": 16,
			"id": "62010",
			"type": "shadow",
			"name": "符文稻草人",
			"activ": "positiv",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/62010.png",
			"effect": [
				"使用符文稻草人弱化周围敌人，攻击-20%，防御-10%，持续8秒"
			],
			"effectUpdata": [
				"使用符文稻草人弱化周围敌人，攻击-24%，防御-12%，持续8秒"
			],
			"tags": [
				"减防",
				"生存"
			],
			"maxStack": 40
		},
		{
			"idx": 17,
			"id": "62018",
			"type": "shadow",
			"name": "憎恶",
			"activ": "positiv",
			"property": "防御",
			"divinatory": "坤",
			"icon": "/image/shadow/62018.png",
			"effect": [
				"对周围敌人造成相当于施法者12%生命上限的伤害，将其吸引过来并嘲讽攻击自己"
			],
			"effectUpdata": [
				"对周围敌人造成相当于施法者16.8%生命上限的伤害，将其吸引过来并嘲讽攻击自己"
			],
			"tags": [
				"聚怪"
			],
			"maxStack": 40
		},
		{
			"idx": 18,
			"id": "61003",
			"type": "shadow",
			"name": "鎏金头冠",
			"activ": "negativ",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/61003.png",
			"effect": [
				"生命值+200",
				"生命值+5%"
			],
			"effectUpdata": [
				"生命值+600",
				"生命值+7%"
			],
			"tags": [
				"生存"
			],
			"lockEffect": [
				"充能增效+20%",
				"治疗加成+20%",
				"反伤比例+15%",
				"残影充能加成+20%"
			],
			"maxStack": 100
		},
		{
			"idx": 19,
			"id": "61019",
			"type": "shadow",
			"name": "仙桃",
			"activ": "negativ",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/61019.png",
			"effect": [
				"生命值低于10%时，恢复20%生命上限的生命值。90秒内置冷却"
			],
			"effectUpdata": [
				"生命值低于10%时，恢复36%生命上限的生命值。90秒内置冷却"
			],
			"tags": [
				"生存"
			],
			"lockEffect": [
				"90秒内置冷却改为60秒内置冷却",
				"改为生命值低于20%时",
				"触发时全队可获得残影效果"
			],
			"maxStack": 15
		},
		{
			"idx": 20,
			"id": "61011",
			"type": "shadow",
			"name": "如意",
			"activ": "negativ",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/61011.png",
			"effect": [
				"消灭敌人时有10%几率获得如意：恢复3次2%生命上限的生命值"
			],
			"effectUpdata": [
				"消灭敌人时有10%几率获得如意：恢复3次3.6%生命上限的生命值"
			],
			"tags": [
				"生存",
				"治疗"
			],
			"lockEffect": [
				"几率由10%提升至13%",
				"全队可获得残影效果",
				"恢复次数由3次改为5次"
			],
			"maxStack": 15
		},
		{
			"idx": 21,
			"id": "61027",
			"type": "shadow",
			"name": "辉光指环",
			"activ": "negativ",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/61027.png",
			"effect": [
				"生命值低于20%时，每秒恢复2%生命上限的生命值"
			],
			"effectUpdata": [
				"生命值低于20%时，每秒恢复3.6%生命上限的生命值"
			],
			"tags": [
				"生存",
				"治疗"
			],
			"lockEffect": [
				"改为生命值低于30%",
				"每秒恢复20%攻击的生命值",
				"治疗加成+30%"
			],
			"maxStack": 15
		},
		{
			"idx": 22,
			"id": "61035",
			"type": "shadow",
			"name": "师刀",
			"activ": "negativ",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/61035.png",
			"effect": [
				"血量高于90％时，暴击+15%"
			],
			"effectUpdata": [
				"血量高于90％时，暴击+21%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"改为血量高于80%",
				"治疗加成+20%",
				"暴击率固定+8%"
			],
			"maxStack": 15
		},
		{
			"idx": 23,
			"id": "61043",
			"type": "shadow",
			"name": "甘露碗",
			"activ": "negativ",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/61043.png",
			"effect": [
				"生命值+10%",
				"受到治疗时，攻击和防御+10%，持续5秒。12秒内置冷却"
			],
			"effectUpdata": [
				"生命值+14%",
				"受到治疗时，攻击和防御+14%，持续5秒。12秒内置冷却"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"12秒内置冷却改为10秒",
				"改为受到治疗或闪避时",
				"持续时间由5秒改为8秒"
			],
			"maxStack": 15
		},
		{
			"idx": 24,
			"id": "62003",
			"type": "shadow",
			"name": "玉净瓶",
			"activ": "positiv",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/62003.png",
			"effect": [
				"恢复40%生命上限的生命值"
			],
			"effectUpdata": [
				"恢复44%生命上限的生命值"
			],
			"tags": [
				"恢复"
			],
			"maxStack": 40
		},
		{
			"idx": 25,
			"id": "62011",
			"type": "shadow",
			"name": "玄妙瓶",
			"activ": "positiv",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/62011.png",
			"effect": [
				"周围全队获得持续回复：恢复5次相当于施法者6%生命上限的生命值"
			],
			"effectUpdata": [
				"周围全队获得持续回复：恢复5次相当于施法者8.4%生命上限的生命值"
			],
			"tags": [
				"恢复",
				"团队"
			],
			"maxStack": 40
		},
		{
			"idx": 26,
			"id": "62019",
			"type": "shadow",
			"name": "祝福瓶",
			"activ": "positiv",
			"property": "治愈",
			"divinatory": "兑",
			"icon": "/image/shadow/62019.png",
			"effect": [
				"周围全队获得生命祝福：生命上限提高，相当于施法者20%的生命上限，并每秒恢复自身1.5%生命上限的生命值，持续10秒，不可叠加"
			],
			"effectUpdata": [
				"周围全队获得生命祝福：生命上限提高，相当于施法者28%的生命上限，并每秒恢复自身1.5%生命上限的生命值，持续10秒，不可叠加"
			],
			"tags": [
				"恢复",
				"团队",
				"生存"
			],
			"maxStack": 40
		},
		{
			"idx": 27,
			"id": "61004",
			"type": "shadow",
			"name": "角形火环",
			"activ": "negativ",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/61004.png",
			"effect": [
				"火攻火防+16",
				"火攻火防+5%"
			],
			"effectUpdata": [
				"火攻火防+48",
				"火攻火防+7%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"火伤减免+15%",
				"火伤加成+10%",
				"暴击率+10%",
				"装备和被动残影触发频次+10%"
			],
			"maxStack": 100
		},
		{
			"idx": 28,
			"id": "61020",
			"type": "shadow",
			"name": "焚龙法绳",
			"activ": "negativ",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/61020.png",
			"effect": [
				"每隔15秒，生成2个火焰精魂附着随机敌人，2秒后爆炸造成90%火攻伤害，并使其火防-5%，持续3秒"
			],
			"effectUpdata": [
				"每隔15秒，生成2个火焰精魂附着随机敌人，2秒后爆炸造成162%火攻伤害，并使其火防-5%，持续3秒"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"lockEffect": [
				"每隔15秒改为每隔12秒",
				"每隔15秒改为每隔20秒，生成3个火球",
				"改为生成1个火球，伤害提高"
			],
			"maxStack": 15
		},
		{
			"idx": 29,
			"id": "61044",
			"type": "shadow",
			"name": "朱雀镜",
			"activ": "negativ",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/61044.png",
			"effect": [
				"火攻火防+5%",
				"造成火系伤害时，暴击率+15%，持续5秒。12秒内置冷却"
			],
			"effectUpdata": [
				"火攻火防+7%",
				"造成火系伤害时，暴击率+21%，持续5秒。12秒内置冷却"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"12秒改为10秒内置冷却",
				"受到火系伤害时也可触发",
				"全队可获得残影效果"
			],
			"maxStack": 15
		},
		{
			"idx": 30,
			"id": "61028",
			"type": "shadow",
			"name": "帝炎金盔",
			"activ": "negativ",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/61028.png",
			"effect": [
				"受到伤害时生成2个围绕火球，每隔火球对敌人造成最多5次80%火攻伤害。20秒内置冷却"
			],
			"effectUpdata": [
				"受到伤害时生成2个围绕火球，每隔火球对敌人造成最多5次144%火攻伤害。20秒内置冷却"
			],
			"tags": [
				"群攻"
			],
			"lockEffect": [
				"生成2个改为3个",
				"全队可获得残影效果",
				"由5次改为8次"
			],
			"maxStack": 15
		},
		{
			"idx": 31,
			"id": "61036",
			"type": "shadow",
			"name": "朱雀罗盘",
			"activ": "negativ",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/61036.png",
			"effect": [
				"火伤加成+20%",
				"造成火攻伤害时获得伤害减免+1%，持续10秒，可叠加15层。1.5秒内置冷却"
			],
			"effectUpdata": [
				"火伤加成+28%",
				"造成火攻伤害时获得伤害减免+1%，持续10秒，可叠加15层。1.5秒内置冷却"
			],
			"tags": [
				"增益",
				"生存"
			],
			"lockEffect": [
				"土伤加成+10%",
				"雷伤加成+10%",
				"可持续15秒可叠加20层"
			],
			"maxStack": 15
		},
		{
			"idx": 32,
			"id": "61012",
			"type": "shadow",
			"name": "紫霄火光印",
			"activ": "negativ",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/61012.png",
			"effect": [
				"使用角色技能或普攻时有12%几率布置火阵攻击周围敌人，造成最多两次27%火攻伤害"
			],
			"effectUpdata": [
				"使用角色技能或普攻时有12%几率布置火阵攻击周围敌人，造成最多两次48.6%火攻伤害"
			],
			"tags": [
				"群攻"
			],
			"lockEffect": [
				"12%几率高至16%几率",
				"法阵将留在原地",
				"在敌人位置布置法阵"
			],
			"maxStack": 15
		},
		{
			"idx": 33,
			"id": "62020",
			"type": "shadow",
			"name": "混天绫",
			"activ": "positiv",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/62020.png",
			"effect": [
				"布下天火法阵，法阵中全队使用角色技能时有50%概率附带24%火攻伤害"
			],
			"effectUpdata": [
				"布下天火法阵，法阵中全队使用角色技能时有50%概率附带33.6%火攻伤害"
			],
			"tags": [
				"增益"
			],
			"maxStack": 40
		},
		{
			"idx": 34,
			"id": "62004",
			"type": "shadow",
			"name": "招火符",
			"activ": "positiv",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/62004.png",
			"effect": [
				"布置火焰阵法攻击敌人，造成最多3次40%火攻伤害，并使其火防-10%"
			],
			"effectUpdata": [
				"布置火焰阵法攻击敌人，造成最多3次56%火攻伤害，并使其火防-10%"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"maxStack": 40
		},
		{
			"idx": 35,
			"id": "62012",
			"type": "shadow",
			"name": "流金紫火铃",
			"activ": "positiv",
			"property": "火",
			"divinatory": "离",
			"icon": "/image/shadow/62012.png",
			"effect": [
				"周围全队获得火球护盾：对敌人造成最多10次20%火攻伤害"
			],
			"effectUpdata": [
				"周围全队获得火球护盾：对敌人造成最多10次28%火攻伤害"
			],
			"tags": [
				"群攻"
			],
			"maxStack": 40
		},
		{
			"idx": 36,
			"id": "61005",
			"type": "shadow",
			"name": "水云盔",
			"activ": "negativ",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/61005.png",
			"effect": [
				"水攻水防+16",
				"水攻水防+5%"
			],
			"effectUpdata": [
				"水攻水防+48",
				"水攻水防+7%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"命中率+10%",
				"水伤减免+15%",
				"水伤加成+10%",
				"造成的减益效果时间+20%"
			],
			"maxStack": 100
		},
		{
			"idx": 37,
			"id": "61016",
			"type": "shadow",
			"name": "冰凌篆文甲",
			"activ": "negativ",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/61016.png",
			"effect": [
				"使用角色技能或晋攻时有12%几率生成冰推攻击前方敌人，造成50%水攻伤害"
			],
			"effectUpdata": [
				"使用角色技能或晋攻时有12%几率生成冰推攻击前方敌人，造成90%水攻伤害"
			],
			"tags": [
				"群攻",
				"控制"
			],
			"lockEffect": [
				"12%改为16%几率",
				"造成伤害后，冰推滞留2秒，消失时再造成一次伤害",
				"造成伤害后，并冰冻2秒（对玩家减速）"
			],
			"maxStack": 15
		},
		{
			"idx": 38,
			"id": "61021",
			"type": "shadow",
			"name": "冰宵玉盔",
			"activ": "negativ",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/61021.png",
			"effect": [
				"每隔15秒，生成2个冰霜精魂附着随机敌人，2秒后爆炸造成90%水攻伤害，并使其水防-5%，持续3秒"
			],
			"effectUpdata": [
				"每隔15秒，生成2个冰霜精魂附着随机敌人，2秒后爆炸造成162%水攻伤害，并使其水防-5%，持续3秒"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"lockEffect": [
				"每隔15秒改为每隔12秒",
				"每隔15秒改为每隔20秒，改为生成3个",
				"改为生成1个，伤害提高"
			],
			"maxStack": 15
		},
		{
			"idx": 39,
			"id": "61037",
			"type": "shadow",
			"name": "紫薇玉今",
			"activ": "negativ",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/61037.png",
			"effect": [
				"对冰冻目标造成伤害时，使伤害地点周围敌人冰冻2秒（对玩家减速）。15秒内置冷却"
			],
			"effectUpdata": [
				"对冰冻目标造成伤害时，使伤害地点周围敌人冰冻2秒（对玩家减速）。13.4秒内置冷却"
			],
			"tags": [
				""
			],
			"lockEffect": [
				"",
				"大范围冰冻",
				"冰冻2秒改为3秒"
			],
			"maxStack": 15
		},
		{
			"idx": 40,
			"id": "61045",
			"type": "shadow",
			"name": "御水镜",
			"activ": "negativ",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/61045.png",
			"effect": [
				"水攻水防+5%",
				"造成水系伤害时，暴击伤害+60%，持续5秒。12秒内置冷却"
			],
			"effectUpdata": [
				"水攻水防+5%",
				"造成水系伤害时，暴击伤害+84%，持续5秒。12秒内置冷却"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"12秒改为10秒内置冷却",
				"受到水系伤害也可触发",
				"持续5秒改为8秒"
			],
			"maxStack": 15
		},
		{
			"idx": 41,
			"id": "61029",
			"type": "shadow",
			"name": "玄灵宝印",
			"activ": "negativ",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/61029.png",
			"effect": [
				"消灭敌人时有40%几率生成弹跳冰锥，造成最多5次30%水攻伤害，并使其冰冻1秒（对玩家减速）"
			],
			"effectUpdata": [
				"消灭敌人时有40%几率生成弹跳冰锥，造成最多5次54%水攻伤害，并使其冰冻1秒（对玩家减速）"
			],
			"tags": [
				"群攻",
				"控制"
			],
			"lockEffect": [
				"40％改为60%几率",
				"生成2个弹跳冰锥",
				"冰冻时间改为2秒"
			],
			"maxStack": 15
		},
		{
			"idx": 42,
			"id": "62013",
			"type": "shadow",
			"name": "寒冰符契",
			"activ": "positiv",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/62013.png",
			"effect": [
				"冰冻空间，对周围敌人造成40%水攻伤害，并使其冰冻2秒（对玩家减速）"
			],
			"effectUpdata": [
				"冰冻空间，对周围敌人造成56%水攻伤害，并使其冰冻2秒（对玩家减速）"
			],
			"tags": [
				"群攻",
				"控制"
			],
			"maxStack": 40
		},
		{
			"idx": 43,
			"id": "62005",
			"type": "shadow",
			"name": "招水符",
			"activ": "positiv",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/62005.png",
			"effect": [
				"生成暴风雪攻击敌人，造成最多3次40%水攻伤害，并使其水防-10%"
			],
			"effectUpdata": [
				"生成暴风雪攻击敌人，造成最多3次56%水攻伤害，并使其水防-10%"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"maxStack": 40
		},
		{
			"idx": 44,
			"id": "62021",
			"type": "shadow",
			"name": "山海经",
			"activ": "positiv",
			"property": "水",
			"divinatory": "坎",
			"icon": "/image/shadow/62021.png",
			"effect": [
				"生成8根冰锥依次攻击随机敌人，每次造成24%水攻伤害并冰冻1秒（对玩家减速）"
			],
			"effectUpdata": [
				"生成8根冰锥依次攻击随机敌人，每次造成33.6%水攻伤害并冰冻1秒（对玩家减速）"
			],
			"tags": [
				"控制"
			],
			"maxStack": 40
		},
		{
			"idx": 45,
			"id": "61006",
			"type": "shadow",
			"name": "土羊方尊",
			"activ": "negativ",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/61006.png",
			"effect": [
				"土攻土防+16",
				"土攻土防+5%"
			],
			"effectUpdata": [
				"土攻土防+48",
				"土攻土防+7%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"防御+10%",
				"土伤减免+15%",
				"造成的增益效果时间+20%"
			],
			"maxStack": 100
		},
		{
			"idx": 46,
			"id": "61014",
			"type": "shadow",
			"name": "降龙宝印",
			"activ": "negativ",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/61014.png",
			"effect": [
				"使用角色技能或晋攻时，有12%几率生成落石攻击周围敌人，造成最多3次20%土攻伤害"
			],
			"effectUpdata": [
				"使用角色技能或晋攻时，有12%几率生成落石攻击周围敌人，造成最多3次36%土攻伤害"
			],
			"tags": [
				"群攻"
			],
			"lockEffect": [
				"12%改为16%几率",
				"在敌人位置生成落石",
				"造成伤害后并定身两秒"
			],
			"maxStack": 15
		},
		{
			"idx": 47,
			"id": "61006",
			"type": "shadow",
			"name": "金阕地尊杯",
			"activ": "negativ",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/61006.png",
			"effect": [
				"使用角色技能或晋攻时有12%几率召唤一个土灵随从，存活12秒。随从继承主人40%土系属性"
			],
			"effectUpdata": [
				"使用角色技能或晋攻时有12%几率召唤一个土灵随从，存活12秒。随从继承主人72%土系属性"
			],
			"tags": [
				"召唤"
			],
			"lockEffect": [
				"12%改为16%几率",
				"存活12秒改为16秒",
				"召唤土灵随从改为召唤土灵守护塔"
			],
			"maxStack": 15
		},
		{
			"idx": 48,
			"id": "61030",
			"type": "shadow",
			"name": "洞灵头冠",
			"activ": "negativ",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/61030.png",
			"effect": [
				"每隔15秒，在身下留下1枚延时符咒，2秒后爆炸造成150%土攻伤害，并使其土防-5%，持续3秒"
			],
			"effectUpdata": [
				"每隔15秒，在身下留下1枚延时符咒，2秒后爆炸造成270%土攻伤害，并使其土防-5%，持续3秒"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"lockEffect": [
				"每隔15秒改为12秒",
				"1枚改为2枚延时符咒",
				"延时符咒改为短延时符咒"
			],
			"maxStack": 15
		},
		{
			"idx": 49,
			"id": "61038",
			"type": "shadow",
			"name": "真武俑",
			"activ": "negativ",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/61038.png",
			"effect": [
				"每隔15秒，周围的敌人火防/水防/土防/风防/雷防-15%，持续5秒"
			],
			"effectUpdata": [
				"每隔15秒，周围的敌人火防/水防/土防/风防/雷防-21%，持续5秒"
			],
			"tags": [
				"减防"
			],
			"lockEffect": [
				"每隔15秒改为12秒",
				"周围的敌人全系防御-15%",
				"周围的敌人移速-20%"
			],
			"maxStack": 15
		},
		{
			"idx": 50,
			"id": "61046",
			"type": "shadow",
			"name": "山麟镜",
			"activ": "negativ",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/61046.png",
			"effect": [
				"土攻土防+5%",
				"造成土系伤害时，周围敌人防御-15%，持续5秒。12秒内置冷却"
			],
			"effectUpdata": [
				"土攻土防+7%",
				"造成土系伤害时，周围敌人防御-21%，持续5秒。12秒内置冷却"
			],
			"tags": [
				"减防"
			],
			"lockEffect": [
				"12秒改为10秒内置冷却",
				"受到土系伤害时也可触发效果",
				"持续5秒改为8秒"
			],
			"maxStack": 15
		},
		{
			"idx": 51,
			"id": "62014",
			"type": "shadow",
			"name": "驱魔金鱼",
			"activ": "positiv",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/62014.png",
			"effect": [
				"周围全队获得驱魔：火/水/土/风/雷伤减免+30%，持续5秒"
			],
			"effectUpdata": [
				"周围全队获得驱魔：火/水/土/风/雷伤减免+34%，持续5秒"
			],
			"tags": [
				"生存"
			],
			"maxStack": 40
		},
		{
			"idx": 52,
			"id": "62006",
			"type": "shadow",
			"name": "招土符",
			"activ": "positiv",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/62006.png",
			"effect": [
				"生成土锥攻击敌人，造成最多3次40%土攻伤害,并使其土防-10%"
			],
			"effectUpdata": [
				"生成土锥攻击敌人，造成最多3次56%土攻伤害,并使其土防-10%"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"maxStack": 40
		},
		{
			"idx": 53,
			"id": "62022",
			"type": "shadow",
			"name": "伏龙法鼓",
			"activ": "positiv",
			"property": "土",
			"divinatory": "艮",
			"icon": "/image/shadow/62022.png",
			"effect": [
				"使周围随机5个敌人移速-50%，持续5秒；并在其身下各留下一枚延时符咒，2秒后爆炸产生100%土攻伤害"
			],
			"effectUpdata": [
				"使周围随机5个敌人移速-50%，持续5秒；并在其身下各留下一枚延时符咒，2秒后爆炸产生140%土攻伤害"
			],
			"tags": [
				"群攻"
			],
			"maxStack": 40
		},
		{
			"idx": 54,
			"id": "61039",
			"type": "shadow",
			"name": "风灵印",
			"activ": "negativ",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/61039.png",
			"effect": [
				"使用角色技能或晋攻时有8%几率在原地留下风灵法阵，持续10秒。进入法阵后风伤加成+20%"
			],
			"effectUpdata": [
				"使用角色技能或晋攻时有8%几率在原地留下风灵法阵，持续10秒。进入法阵后风伤加成+20%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"8%改为11%几率",
				"持续13秒",
				"角色技能冷却-10%"
			],
			"maxStack": 15
		},
		{
			"idx": 55,
			"id": "61007",
			"type": "shadow",
			"name": "定风令",
			"activ": "negativ",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/61007.png",
			"effect": [
				"风攻风防+16",
				"风攻风防+5%"
			],
			"effectUpdata": [
				"风攻风防+48",
				"风攻风防+7%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"移速+10%",
				"风伤+10%",
				"角色技能冷却-10%"
			],
			"maxStack": 100
		},
		{
			"idx": 56,
			"id": "61023",
			"type": "shadow",
			"name": "御风扳指",
			"activ": "negativ",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/61023.png",
			"effect": [
				"使用角色技能或晋攻时，有12%几率生成旋风随从攻击周围敌人，造成最多5次24%风攻伤害"
			],
			"effectUpdata": [
				"使用角色技能或晋攻时，有12%几率生成旋风随从攻击周围敌人，造成最多5次43.2%风攻伤害"
			],
			"tags": [
				"群攻"
			],
			"lockEffect": [
				"12%改为16%几率",
				"生成2个移动旋风",
				"生成固定旋风"
			],
			"maxStack": 15
		},
		{
			"idx": 57,
			"id": "61047",
			"type": "shadow",
			"name": "梨木圆镜",
			"activ": "negativ",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/61047.png",
			"effect": [
				"风攻风防+5%",
				"造成风系伤害时，冷却缩减+15%，持续5秒。12秒内置冷却"
			],
			"effectUpdata": [
				"风攻风防+7%",
				"造成风系伤害时，冷却缩减+21%，持续5秒。12秒内置冷却"
			],
			"tags": [
				"冷却"
			],
			"lockEffect": [
				"12秒改为10秒内置冷却",
				"受到风系伤害也触发",
				"持续5秒改为8秒"
			],
			"maxStack": 15
		},
		{
			"idx": 58,
			"id": "61031",
			"type": "shadow",
			"name": "无形幻刃",
			"activ": "negativ",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/61031.png",
			"effect": [
				"使用角色技能或普攻时，射出风刃攻击前方敌人，造成75%风攻伤害，并使其风防-5%，持续3秒。15秒内置冷却"
			],
			"effectUpdata": [
				"使用角色技能或普攻时，射出风刃攻击前方敌人，造成135%风攻伤害，并使其风防-5%，持续3秒。15秒内置冷却"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"lockEffect": [
				"15秒改为12秒内置冷却",
				"射出2道并排风刃",
				"风刃附带击退"
			],
			"maxStack": 15
		},
		{
			"idx": 59,
			"id": "62015",
			"type": "shadow",
			"name": "玄女板指",
			"activ": "positiv",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/62015.png",
			"effect": [
				"周围全队荻得风佑：移速+30%，持续5秒"
			],
			"effectUpdata": [
				"周围全队荻得风佑：移速+42%，持续5秒"
			],
			"tags": [
				""
			],
			"maxStack": 40
		},
		{
			"idx": 60,
			"id": "62007",
			"type": "shadow",
			"name": "招风符",
			"activ": "positiv",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/62007.png",
			"effect": [
				"生成一个旋风，造成最多3次40%风攻伤害，并使其风防-10%"
			],
			"effectUpdata": [
				"生成一个旋风，造成最多3次56%风攻伤害，并使其风防-10%"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"maxStack": 40
		},
		{
			"idx": 61,
			"id": "62023",
			"type": "shadow",
			"name": "对铃",
			"activ": "positiv",
			"property": "风",
			"divinatory": "巽",
			"icon": "/image/shadow/62023.png",
			"effect": [
				"获得风御：8秒内使用角色技能会对前方敌人造成40%风攻伤害"
			],
			"effectUpdata": [
				"获得风御：8秒内使用角色技能会对前方敌人造成40%风攻伤害"
			],
			"tags": [
				""
			],
			"maxStack": 40
		},
		{
			"idx": 62,
			"id": "61016",
			"type": "shadow",
			"name": "破雷箭",
			"activ": "negativ",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/61016.png",
			"effect": [
				"使用角色技能或晋攻时，有12%几率生成2道落雷攻击周围敌人，每次造成50%雷攻伤害"
			],
			"effectUpdata": [
				"使用角色技能或晋攻时，有12%几率生成2道落雷攻击周围敌人，每次造成90%雷攻伤害"
			],
			"tags": [
				"群攻"
			],
			"lockEffect": [
				"改为16%几率",
				"改为4道落雷",
				"改为1道落雷，伤害增加"
			],
			"maxStack": 15
		},
		{
			"idx": 63,
			"id": "61048",
			"type": "shadow",
			"name": "黄铜玄镜",
			"activ": "negativ",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/61048.png",
			"effect": [
				"雷攻雷防+5%",
				"造成雷系伤害后，召唤的随从存活时间+4秒。12秒内置冷却"
			],
			"effectUpdata": [
				"雷攻雷防+7%",
				"造成雷系伤害后，召唤的随从存活时间+4秒。12秒内置冷却"
			],
			"tags": [
				"召唤"
			],
			"lockEffect": [
				"10秒内置冷却",
				"受到雷系伤害也触发效果",
				"随从存活时间+6秒"
			],
			"maxStack": 15
		},
		{
			"idx": 64,
			"id": "61040",
			"type": "shadow",
			"name": "五雷号令",
			"activ": "negativ",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/61040.png",
			"effect": [
				"每隔15秒，雷伤加成和命中率+20%，持续5秒"
			],
			"effectUpdata": [
				"每隔15秒，雷伤加成和命中率+28%，持续5秒"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"每隔12秒",
				"移速+20%",
				"装备和被动残影触发频次+20%"
			],
			"maxStack": 15
		},
		{
			"idx": 65,
			"id": "61024",
			"type": "shadow",
			"name": "御雷万神令",
			"activ": "negativ",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/61024.png",
			"effect": [
				"消灭敌人时有40%几率召唤一个雷灵随从，存活12秒。随从继承主人40%雷系属性"
			],
			"effectUpdata": [
				"消灭敌人时有40%几率召唤一个雷灵随从，存活12秒。随从继承主人72%雷系属性"
			],
			"tags": [
				"召唤"
			],
			"lockEffect": [
				"改为60%几率",
				"存活16秒",
				"改为召唤一个雷灵守护塔"
			],
			"maxStack": 15
		},
		{
			"idx": 66,
			"id": "61032",
			"type": "shadow",
			"name": "雷破斩鬼印",
			"activ": "negativ",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/61032.png",
			"effect": [
				"造成伤害时生成弹跳雷球，造成最多5次60%雷攻伤害，并使其雷防-5%，持续3秒。15秒内置冷却"
			],
			"effectUpdata": [
				"造成伤害时生成弹跳雷球，造成最多5次108%雷攻伤害，并使其雷防-5%，持续3秒。15秒内置冷却"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"lockEffect": [
				"12秒内置冷却",
				"生成2个弹跳雷球",
				"生成大型弹跳雷球"
			],
			"maxStack": 15
		},
		{
			"idx": 67,
			"id": "61008",
			"type": "shadow",
			"name": "雷公面具",
			"activ": "negativ",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/61008.png",
			"effect": [
				"雷攻雷防+16",
				"雷攻雷防+5%"
			],
			"effectUpdata": [
				"雷攻雷防+48",
				"雷攻雷防+7%"
			],
			"tags": [
				"增益"
			],
			"lockEffect": [
				"雷伤减免+15%",
				"雷伤加成+10%",
				"召唤物属性+8%",
				"暴击伤害+20%"
			],
			"maxStack": 100
		},
		{
			"idx": 68,
			"id": "62016",
			"type": "shadow",
			"name": "一闪",
			"activ": "positiv",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/62016.png",
			"effect": [
				"所有角色技能-8秒冷却时间，并获得一闪：使用角色技能和普攻时有20%几率随机使1个正在冷却中的技能-2秒冷却时间，持续6秒"
			],
			"effectUpdata": [
				"所有角色技能-8秒冷却时间，并获得一闪：使用角色技能和普攻时有28%几率随机使1个正在冷却中的技能-2秒冷却时间，持续6秒"
			],
			"tags": [
				"冷却"
			],
			"maxStack": 40
		},
		{
			"idx": 69,
			"id": "62008",
			"type": "shadow",
			"name": "招雷符",
			"activ": "positiv",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/62008.png",
			"effect": [
				"向前方发射慢速雷电球，造成最多5次40%雷攻伤害，并使其雷防-10%"
			],
			"effectUpdata": [
				"向前方发射慢速雷电球，造成最多5次56%雷攻伤害，并使其雷防-10%"
			],
			"tags": [
				"群攻",
				"减防"
			],
			"maxStack": 40
		},
		{
			"idx": 70,
			"id": "62024",
			"type": "shadow",
			"name": "惊雷宝印",
			"activ": "positiv",
			"property": "雷",
			"divinatory": "震",
			"icon": "/image/shadow/62024.png",
			"effect": [
				"按自身最高元素属性召唤巨型随从，存活15秒。随从继承主人60%最高元素属性"
			],
			"effectUpdata": [
				"按自身最高元素属性召唤巨型随从，存活15秒。随从继承主人84%最高元素属性"
			],
			"tags": [
				"召唤"
			],
			"maxStack": 40
		}
	]
}

module.exports.shadows = shadows;