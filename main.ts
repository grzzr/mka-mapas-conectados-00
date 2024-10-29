tileUtil.onMapLoaded(function (tilemap2) {
    tiles.placeOnRandomTile(jogador, sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (tileUtil.currentTilemap() == mapa1) {
        tileUtil.unloadTilemap()
        tiles.setCurrentTilemap(tileUtil.getConnectedMap(mapa1, MapConnectionKind.Door1))
    } else if (tileUtil.currentTilemap() == mapa2) {
        tileUtil.unloadTilemap()
        tiles.setCurrentTilemap(tileUtil.getConnectedMap(mapa2, MapConnectionKind.Door1))
    }
})
let mapa2: tiles.TileMapData = null
let mapa1: tiles.TileMapData = null
let jogador: Sprite = null
jogador = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(jogador)
mapa1 = tilemap`mapa1`
mapa2 = tilemap`mapa3`
tileUtil.connectMaps(mapa1, mapa2, MapConnectionKind.Door1)
tiles.setCurrentTilemap(mapa1)
scene.cameraFollowSprite(jogador)
