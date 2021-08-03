import Phaser from "phaser";

let eventBullet;
let bullets;
let tou;
let bulletGroup;
let keyFire;
let bulletSpeed = 400;

class bullet extends Phaser.Scene {  //เปลี่ยนชื่อ Class เป็น MainMenu
    constructor(test) {
        super({
            key: 'bullet'  //กำหนด Key ใน Constructor ให้เป็น MainMenu
        });
    }

    preload() {
        this.load.spritesheet('bullet','src/image/bullet1.png',
        { frameWidth: 21 , frameHeight: 18});

        this.load.spritesheet('to','src/image/flyTo.png',
        { frameWidth: 36 , frameHeight: 25});

        this.load.image('trident','src/image/bullet1.png');
    }

    create() {

        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"'}); 
        this.pointer = this.input.activePointer;

        tou = this.physics.add.sprite(350, 550, 'to').setScale(3);

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

        tou.anims.play('touAni', true);

        keyFire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        bulletGroup = this.add.group();

        this.input.on('pointermove', (pointer)=>{
            tou.x = pointer.x
            tou.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        })


    }
    
    
    update() {

        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');
        
        //bullet
        if(Phaser.Input.Keyboard.JustDown(keyFire)){
            bullet = this.physics.add.sprite(tou.x, tou.y, 'trident')
            .setScale(1);
            bullet.body.velocity.x = bulletSpeed;
            bulletGroup.add(bullet);          
        }
        
        for(let i = 0; i < bulletGroup.getChildren().length; i++){
            if(bulletGroup.getChildren()[i].x > 350){
                bulletGroup.getChildren()[i].destroy();
            }      
        }


        // for(let i=0;i<bulletGroup.length;i++){
        //     let bull = bulletGroup.getChildren()[i];
        //     if(bull.y <= -50){
        //         bull.destroy(true);
        //     }
        // }
    }
}

export default bullet;  //เปลี่ยนค่าตรง export default ให้เป็น MainMenu