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
     yeet = this.physics.add.sprite(240, 350, 'yeet').setScale(3).setDepth(5);
    //  yeet.setCollideWorldBounds(true) ;
    this.anims.create({
        key: 'yeetAni',
        frames: this.anims.generateFrameNumbers('yeet', {
            start: 0,
            end: 15
        }),
        duration: 10,
        framerate: 0,
        repeat: -1
    })

    //  ground = this.physics.add.image(100, 650, 'ground').setScale(1,1).setSize(500,90).setOffset(0,250);
    //     ground.setCollideWorldBounds(true);
    //     this.physics.add.collider(yeet,ground);
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
        yeet.anims.play('yeetAni', true);
    }
}

export default BootGameScene;
