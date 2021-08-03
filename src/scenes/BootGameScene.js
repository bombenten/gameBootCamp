import Phaser from "phaser";
let yeet;
let bg;
let ground;
 let milos;
 let keyW;
let keyA;
let keyS;
let keyD;
let ag;
class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.load.spritesheet('ag','src/image/flyAngle.png',
        { frameWidth: 30 , frameHeight: 21}); 

        this.load.image('milos','src/image/bigmilos.png');

        this.load.spritesheet('yeet','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163}); 

        this.load.image('ground','src/image/ground.png');

        this.load.image('bg','src/image/TileSprite (2).png');
    }

    create() {
     //milos = this.add.image(200,350,'milos').setScale(3);
    //  yeet = this.physics.add.sprite(240, 350, 'yeet').setScale(3).setDepth(6);
    //   yeet.setCollideWorldBounds(true) ;
       ag = this.physics.add.sprite(240, 350, 'ag').setScale(4);
       ag.setCollideWorldBounds(true) ;
    // this.anims.create({
    //     key: 'yeetAni',
    //     frames: this.anims.generateFrameNumbers('yeet', {
    //         start: 0,
    //         end: 15
    //     }),
    //     duration: 1,
    //     framerate: 0,
    //     repeat: -1
    // })
    this.anims.create({
        key: 'agAni',
        frames: this.anims.generateFrameNumbers('ag', {
            start: 0,
            end: 7
        }),
        duration: 1000,
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
       //Player Control
  keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    
    update(delta, time) {
        //bg.tilePositionY -= 1;
        ag.anims.play('agAni', true);

        if(keyW.isDown){
            ag.setVelocityY(-500);
        }else if(keyS.isDown){
            ag.setVelocityY(500);
        }else{
            ag.setVelocityY(0);
        }
        if(keyA.isDown){
            ag.setVelocityX(-500);
        }else if(keyD.isDown){
            ag.setVelocityX(500);
        }else{
            ag.setVelocityX(0);
        }
        
        // angle.anims.play(' angletAni', true);

        // if(keyW.isDown){
        //     angle.setVelocityY(-500);
        // }else if(keyS.isDown){
        //     angle.setVelocityY(500);
        // }else{
        //     angle.setVelocityY(0);
        // }
        // if(keyA.isDown){
        //     angle.setVelocityX(-500);
        // }else if(keyD.isDown){
        //     angle.setVelocityX(500);
        // }else{
        //     angle.setVelocityX(0);
        // }
    }
}

export default BootGameScene;
