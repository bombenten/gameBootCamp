import Phaser from "phaser";


class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.load.image('bigmilos', 'src/image/bigmilos.png');
    }

    create() {
    milos = this.add.image(250, 300, 'bigmilos')
    .setScale(5);
    }
    
    update(delta, time) {

    }
}

export default BootGameScene;
