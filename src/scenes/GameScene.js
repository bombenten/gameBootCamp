import Phaser from "phaser";

let jaigere;
let badboy;
let backGround;
let poke;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        // this.load.image('milos', 'src/image/bigmilos.png');

        // this.load.spritesheet('badboy','src/image/botei.png',
        // { frameWidth: 66.5 , frameHeight: 164});
        
        // this.load.image('bg', 'src/image/TileSprite (2).png');

        this.load.image('poke', 'src/image/poke (9).png');

    }

    create() {
        // jaigere = this.add.image(250, 380, 'milos').setScale(5);

        // badboy = this.add.sprite(250, 380, 'badboy').setScale(3);

        // backGround = this.add.tileSprite(0, 0, 850, 1400, 'bg')
        // .setOrigin(0, 0)
        // .setScale(5);

        poke = this.physics.add.staticGroup();
        poke.create(100, 200, 'poke');
        poke.create(200, 200, 'poke');
        poke.create(300, 200, 'poke');
    }
    
    
    
    update(delta, time) {
        // backGround.tilePositionY -=0.5;
    }
}

export default GameScene;
