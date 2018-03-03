export default function loseState(){
    var score =0;
    return{
        init: function(data){
            score = data.score;
        },
        create : function(){

            this.game.world.bounds.x = 0;
    
            this.game.world.bounds.y = 0;
    
            this.game.world.bounds.width = 400;
    
            this.game.world.bounds.height = 600;
    
            this.lose = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'lose');
    
            this.lose.anchor.setTo(0.5,0.5);
    
            this.playbutton = this.add.button(this.game.world.centerX, 40, 'play',this.playclicked,this,1,0,2);
    
            this.playbutton.anchor.setTo(0.5,0.5);
    
            this.tweenplay = this.game.add.tween(this.playbutton).to({y:50},1000, window.Phaser.Easing.Sinusoidal.InOut,true,0,100,true);
    
            this.scoretextmain = this.add.text(this.game.world.centerX,450,score,{ font: "40px Arial", fill: "#fff", align: "center" })
    
            this.scoretextmain.anchor.setTo(0.5,0.5);
    
            
    
        },
    
        playclicked : function() {
    
            score = 0;
    
            this.game.state.start('Game');
    
        },
    }
}