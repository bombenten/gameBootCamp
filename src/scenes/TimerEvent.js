import Phaser from "phaser";

let badboy;
let badSpawn;
let badGroup;

class TimerEvent extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TimerEvent'
        });
    }

    preload() {
        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163});

    }

    create() {
        //Show X Y
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"' })
        .setDepth(100);
        this.pointer = this.input.activePointer;
        
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
       
        badGroup = this.physics.add.group();

        //Event
        badSpawn = this.time.addEvent({
            delay: 1000,
            callback: function(){
                badboy = this.physics.add.sprite(200, 720, 'badboy')
                    .setScale(1.5)
                    .setDepth(10)
                    .setSize(35,155)
                    .setOffset(15,0);
                badGroup.add(badboy);
                badGroup.setVelocityY(-300);
                badboy.anims.play('badboyAni', true);
            },
            callbackScope: this,
            loop: true,
            startAt: 1000,
            timeScale: 1
        })
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
//destroy snowManGroup when x = -150
for (let i = 0; i < snowManGroup.getChildren().length; i++) {
    if (snowManGroup.getChildren()[i].x < -150) {
        snowManGroup.getChildren()[i].destroy();
    }
}
        

    }
    
    update(delta, time) {
        //Show X Y
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');


    }
}

export default TimerEvent;
