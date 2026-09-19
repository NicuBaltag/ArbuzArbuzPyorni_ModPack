ServerEvents.recipes(event => {
  event.shapeless(
  Item.of('hexcasting:charged_amethyst', 1), // arg 1: output
  [
    'minecraft:amethyst_shard', 	       // arg 2: the array of inputs
    '3x hexcasting:amethyst_dust'
  ]
)
  console.log('Hello! The recipe event has fired!')
})