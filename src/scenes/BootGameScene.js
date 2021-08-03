import Phaser from "phaser";

let milos;

class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.load.image('milos', 'src/image/bigmilos.png');
    }

    create() {
        milos = this.add.image(200, 350, 'milos').setScale(3);
    }
    
    update(delta, time) {

    }
}

export default BootGameScene;
