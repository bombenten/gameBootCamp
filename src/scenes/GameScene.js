import Phaser from "phaser";

let jaigere;
let badboy;
let background ;

let ground;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('milos', 'src/image/bigmilos.png');
        this.load.image('ground','src/image/ground.png');
        this.load.spritesheet('badboy','src/image/botei.png',
        { frameWidth: 66.5 , frameHeight: 164}); 
        //this.load.image('bg', 'src/image/TileSprite (2).png');
        //this.load.image('poke1','src/image/images/pokemon/poke (4).png');
    }

    create() {
        jaigere = this.physics.add.image(220, 200, 'milos')
        .setScale(3)
        .setCollideWorldBounds(true);
        ground = this.physics.add.image(250,600,'ground')
        .setCollideWorldBounds(true)
        .setScale(0.5,0.25);
        this.physics.add.collider(jaigere,ground);
        this.physics.add.overlap(jaigere,ground, ()=>this.add.sprite(220,300,'badboy').setScale(1.5));
        

        //this.add.sprite(220,300,'badboy').setScale(1.5);
        //background = this.add.tileSprite(0, 0, 850, 1400, 'bg').setOrigin(0, 0).setScale(5);
        //poke1 = this.add.image(100,200,'poke1');

    }
    
    
    
    update(delta, time) {
        //background.tilePositionY -= 0.5;

    }
}

export default GameScene;
