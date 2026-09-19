StartupEvents.registry('block', event => {
  event.create('charged_amethyst_block') // Create a new block
    .displayName('Блок заряженного аметиста') // Set a custom name
    .textureAll('kubejs:block/charged_amethyst_block')
    .soundType('amethyst') // Set a material (affects the sounds and some properties)
    .hardness(1) // Set hardness (affects mining time)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_wooden_tool') // the tool tier must be at least iron
})