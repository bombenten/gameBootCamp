import Phaser from "phaser";

let gameOver;
let milos ;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('gameOver', 'src/image/gameOver (2).png');
        this.load.image('milos', 'src/image/bigmilos.png');

    }

    create() {
        //Show X Y
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"' })
        .setDepth(100);
        this.pointer = this.input.activePointer;

        gameOver = this.add.image(225, 350, 'gameOver')
        .setScale(3);
        
        gameOver.setInteractive();

        gameOver.on('pointerup',()=>{
            this.scene.start('BootGameScene')  //เราสามารถใช้คำสั่งอื่นๆเพิ่มได้ เช่น
        })                          

    }
    
    update(delta, time) {
        //Show X Y
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');
        // tilesprite.tilePositionY -= 1;

    }
}

export default GameOver;
