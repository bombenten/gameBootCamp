import Phaser from "phaser";

let objS;
let objR;
let event;
let objGroup;

class MonsterCreation extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MonsterCreation'
        });
    }

    preload() {
        this.load.image('objS', 'src/image/objS.png');
        this.load.image('objR', 'src/image/objR.png');
    }

    create() {

        objR=this.physics.add.image(180,650,'objR').setImmovable();

        objGroup=this.physics.add.group();

    event=this.time.addEvent({
        delay:2000,
        callback: function(){
            objS=this.physics.add.image(Phaser.Math.Between(50 , 
                550),-50,'objS');  //สร้างมอนสเตอร์
            objGroup.add(objS);
            objGroup.setVelocityY(Phaser.Math.Between(220 , 
                1000));  //กำหนดให้มอนสเตอร์ขยับลงล่าง
            this.physics.add.collider(objGroup,objR);
            },
        callbackScope: this,
        loop: true,
        paused: false,
        });

        this.input.on('pointermove', (pointer)=>{
            objR.x = pointer.x
            objR.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        })

    }
    
    update(delta, time) {

    }
}

export default MonsterCreation;
