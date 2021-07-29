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
        // this.load.image('milos', 'src/image/bigmilos.png');

        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 66.5 , frameHeight: 164}); 

    }

    create() {
        // jaigere = this.add.image(250, 380, 'milos').setScale(5);

        badboy = this.add.sprite(250, 380, 'badboy').setScale(3);
    }
    
    
    
    update(delta, time) {

    }
}

export default GameScene;
