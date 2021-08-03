import Phaser from "phaser";

let milos;
let badboy;
let tilesprite;
let ground;

class BootGameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootGameScene'
        });
    }

    preload() {
        this.load.image('milos', 'src/image/bigmilos.png');

        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 67 , frameHeight: 163});

        this.load.image('ground', 'src/image/ground.png');

        this.load.image('tilesprite', 'src/image/TileSprite (2).png');

    }

    create() {
        //Show X Y
        this.label = this.add.text(0, 0, '(x, y)', { fontFamily: '"Monospace"' })
        .setDepth(100);
        this.pointer = this.input.activePointer;

        // milos = this.add.image(200, 350, 'milos').setScale(3);

        badboy = this.physics.add.sprite(220, 350, 'badboy')
        .setScale(3)
        .setDepth(10)
        .setSize(35,155)
        .setOffset(15,0);

        // badboy.setCollideWorldBounds(true);

        // ground = this.physics.add.image(250, 600, 'ground').setScale(0.5,0.1)
        // .setSize(500,300)
        // .setOffset(0,170);
        // ground.setCollideWorldBounds(true);

        // this.physics.add.collider(badboy, ground);

        // this.physics.add.collider(badboy, ground, ()=>{
        //     milos = this.add.image(200, 350, 'milos').setScale(3).setDepth(1);
        // });
        

        // tilesprite = this.add.tileSprite(0, 0, 850, 1400, 'tilesprite')
        //     .setOrigin(0, 0)
        //     .setScale(3);

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
        

        this.input.on('pointermove', (pointer)=>{
            badboy.x = pointer.x
            badboy.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        })

    }
    
    update(delta, time) {
        //Show X Y
        this.label.setText('(' + this.pointer.x + ', ' + this.pointer.y + ')');
        // tilesprite.tilePositionY -= 1;

        badboy.anims.play('badboyAni', true);
    }
}

export default BootGameScene;
