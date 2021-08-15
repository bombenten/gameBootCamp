import Phaser from "phaser";


//player
let angle;
let guy;
let girl;
let mons;
let to;
let tou;

//Control
let keyW;
let keyA;
let keyS;
let keyD;

class Animation extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Animation'
        });
    }

    preload() {
        this.load.spritesheet('angle','src/image/flyAngle.png',
        { frameWidth: 30.875 , frameHeight: 21});

        this.load.spritesheet('girl','src/image/flyGirl.png',
        { frameWidth: 36 , frameHeight: 25});

        this.load.spritesheet('guy','src/image/flyGuy.png',
                { frameWidth: 36.25 , frameHeight: 25});

        this.load.spritesheet('mons','src/image/flymons.png',
                { frameWidth: 28 , frameHeight: 18});

        this.load.spritesheet('to','src/image/flyTo.png',
        { frameWidth: 36 , frameHeight: 25});
    }

    create() {
        //show x y
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"'}); 
        this.pointer = this.input.activePointer; 

        //create character
            angle = this.physics.add.sprite(100, 140, 'angle').setScale(3);
            girl = this.physics.add.sprite(350, 140, 'girl').setScale(3);
            guy = this.physics.add.sprite(100, 350, 'guy').setScale(3);
            mons = this.physics.add.sprite(350, 350, 'mons').setScale(3);
            to = this.physics.add.sprite(100, 550, 'to').setScale(3);
            tou = this.physics.add.sprite(350, 550, 'to').setScale(3);

        //angle
        this.anims.create({
            key: 'angleAni',
            frames: this.anims.generateFrameNumbers('angle', {
                start: 0,
                end: 7
            }),
            duration: 500,
            framerate: 0,
            repeat: -1
        })
           
        //girl
        this.anims.create({
            key: 'girlAni',
            frames: this.anims.generateFrameNumbers('girl', {
                start: 0,
                end: 7
            }),
            duration: 500,
            framerate: 0,
            repeat: -1
        })

        //guy
        this.anims.create({
            key: 'guyAni',
            frames: this.anims.generateFrameNumbers('guy', {
                start: 0,
                end: 7
            }),
            duration: 100,
            framerate: 0,
            repeat: -1
        })
        
        //mons       
        this.anims.create({
            key: 'monsAni',
            frames: this.anims.generateFrameNumbers('mons', {
                start: 0,
                end: 7
            }),
            duration: 100,
            framerate: 0,
            repeat: -1
        })
        
        //to normal   
        this.anims.create({
            key: 'toAni',
            frames: this.anims.generateFrameNumbers('to', {
                start: 0,
                end: 7
            }),
            duration: 500,
            framerate: 0,
            repeat: -1
        })
        
        //tou ultimate
        this.anims.create({
            key: 'touAni',
            frames: this.anims.generateFrameNumbers('to', {
                start: 8,
                end: 15
            }),
            duration: 300,
            framerate: 0,
            repeat: -1
        })
        
        //anims.play
        angle.anims.play('angleAni', true);
        girl.anims.play('girlAni', true);
        guy.anims.play('guyAni', true);
        mons.anims.play('monsAni', true);
        tou.anims.play('touAni', true);
        to.anims.play('toAni', true);

        //player pointer
        // this.input.on('pointermove', (pointer)=>{
        //     tou.x = pointer.x
        //     tou.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        // })

        //Player Control
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }
    
    update(delta, time) {
        //show x y
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')'); 

        //Player Control
        // if(keyW.isDown){
        //     to.setVelocityY(-500);
        // }else if(keyS.isDown){
        //     to.setVelocityY(500);
        // }else{
        //     to.setVelocityY(0);
        // }
        // if(keyA.isDown){
        //     to.setVelocityX(-500);
        // }else if(keyD.isDown){
        //     to.setVelocityX(500);
        // }else{
        //     to.setVelocityX(0);
        // }

    }
}

export default Animation;
