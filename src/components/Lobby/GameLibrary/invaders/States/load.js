export default function loadState(){
    return{
        preload: function () {
           //load images
           this.game.load.image('sky', 'img/invaders/sky.jpg');
           this.game.load.image('player','img/invaders/player.png');
           this.game.load.image('bullet1', 'img/invaders/bullet1.png');
            this.game.load.image('enemy', 'img/invaders/enemy.png');
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);
           //load audio
        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}