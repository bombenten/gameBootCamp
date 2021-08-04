import Phaser from "phaser";

let badboy;
let badspawn;
let badGrp;
let bull;
let eventBull;
let bullGrp;

class TimerEvent extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TimerEvent'
        });
    }

    preload() {
        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163}); 
        this.load.image('bull','src/image/spike.png');
    }

    create() {
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"' })
        .setDepth(100);
        this.pointer = this.input.activePointer;

        // badGrp = this.physics.add.group();
        

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

       
        
    

        // badspawn = this.time.addEvent({
        //     delay: 1000,
        //     callback: function(){
        //         badboy = this.physics.add.sprite(Phaser.Math.Between(0, 480) 
        //         , 820, 'badboy')
        //         .setScale(1.5)
        //         .setDepth(10)
        //         .setSize(35,155)
        //         .setOffset(15,0);
        //         badGrp.add(badboy);
        //         badboy.setVelocityY(Phaser.Math.Between(-200, -1000));
        //         badboy.anims.play('badboyAni', true);

        //     },
        //     callbackScope: this,
        //     loop: true,
        //     startAt: 1000,
        //     timeScale: 1
        // })

        bullGrp = this.physics.add.group();

        eventBull = this.time.addEvent({
            delay: 250,
            callback: function(){
                bull = this.physics.add.image(badboy.x, badboy.y-110,'bull')
                .setScale(0.025)
                .setSize(0.2);
                bullGrp.add(bull);
                bullGrp.setVelocityY(-1200);
                },
            callbackScope: this,
            loop: true,
            pause: false
            });

        this.input.on('pointermove', (pointer)=>{
            badboy.x = pointer.x
            badboy.y = pointer.y
        })
    }
    
    update(delta, time) {
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');
        
        // for(let i=0;i<badGrp.length;i++){
        //     if(badGrp.getChildren()[i].y > -150){
        //         badGrp.getChildren()[i].destroy();
        //     }
        // } 

        for(let i=0;i<bullGrp.getChildren().length;i++){
            if(bullGrp.getChildren()[i].y < 150){
                bullGrp.getChildren()[i].destroy();
            }
        } 
        
    }
}

export default TimerEvent;
