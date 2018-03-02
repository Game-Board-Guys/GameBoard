export default function loadState() {
    return {
        preload: function(){
            this.load.baseURL = 'img/';
            this.load.image('board');
            this.load.image('glow');
            this.load.image('roll');
            this.load.atlas('dice');
        },
        create: function () {
            this.game.state.start('play');
        }
    }
}