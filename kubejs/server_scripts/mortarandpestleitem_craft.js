ServerEvents.recipes(event => {
event.shaped(
  Item.of('kubejs:mortarandpestleitem', 1), // arg 1: output
  [
    '   ',
    'BAB', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'minecraft:stick',
    B: 'minecraft:cobblestone'
  }
)
})