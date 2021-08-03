import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import Menu from './scenes/Menu';
import Animation from './scenes/Animation';
import bullet from './scenes/bullet';
import MonsterCreation from './scenes/MonsterCreation';
import BootGameScene from './scenes/BootGameScene'

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
            gravity: {y:300}
        }
    },
    scene: [
        BootGameScene
        // MonsterCreation,
        // bullet
        // Menu,
        // GameScene,
        // Animation
        
    ],
    
    
};

const game = new Phaser.Game(config);