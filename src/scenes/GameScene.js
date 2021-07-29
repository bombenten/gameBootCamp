import Phaser from "phaser";

let jaigayray ;
let badgay ;
let background ;
let pokemon ;
let ground ;
let keyW;
let keyA;
let keyS;
let keyD;
let PhiTo

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
    //     this.load.image('milos','src/image/bigmilos.png');
        // this.load.spritesheet('badgay', 'src/image/botei.png',
        // { frameWidth: 66.5 , frameHeight: 164}) ;
    //    this.load.image('bg', 'src/image/TileSprite (2).png');
    //    this.load.image('mon', 'src/image/images/pokemon/poke (4).png');
    //    this.load.image('ground','src/image/ground.png');

        this.load.spritesheet('phito', 'src/image/flyTo.png',
        {frameWidth: 36 , frameHeight: 25 }) ;
        
    }

    create() {
        // jaigayray = this.physics.add.image(250, 380, 'milos').setScale(3);
        // jaigayray.setCollideWorldBounds(true);

        // ground = this.physics.add.image(200, 710, 'ground')
        // .setScale(0.5)
        // .setSize(500,280)
        // .setOffset(0,190)
        // .setCollideWorldBounds(true);

        // this.physics.add.collider(jaigayray,ground);

    //    this.physics.add.overlap(jaigayray,ground, ()=>{
    //         badgay = this.add.sprite(250, 380, 'badgay').setScale(3);
    //     });

        // badgay = this.physics.add.sprite(250, 380, 'badgay').setScale(3);
        // this.anims.create({
        //     key: 'gayAni',
        //     frames: this.anims.generateFrameNumbers('badgay', {
        //         start: 0,
        //         end: 15
        //     }),
        //     duration: 1000,
        //     framerate: 0,
        //     repeat: -1
        // })

       //background = this.add.tileSprite(0, 0, 850, 1400, 'bg')
       //.setOrigin(0, 0)
       //.setScale(5);

    //    pokemon = this.physics.add.staticGroup();
    //     pokemon.create(200, 300, 'mon');
    //     pokemon.create(500, 300, 'mon');
    //     pokemon.create(400, 500, 'mon');

    // this.input.on('pointermove', (pointer)=>{
    //     badgay.x = pointer.x
    //     badgay.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
    // })
        
    //Player Control
    // keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    // keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    // keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    // keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    PhiTo = this.physics.add.sprite(250, 380, 'phito').setScale(3);
        this.anims.create({
            key: 'ToAni',
            frames: this.anims.generateFrameNumbers('phito', {
                start: 0,
                end: 15
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })

    }
    
    
    
    update(delta, time) {
       // background.tilePositionY -=0.5 ;
    //    badgay.anims.play('gayAni', true);
       
    // if(keyW.isDown){
    //     badgay.setVelocityY(-500);
    // }else if(keyS.isDown){
    //     badgay.setVelocityY(500);
    // }else{
    //     badgay.setVelocityY(0);
    // }
    // if(keyA.isDown){
    //     badgay.setVelocityX(-500);
    // }else if(keyD.isDown){
    //     badgay.setVelocityX(500);
    // }else{
    //     badgay.setVelocityX(0);
    // }

    PhiTo.anims.play('ToAni', true);

    }
}

export default GameScene;
