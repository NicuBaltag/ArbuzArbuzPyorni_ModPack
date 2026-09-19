ServerEvents.recipes(event => {
event.shaped(
  Item.of('kubejs:charged_amethyst_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'hexcasting:charged_amethyst'
  }
)
})