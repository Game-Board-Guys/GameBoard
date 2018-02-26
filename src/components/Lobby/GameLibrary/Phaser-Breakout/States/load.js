export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.stage.backgroundColor = '#eee';

            this.game.load.spritesheet('ball', 'img/wobble.png', 20, 20);
            this.game.load.image('paddle', 'img/paddle.png');
            this.game.load.image('brick', 'img/brick.png');
            this.game.load.spritesheet('button', 'img/button.png', 120, 40)
        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}