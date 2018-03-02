export default function loadState() {
    var orbSize = 100;
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.spritesheet('button', 'img/menu-stuffs/greySheet.png', 190, 47.3)
            this.game.load.spritesheet("orbs", "img/match-three/orbs.png", orbSize, orbSize);
        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}