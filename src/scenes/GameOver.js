import Phaser from "phaser";

let gameOver;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        this.load.image('gameOver', 'src/image/gameOver (2).png');
    }

    create() {
        this.label = this.add.text(0,0,'(x,y)',{fontFamily: '"Monspace"'}).setDepth(100);
        this.pointer = this.input.activePointer;

        gameOver = this.add.image(225,350,'gameOver').setScale(3);
        gameOver.setInteractive();
        gameOver.on('pointerup', ()=> {
            this.scene.start('BootGameScene')
        })
    }
    
    update(delta, time) {
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');
    }
}

export default GameOver;
