import Phaser from "phaser";

let flyguy;

class Menu extends Phaser.Scene {  //เปลี่ยนชื่อ Class เป็น MainMenu
    constructor(test) {
        super({
            key: 'Menu'  //กำหนด Key ใน Constructor ให้เป็น MainMenu
        });
    }

    preload() {
        this.load.spriteSheet('flyguy', 'src/image/flyGuy.png',
        { frameWidth: 36.25 , frameHeight: 25});
    }

    create() {
        flyguy = this.physics.add.spriteSheet(250, 250, 'flyguy').setScale(2);  

        this.anims.create({
            key: 'flyGuyAni',
            frames: this.anims.generateFrameNumbers('flyguy', {
                start: 0,
                end: 7
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })
                               
    }
    
    
    update(delta, time) {
        flyguy.anims.play('flyGuyAni', true);
    }
}

export default Menu;  //เปลี่ยนค่าตรง export default ให้เป็น MainMenu