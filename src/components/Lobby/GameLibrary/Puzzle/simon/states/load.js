export default function loadState(){
    return{
        preload: function(){
        var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.spritesheet('item', 'img/simon/number-buttons.png', 160, 160);
        },
        create: function(){
            this.game.state.start('play')
        }
    }
}