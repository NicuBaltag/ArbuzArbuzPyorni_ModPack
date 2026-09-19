StartupEvents.registry('item', event => {
  // If you want to specify a different texture location you can do that too, like this:
  event.create('proto_core').texture('kubejs:item/proto_core').displayName("Протоядро").unstackable().glow(true)
})