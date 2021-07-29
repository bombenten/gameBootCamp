import Phaser from "phaser";

let milos;
let badboy;
let backGround;
let poke;
let ground;
let cursor;

//Controller
let keyW;
let keyA;
let keyS;
let keyD;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        // this.load.image('milos','src/image/bigmilos.png');
        
         this.load.spritesheet('badboy','src/image/botei.png',
         { frameWidth: 66.5 , frameHeight: 164}); 
        
        // this.load.image('bg', 'src/image/TileSprite (2).png');
        
        // this.load.image('poke','src/image/poke (9).png');

        // this.load.image('ground','src/image/ground.png');
    }

    create() {
    //     milos = this.physics.add.image(250,250,'milos').setScale(3);
    //     milos.setCollideWorldBounds(true);
        
    //     ground = this.physics.add.image(250,700,'ground')
    //     .setScale(0.5,0.3)
    //     .setCollideWorldBounds(true)
    //     .setSize(500,200)
    //     .setOffset(0,190);

        

    //    this.physics.add.collider(milos,ground);

        // this.physics.add.overlap(jaigere,ground, ()=>{
        //     badboy = this.add.sprite(250, 380, 'badboy').setScale(3);
        // });

       badboy = this.physics.add.sprite(250, 300, 'badboy').setScale(3);
       
       this.anims.create({
        key: 'BadboyAni',
        frames: this.anims.generateFrameNumbers('badboy', {
            start: 0,
            end: 15
        }),
        duration: 500,
        framerate: 0,
        repeat: -1
    })

        // backGround = this.add.tileSprite(0, 0, 850, 1400, 'bg')
        // .setOrigin(0, 0)
        // .setScale(5);

        // poke = this.physics.add.staticGroup();
        // poke.create(100, 300, 'poke');
        // poke.create(200, 300, 'poke');
        // poke.create(300, 300, 'poke');

        // this.input.on('pointermove', (pointer)=>{
        //     badboy.x = pointer.x
        //     badboy.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        // })

        // cursor = this.input.keyboard.createCursorKey();

        //Player Control
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }
    
    
    
    update(delta, time) {
        // backGround.tilePositionY -= 0.5;
        
        badboy.anims.play('BadboyAni', true);
        
        // if(cursor.left.isDown){
        //     badboy.setVelocityX(-400);
        // } else if(cursor.right.isDown){
        //     badboy.setVelocityX(400);
        // } else {
        //     badboy.setVelocityX(0);
        // }

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

export default GameScene;
