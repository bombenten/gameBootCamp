import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
<<<<<<< HEAD
=======
// import Menu from './scenes/Menu';
// import Animation from './scenes/Animation';
>>>>>>> parent of 0ca3c27 (new)

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 450,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            // gravity: {y:300}
        }
    },
    scene: [
<<<<<<< HEAD
        GameScene,
=======
        // Menu,
        GameScene
        // Animation
        
>>>>>>> parent of 0ca3c27 (new)
    ],
    
    
};

const game = new Phaser.Game(config);