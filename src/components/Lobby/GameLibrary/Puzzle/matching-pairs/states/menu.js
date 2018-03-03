export default function menuState() {
    return {
        // create: function () {



        //     this.music = this.add.audio('music', 1, true);
        //     if (playmusic == true) {
        //         this.music.play('', 0, 1, true);
        //     }
        //     score = 0;
        //     clicks = 0;

        //     this.titleimage = this.add.sprite(this.world.centerX, 150, 'title');
        //     this.titleimage.anchor.setTo(0.5, 0.5);
        //     this.titleimage.scale.setTo(0.5, 0.5);

        //     this.playButton = this.add.button(this.world.centerX, this.world.height - 150, 'play', this.startGame, this, 1, 0, 2);
        //     this.playButton.scale.setTo(0.5, 0.5);
        //     this.playButton.anchor.setTo(0.5, 0.5);

        //     this.musicButton = this.add.button(this.world.centerX, this.world.height - 10, 'musicbutton', this.changemusic, this, 1, 0, 2);
        //     this.musicButton.scale.setTo(0.5, 0.5);
        //     this.musicButton.anchor.setTo(0.5, 1);

        //     this.shapes1 = this.add.sprite(this.world.centerX, this.world.centerY + 10, 'spriteset');
        //     this.shapes1.frameName = 'shape1.png';
        //     this.shapes1.anchor.setTo(0.5, 0.5);
        //     this.shapes1.alpha = 0;

        //     // this.shapes2 = this.add.sprite(this.world.centerX+80,this.world.centerY+10,'spriteset');
        //     // this.shapes2.frameName = 'shape2.png';
        //     // this.shapes2.anchor.setTo(0.5,0.5);

        //     this.frameNo = 1;
        //     this.shapetween = this.add.tween(this.shapes1).to({ alpha: 1 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, true);
        //     // this.frameSwitch = this.time.events.loop(150, this.updateFrame, this);

        // },

        // changemusic: function () {
        //     if (playmusic == true) {
        //         this.music.stop();
        //         playmusic = false;
        //     }
        //     else {
        //         this.music.play();
        //         playmusic = true;
        //     }
        // },

        // updateFrame: function () {
        //     this.frameNo = this.rnd.integerInRange(1, 6);
        //     this.shapes1.frameName = 'shape' + this.frameNo + '.png';
        //     // this.frameNo = this.rnd.integerInRange(1,6);
        //     // this.shapes2.frameName = 'shape'+this.frameNo+'.png';

        // },

        // update: function () {

        //     if (this.shapes1.alpha == 0) {
        //         this.updateFrame();
        //     }
        //     // this.shapes1.angle++;		//	Do some nice funky main menu effect here

        // },

        // startGame: function (pointer) {

        //     this.music.stop();

        //     this.state.start('playTwo');

        // }

    };
}
