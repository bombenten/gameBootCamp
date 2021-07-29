import Phaser from "phaser";

let player;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('playerRight','src/image/jotaroRight.png',{frameWidth: 22.5,frameHeight: 32});
        this.load.spritesheet('playerLeft','src/image/jotaroLeft.png',{frameWidth: 22.5,frameHeight: 32});
    }

    create() {
        player=this.add.image(200,300,'playerRight').setScale(2);
    }
    
    update(delta, time) {

    }
}

export default GameScene;
