export default function loadState() {

    return {
        preload: function () {
            this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.bck.anchor.setTo(0.5, 0.5);
            this.bck.scale.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.scale.setTo(0.5, 1);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;


            this.load.setPreloadSprite(this.preloadBar);
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.atlas('tank', 'img/tanks-two/tanks.png', 'img/tanks-two/tanks.json');
            this.game.load.atlas('enemy', 'img/tanks-two/enemy-tanks.png', 'img/tanks-two/tanks.json');
            this.game.load.image('logo', 'img/tanks-two/logo.png');
            this.game.load.image('bullet', 'img/tanks-two/bullet.png');
            this.game.load.image('earth', 'img/tanks-two/scorched_earth.png');
            this.game.load.spritesheet('kaboom', 'img/tanks-two/explosion.png', 64, 64, 23);

        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}