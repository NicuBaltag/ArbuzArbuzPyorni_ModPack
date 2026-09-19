StartupEvents.registry('item', event => {
  // If you want to specify a different texture location you can do that too, like this:
  event.create('mortarandpestleitem').texture('kubejs:item/mortarandpestleitem').displayName("Пестик и ступка").unstackable()
})