controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 4 4 4 4 . . . 
        . . . . . . . . . . . . . 4 . . 
        . . . . 5 5 5 5 5 5 5 5 . 4 . . 
        . . . . 5 5 5 5 5 5 5 5 . 4 . . 
        . . . . . . . . . . . . . 4 . . 
        . . . . . . . . . 4 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlayer, 60, 0)
    projectile.setKind(SpriteKind.Projectile)
    music.pewPew.play()
})
info.onLifeZero(function () {
    game.over(false, effects.confetti)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.confetti, 500)
})
let enemy2Sprite: Sprite = null
let enemySprite: Sprite = null
let projectile: Sprite = null
let spacePlayer: Sprite = null
spacePlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 1 9 9 1 9 9 . . . . 
    . . . . 9 9 9 9 9 9 1 9 . . . . 
    . 7 7 7 9 9 9 9 9 9 9 9 7 7 7 . 
    7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 
    7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlayer, 200, 200)
spacePlayer.setStayInScreen(true)
info.setLife(10)
forever(function () {
    music.playMelody("C5 B A G F E D C ", 150)
})
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 . . . . . 4 . . . . . 
        . . . . 4 4 . . . 4 4 . . . . . 
        1 1 1 . 4 4 . . . 4 4 . . . . . 
        . . 1 . 2 4 4 4 4 2 4 . . . . . 
        . . . 1 4 2 4 4 2 4 4 . 1 1 1 1 
        . . . . 4 4 f 4 4 4 4 1 . . . 1 
        1 1 1 . 4 b 4 b 4 4 4 . . . . . 
        . . 1 1 4 4 4 4 4 4 4 1 1 1 1 . 
        . . . . 1 . . . . 1 . . . . 1 1 
        . . . 1 . . . . . . 1 . . . . . 
        . . 1 1 . . . . . . 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemySprite.setVelocity(-50, 0)
    enemySprite.setPosition(160, randint(0, 120))
})
game.onUpdateInterval(500, function () {
    enemy2Sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . e e e 2 e e e e 2 e e e e . . 
        . e e e 2 2 e e 2 2 e e e e . . 
        . e e . e e e e e e e . e e . . 
        . . . . e f e f e e e . . . . . 
        . . . . . f e f e e . . . . . . 
        . . e e e f e f e e e e e . . . 
        . e e e e e e e e e e e e e . . 
        . e e . . e e e e e . . e e . . 
        . . e . . e e e e e . . e . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e e e e e e . 
        . . . . . e e . e e . . . . . . 
        . . . . . e . . . e . . . . . . 
        `, SpriteKind.Enemy)
    enemy2Sprite.setVelocity(-50, 0)
    enemy2Sprite.setPosition(160, randint(0, 120))
})
