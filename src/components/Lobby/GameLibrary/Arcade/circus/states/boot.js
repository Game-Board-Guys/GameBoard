export default function bootState() {
    return {
        preload: function () {
          

            // this.game.input.maxPointers = 1;
            // this.game.stage.disableVisibilityChange = true;

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;

            this.game.scale.minWidth = 480;
            this.game.scale.minHeight = 260;
            this.game.scale.maxWidth = 1024;
            this.game.scale.maxHeight = 768;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            // this.game.scale.setScreenSize(true);

            //  Here we load the assets required for our preloader (in this case a background and a loading bar)
            this.load.image('logo', 'img/circus/logo.png');
            this.load.image('starsmenu', 'img/circus/stars.png');
            this.load.image('preloaderBackground', 'img/circus/progress_bar_background.png');
            this.load.image('preloaderBar', 'img/circus/progress_bar.png');

            this.load.spritesheet('clown', 'assets/images/CircusCharlieSheet1.gif', 16, 24, 10);
        },
        create: function () {
            this.game.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.game.state.start('load');
        }
    }
}