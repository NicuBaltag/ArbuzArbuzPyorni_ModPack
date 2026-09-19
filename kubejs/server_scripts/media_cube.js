ServerEvents.recipes(event => {
	event.recipes.createMechanicalCrafting('hexcasting:creative_unlocker', [
		' DDD ',
        'DDADD',
        'DASAD',
        'DDADD',
        ' DDD '
	], {
		"A": Item.of('hex_machina:mind_phial', '{"hexcasting:media":5000000}'),       // or '#forge:gears/precision', Ingredient.of(...)
        "D": 'kubejs:charged_amethyst_block',
        "S": 'kubejs:proto_core'
	})
})
