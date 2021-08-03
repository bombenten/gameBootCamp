import Phaser from "phaser";

let milos;
let badboy;

class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        // this.load.image('milos', 'src/image/bigmilos.png');

        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163});

    }

    create() {
        // milos = this.add.image(200, 350, 'milos').setScale(3);

        badboy = this.add.sprite(220, 350, 'badboy').setScale(3);


    }
    
    update(delta, time) {

    }
}

export default BootGameScene;
