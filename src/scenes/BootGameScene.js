import Phaser from "phaser";


class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        //this.load.image('milos','src/image/bigmilos.png');
       // this.load.spritesheet('yeet','src/image/botei.png',
        //{ frameWidth: 67 , frameHeight: 163}); 
        this.load.image('tilesprite','src/image/TileSprite (2).png');
    }

    create() {
     //milos = this.add.image(200,350,'milos').setScale(3);
     //bird = this.add.sprite(220, 350, 'yeet').setScale(3);
     tilesprite = this.add.tileSprite(0,0,850,1400,'tilesprite')
     .setorigin(0,0)
     .setScale(3);
    }
    
    update(delta, time) {
        background.tilePositionY -= 10;
    }
}

export default BootGameScene;
