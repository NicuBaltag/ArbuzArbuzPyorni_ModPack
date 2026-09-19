ServerEvents.recipes(event => {
event.shaped(
  Item.of('kubejs:proto_core', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'hexcasting:charged_amethyst',
    B: 'minecraft:nether_star'
  }
)
})