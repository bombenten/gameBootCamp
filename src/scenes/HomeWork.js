import Phaser from "phaser";

let bg;
let jett;
var keyUp, keyDown, keyLeft, keyRight;


class HomeWork extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'HomeWork'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/mid-spilt crop.jpg');
        this.load.image('dagger', 'src/image/jettknife-removebg.png');
        this.load.image('jett', 'src/image/jettEmbarrassing.png');
    }

    create() {
        bg = this.add.tileSprite(0, 0, 488, 650, 'bg').setOrigin(0, 0);

        
        jett = this.physics.add.image(500, 500, "jett");
        jett.setScale(0.3);
        jett.speed = 400;
        jett.setCollideWorldBounds(true);

        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        
    }
    
    update() {
        

        if (keyUp.isDown) {
            jett.setVelocityY(-jett.speed);
        } else if (keyDown.isDown) {
            jett.setVelocityY(jett.speed);
        } else {
            jett.setVelocityY(0);
        }
    
        if (keyLeft.isDown) {
            jett.setVelocityX(-jett.speed);
        } else if (keyRight.isDown) {
            jett.setVelocityX(jett.speed);
        } else {
            jett.setVelocityX(0);
        }
    }
}

export default HomeWork;
