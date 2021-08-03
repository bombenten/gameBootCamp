import Phaser from "phaser";


class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.preload.image('milos','src/image/bigmilos.png');
    }

    create() {
     milos = this.add.image(200,350,'milos');
    }
    
    update(delta, time) {

    }
}

export default BootGameScene;
