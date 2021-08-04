import Phaser from "phaser";

let badboy;
let badSpawn;
let badGroup;

let bullet;
let bulletGroup;
let eventBullet;

class TimerEvent extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TimerEvent'
        });
    }

    preload() {
        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163});

        this.load.image('bullet', 'src/image/spike.png');

    }

    create() {
        //Show X Y
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"' })
        .setDepth(100);
        this.pointer = this.input.activePointer;
        badboy = this.physics.add.sprite(200, 350, 'badboy')
            .setScale(1.5)
            .setDepth(10)
            .setSize(35,155)
            .setOffset(15,0);
        

        //Animation
        this.anims.create({
            key: 'badboyAni',
            frames: this.anims.generateFrameNumbers('badboy', {
                start: 0,
                end: 15
            }),
            duration: 1500,
            framerate: 0,
            repeat: -1
        })
        badboy.anims.play('badboyAni', true);

        //bullet Group
        bulletGroup = this.physics.add.group()

        //Event bullet
        eventBullet = this.time.addEvent({
            delay: 250,
            callback: function(){
                bullet = this.physics.add.image(badboy.x, badboy.y-110,'bullet')
                .setScale(0.025)
                .setSize(0.2);
                bulletGroup.add(bullet);
                bulletGroup.setVelocityY(-1200);
                },
            callbackScope: this,
            loop: true,
            pause: false
            });






        this.input.on('pointermove', (pointer)=>{
            badboy.x = pointer.x
            badboy.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        })
       


        // badGroup = this.physics.add.group();

        //Event
        // badSpawn = this.time.addEvent({
        //     delay: Phaser.Math.Between(500, 1500) ,
        //     callback: function(){
        //         badboy = this.physics.add.sprite(Phaser.Math.Between(0, 450) , 720 +100, 'badboy')
        //             .setScale(1.5)
        //             .setDepth(10)
        //             .setSize(35,155)
        //             .setOffset(15,0);
        //         badGroup.add(badboy);
        //         // badboy.flipY = !badboy.flipY;
        //         badboy.setVelocityY(Phaser.Math.Between(-200, -1000) );
        //         badboy.anims.play('badboyAni', true);
        //     },
        //     callbackScope: this,
        //     loop: true,
        //     startAt: 1000,
        //     timeScale: 1
        // })

        

    }
    
    update(delta, time) {
        //Show X Y
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');

        //destroy badGroup when y = 350
        // for (let i = 0; i < badGroup.getChildren().length; i++) {
        //     if (badGroup.getChildren()[i].y < 350) {
        //         badGroup.getChildren()[i].destroy();
        //     }
        // }

        //destroy bulletGroup when y = 350
        for (let i = 0; i < bulletGroup.getChildren().length; i++) {
            if (bulletGroup.getChildren()[i].y < 150) {
                bulletGroup.getChildren()[i].destroy();
            }
        }
    } 
}

export default TimerEvent;