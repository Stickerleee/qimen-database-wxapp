const fromWeapons = require('./weapons').weapons.data
const fromSouls = require('./souls').data.data
const fromShadows = require('./shadows').shadows.data

const data = [{
		"type": "shadow",
		"category": fromShadows
	},
	{
		"type": "weapon",
		"category": fromWeapons
	},
	{
		"type": "soul",
		"category": fromSouls
	}
]

module.exports = {
	data
}