PlayerEvents.tick(event => {
    let player = event.player;
    
    // Проверяем предмет в главной руке игрока
    let mainHandItem = player.getMainHandItem();
    if (mainHandItem.id === 'irons_spellbooks:scroll' && mainHandItem.nbt && mainHandItem.nbt.toString().contains('traveloptics:abyssal_blast')) {
        mainHandItem.setCount(0); // Полностью уничтожаем предмет в руке
        player.tell('§cСвиток Abyssal Blast запрещен на сервере и был удален!');
    }

    // Проверяем предмет во второй руке игрока
    let offHandItem = player.getOffHandItem();
    if (offHandItem.id === 'irons_spellbooks:scroll' && offHandItem.nbt && offHandItem.nbt.toString().contains('traveloptics:abyssal_blast')) {
        offHandItem.setCount(0); // Полностью уничтожаем предмет во второй руке
        player.tell('§cСвиток Abyssal Blast запрещен на сервере и был удален!');
    }
});
