import Phaser from "phaser";

let milos;
let badboy;
let bg;
let ground;
let keyW;
let keyA;
let keyS;
let keyD;

class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.load.image('milos', 'src/image/bigmilos.png');
        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163}); 
        this.load.image('ground','src/image/ground.png')
        // this.load.image('bg', 'src/image/TileSprite (2).png');
    }

    create() {
        // milos = this.add.image(200,350,'milos').setScale(3);
        badboy = this.physics.add.sprite(220, 350, 'badboy').setScale(3)
        .setDepth(10)
        .setSize(35,155)
        .setOffset(15,0);
        
        // badboy.setCollideWorldBounds(true);
        // ground = this.physics.add.image(150,650,'ground').setScale(0.5,0.1)
        // .setSize(550,300)
        // .setOffset(0,170);
        // ground.setCollideWorldBounds(true);
        // this.physics.add.collider(badboy,ground);
        // this.physics.add.collider(badboy,ground, ()=>{
        //     milos = this.add.image(200,350,'milos').setScale(3);
        // });
        // bg = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0);
        this.anims.create({
            key: 'badboyani',
            frames: this.anims.generateFrameNumbers('badboy', {
                start: 0,
                end: 15
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })

        // this.input.on('pointermove', (pointer)=>{
        //     badboy.x = pointer.x
        //     badboy.y = pointer.y
        // })
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }
    
    update(delta, time) {
        // bg.tilePositionY -= 1;
        badboy.anims.play('badboyani', true);

        if(keyW.isDown){
            badboy.setVelocityY(-500);
        }else if(keyS.isDown){
            badboy.setVelocityY(500);
        }else{
            badboy.setVelocityY(0);
        }
        if(keyA.isDown){
            badboy.setVelocityX(-500);
        }else if(keyD.isDown){
            badboy.setVelocityX(500);
        }else{
            badboy.setVelocityX(0);
        }
    }
}

export default BootGameScene;
