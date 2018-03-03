export default function loadState(game) {
    var ASSET_URL = "img/ships/"
    return {
        preload: function () {
            this.game = game;
            this.game.load.crossOrigin = "Anonymous";
            
            game.stage.backgroundColor = "#1199DA";

            this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.bck.anchor.setTo(0.5, 0.5);
            this.bck.scale.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.scale.setTo(0.5, 1);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;


            this.load.setPreloadSprite(this.preloadBar);
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);


            // Load all the ships
            for (var i = 1; i <= 6; i++) {
                this.game.load.image('ship' + String(i) + '_1', ASSET_URL + 'ship' + String(i) + '_1.png');
                this.game.load.image('ship' + String(i) + '_2', ASSET_URL + 'ship' + String(i) + '_2.png');
                this.game.load.image('ship' + String(i) + '_3', ASSET_URL + 'ship' + String(i) + '_3.png');
                this.game.load.image('ship' + String(i) + '_4', ASSET_URL + 'ship' + String(i) + '_4.png');
            }

            this.game.load.image('bullet', ASSET_URL + 'cannon_ball.png');
            this.game.load.image('water', ASSET_URL + 'water_tile.png');
        },
        create: function () {
            return this.game.state.start('menu')
        }
    }
}