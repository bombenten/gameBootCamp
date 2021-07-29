import Phaser from "phaser";

let button ;

class Menu extends Phaser.Scene { 
    constructor(test) {
        super({
            key: 'Menu'  
        });
    }

    preload() {
        this.load.image('bt','src/image/gameover (2).png');
    }

    create() {
        button = this.physics.add.image(225, 350, 'bt').setScale(3)
        .setInteractive();

        button.on('pointerup',()=>{
            this.scene.start('GameScene')  
            
        })
    }
    
    
    update() {
        
    }
}

export default Menu;