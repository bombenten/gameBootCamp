import Phaser from "phaser";

let milos;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('milos','src/image/bigmilos.png');
    }

    create() {
        milos = this.add.image(225,300,'milos').setScale(3);
    }
    
    
    
    update(delta, time) {

    }
}

export default GameScene;
