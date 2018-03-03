export default function loseState(){
    var score
    return{
        init: function(data){
            score = data.score;
        },
        create: function(){
            this.game.add.text('Score: ' + score)

        }
    }
}