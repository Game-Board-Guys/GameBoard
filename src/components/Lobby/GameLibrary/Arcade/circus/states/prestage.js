export default function prestageState() {
    return {
        create: function () {
        //     this.add.text(this.game.world.centerX - 100, this.game.world.centerY - 50, GameCtrl.data.textToRender, {
        //         font: '48px "arcadeclasic"',
        //         fill: '#fff',
        //         align: 'left'
        //     });

            setTimeout(function (that) {
                that.game.state.start('play');
            }, 1000, this);
        }
    }
}