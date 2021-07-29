import Phaser from "phaser";

let jaigere;
let badboy;
let background;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //this.load.image('milos', 'src/image/bigmilos.png');
       // this.load.spritesheet('badboy','src/image/botei.png',
        //{ frameWidth: 66.5 , frameHeight: 164}); 
        this.load.image('bg', 'src/image/TileSprite (2).png');
    }

    create() {
        //jaigere = this.add.image(100, 200, 'milos')
        //.setScale(3);
        //this.add.sprite(220,300,'badboy').setScale(1.5);
        background = this.add.tileSprite(0, 0, 850, 1400, 'bg').setOrigin(0, 0).setScale(5);

    }
    
    
    
    update(delta, time) {
        background.tilePositionY -= 0.5;

    }
}

export default GameScene;
