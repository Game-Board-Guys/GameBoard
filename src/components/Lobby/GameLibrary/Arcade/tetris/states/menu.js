export default function menuState(){
    var score =0;
    return{
        create : function(){
            this.game.world.bounds.x = 0;
    
            this.game.world.bounds.y = 0;
    
            this.game.world.bounds.width = 400;
    
            this.game.world.bounds.height = 600;
    
            this.playbutton = this.add.button(this.game.world.centerX, this.game.world.centerY-40,'play',this.playclicked,this,1,0,2);
    
            this.playbutton.anchor.setTo(0.5,0.5);
    
            this.tweenplay = this.game.add.tween(this.playbutton).to({y:300},1000, window.Phaser.Easing.Sinusoidal.InOut,true,0,100,true);
    
    
            this.arrows = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY+180,'arrow');
    
            this.arrows.anchor.setTo(0.5,0.5);
    
            this.arrows.scale.setTo(0.6,0.6);
    
    
    
            this.titleimage = this.add.sprite(this.game.world.centerX,0,'title');
    
            this.titleimage.anchor.setTo(0.5,0);
    
        },
    
    
    
        playclicked : function() {
    
            score = 0;
    
            this.game.state.start('play');
    
        },
    }
}