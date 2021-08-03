import Phaser from "phaser";


class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        //this.load.image('milos','src/image/bigmilos.png');
        this.load.spritesheet('yeet','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163}); 
    }

    create() {
     //milos = this.add.image(200,350,'milos').setScale(3);
     bird = this.add.sprite(425, 700, 'yeet').setScale(0.5);
    }
    
    update(delta, time) {

    }
}

export default BootGameScene;
