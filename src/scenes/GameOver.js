import Phaser from "phaser";
let gameOver;
let milos;

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }

    preload() {
        // this.load.image('gameOver', 'src/image/gameOver (2).png')
        // this.load.image('bigmilos', 'src/image/bigmilos.png');
    }

    create() {
        // milos = this.add.image(200, 350, 'bigmilos').setScale(5).setDepth(-1);

        // gameOver = this.add.image(200, 350, 'gameOver')
        // .setScale(2.5)
        // .setInteractive();

        // gameOver.on('pointerup',()=>{
        //     milos = this.add.image(200, 350, 'bigmilos').setScale(5).setDepth(-1);
        //     // this.scene.start('BootGameScene')  //เราสามารถใช้คำสั่งอื่นๆเพิ่มได้
        // })      
    }

    update(delta, time) {
        
    }
}

export default GameOver;
