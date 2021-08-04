import Phaser from "phaser";

let badboy;
let badboytimer;

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

        badboy = this.physics.add.sprite(220, 350, 'badboy')
        .setScale(1.5)
        .setDepth(10)
        .setSize(35,155)
        .setOffset(15,0);

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
        badboytimer = this.time.addEvent({
            delay: 5000,
            callback: function(){
                //code
            },
            callbackScope: this,
            loop: false,
            startAt: 1000,
            timeScale: 1,
            repeat: 10
        })


    }

    update(delta, time) {
        //Show X Y
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');
        

        badboy.anims.play('badboyAni', true);

    }
}

export default TimerEvent;