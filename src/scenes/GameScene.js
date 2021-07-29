import Phaser from "phaser";

let jaigere;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('milos', 'src/image/bigmilos.png');
    }

    create() {
        jaigere = this.add.image(250, 380, 'milos').setScale(5);
    }
    
    
    
    update(delta, time) {

    }
}

export default GameScene;
