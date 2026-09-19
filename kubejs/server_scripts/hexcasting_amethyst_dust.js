ServerEvents.recipes(event => {
	event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
        { item: 'minecraft:amethyst_shard' }
    ],
    tool: {
        item: 'kubejs:mortarandpestleitem'
    },
    result: [
        { item: 'hexcasting:amethyst_dust', count: 2 },
        { item: 'hexcasting:amethyst_dust', chance: 0.50 }
    ]
}).id('kubejs:cutting_amethyst_with_mortar')
})