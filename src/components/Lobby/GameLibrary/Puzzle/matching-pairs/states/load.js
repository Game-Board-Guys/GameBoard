export default function loadState(){
    return{
        preload: function(){
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
            { font: '30px Courier', fill: '#fff' });

        this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        //game.stage.backgroundColor = '#eee';
        this.game.load.tilemap('matching', 'img/matching-pairs/tiles.json', null, window.Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'img/matching-pairs/tiles.png');//, 100, 100, -1, 1, 1);    
        },
        create: function(){
            this.game.state.start('play')
        }

    }
}