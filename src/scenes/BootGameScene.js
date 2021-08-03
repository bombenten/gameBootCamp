import Phaser from "phaser";
let yeet;
let bg;
let ground;
 let milos;
class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.load.image('milos','src/image/bigmilos.png');
        this.load.spritesheet('yeet','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163}); 
        this.load.image('ground','src/image/ground.png');
        this.load.image('bg','src/image/TileSprite (2).png');
    }

    create() {
     //milos = this.add.image(200,350,'milos').setScale(3);
     yeet = this.physics.add.sprite(220, 250, 'yeet').setScale(3).setDepth(5);
     yeet.setCollideWorldBounds(true) ;

     ground = this.physics.add.image(100, 650, 'ground').setScale(1,1).setSize(500,90).setOffset(0,250);
        ground.setCollideWorldBounds(true);
        this.physics.add.collider(yeet,ground);
        // this.physics.add.overlap(yeet,ground,()=>{
        //     milos = this.add.image(200,350,'milos').setScale(3).setDepth(3);
        // });
     //bg = this.add.tileSprite(0,0,850,1400,'bg')
     //.setOrigin(0,0)
     //.setScale(3)
     //;
    }
    
    update(delta, time) {
        // bg.tilePositionY -= 1;
    }
}

export default BootGameScene;
