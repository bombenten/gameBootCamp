import Phaser from "phaser";

let button;

class Menu extends Phaser.Scene {  //เปลี่ยนชื่อ Class เป็น MainMenu
    constructor(test) {
        super({
            key: 'Menu'  //กำหนด Key ใน Constructor ให้เป็น MainMenu
        });
    }

    preload() {
        this.load.image('bt', 'src/image/gameOver (2).png');
    }

    create() {
        button = this.physics.add.image(250, 250, 'bt').setScale(2)
        .setInteractive();

        button.on('pointerup',()=>{
            this.scene.start('GameScene')          
        })                             

    }
    
    
    update() {
        
    }
}

export default Menu;  //เปลี่ยนค่าตรง export default ให้เป็น MainMenu