import Phaser from "phaser";
import { SetScale } from "phaser/src/actions";

let gameover;
let button;

class Menu extends Phaser.Scene {  //เปลี่ยนชื่อ Class เป็น MainMenu
    constructor(test) {
        super({
            key: 'Menu'  //กำหนด Key ใน Constructor ให้เป็น MainMenu
        });
    }

    preload() {
        this.load.image('gameover', 'src/image/gameOver (2).png');
    }

    create() {
        button = this.add.image(220,400,'gameover')
        .setInteractive(); //ทำให้กดได้
        button.on('pointerup',()=>{
            this.scene.start('GameScene')                           
        })
    }
    
    
    update() {
        
    }
}

export default Menu;  //เปลี่ยนค่าตรง export default ให้เป็น MainMenu