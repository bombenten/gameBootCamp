import Phaser from "phaser";

let badboy;
let badspawn;
let badGrp;

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
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"' })
        .setDepth(100);
        this.pointer = this.input.activePointer;

        badGrp = this.physics.add.group();

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
        

        badspawn = this.time.addEvent({
            delay: 1000,
            callback: function(){
                badboy = this.physics.add.sprite(220, 720, 'badboy')
                .setScale(1.5)
                .setDepth(10)
                .setSize(35,155)
                .setOffset(15,0);
                badGrp.add(badboy);
                badGrp.setVelocityY(-500);
                badboy.anims.play('badboyAni', true);

            },
            callbackScope: this,
            loop: true,
            startAt: 1000,
            timeScale: 1
        })

        

        
    }
    
    update(delta, time) {
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');

        
        
    }
}

export default TimerEvent;
