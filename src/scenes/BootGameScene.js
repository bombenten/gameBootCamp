import Phaser from "phaser";

let badboy;
let ground;
let milos;
// let tileSprite;

class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.load.image('bigmilos', 'src/image/bigmilos.png');

        this.load.spritesheet('badboy', 'src/image/botei.png',
            { frameWidth: 67, frameHeight: 163 });

        this.load.image('ground', 'src/image/ground.png');

        // this.load.image('pokemon','src/image/TileSprite (2).png');

    }

    create() {

        badboy = this.physics.add.sprite(220, 350, 'badboy')
        .setScale(3)
        .setDepth(10)
        .setSize(35,155)
        .setOffset(15,0);


        // badboy.setCollideWorldBounds(true);

        // ground = this.physics.add.image(250, 600, 'ground').setScale(0.5, 0.1)
        // .setSize(500,300)
        // .setOffset(0,170);
        
        // ground.setCollideWorldBounds(true);

        // this.physics.add.collider(badboy, ground, ()=>{
        //     milos = this.add.image(200, 350, 'bigmilos').setScale(5).setDepth(-1);
        // });

        // tileSprite = this.add.tileSprite(0, 0, 850, 1400, 'pokemon')
        // .setOrigin(0, 0);

        this.anims.create({
            key: 'badboyAni',
            frames: this.anims.generateFrameNumbers('badboy', {
                start: 0,
                end: 15
            }),
            duration: 1500,
            framerate: 0,
            repeat: -1
        })

    }

    update(delta, time) {
        // tileSprite.tilePositionY -= 1;
        
        badboy.anims.play('badboyAni', true);
    }
}

export default BootGameScene;
