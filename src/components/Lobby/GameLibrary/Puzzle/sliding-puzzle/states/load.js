export default function loadState(){
    var PIECE_WIDTH = 200;
    var PIECE_HEIGHT = 200;
    return{
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.spritesheet("background", "img/slider-puzzle/bl.jpg", PIECE_WIDTH, PIECE_HEIGHT);
        },
        create: function () {
            this.game.state.start('play')
        }
    }
}