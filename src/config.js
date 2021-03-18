import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#ffffff',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 750
      },
      debug: true,
      debugShowVelocity: true,
      debugShowBody: true,
      debugShowStaticBody: true
    }
  }
};
