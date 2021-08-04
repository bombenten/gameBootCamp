import Phaser from "phaser";

let gameOver;
let milos ;

class TimerEvent extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TimerEvent'
        });
    }

    preload() {


    }

    create() {
        //Show X Y
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"' })
        .setDepth(100);
        this.pointer = this.input.activePointer;


    }
    
    update(delta, time) {
        //Show X Y
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');
        // tilesprite.tilePositionY -= 1;

    }
}

export default TimerEvent;
