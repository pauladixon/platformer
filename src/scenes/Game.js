import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' })
  }

  preload() {
    this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
      frameWidth: 32,
      frameHeight: 64
    })
  }

  create(data) {
    this.anims.create({
      key: 'hero-running',
      frames: this.anims.generateFrameNumbers('hero-run-sheet'),
      frameRate: 12,
      repeat: -1
    })

    this.player = this.physics.add.sprite(400, 300, 'hero-run-sheet')
    this.player.anims.play('hero-running')

    this.player.body.setCollideWorldBounds(true)
  }

  update(time, delta) {}
}

export default Game