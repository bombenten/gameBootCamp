import Phaser from "phaser";

let jaigere;
let badboy;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //this.load.image('milos', 'src/image/bigmilos.png');
        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 66.5 , frameHeight: 164}); 
    }

    create() {
        //jaigere = this.add.image(100, 200, 'milos')
        //.setScale(3);
        this.add.sprite(220,300,'badboy').setScale(1.5);

    }
    
    
    
    update(delta, time) {

    }
}

export default GameScene;
