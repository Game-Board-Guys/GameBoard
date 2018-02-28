import axios from 'axios';

export default function winstate(){
    var textType = {
        font: '14pt Arial',
        fill: '#000',
        align: 'center'
    }
    var score;
    return{
        init: function(data){
            score = data.score;
        },
        create: function(){
            var winLabel = this.game.add.text(80, 80, 'YOU WON! Your final score was: ' + score,
                {font: '20px Arial', fill: '#00FF00'});
                this.createButton(this.game, "Menu", this.game.world.width * 0.5, this.game.world.height * 0.6, 190, 47.4, this.restart);

                // localStorage.setItem('score', score);
                axios.get('/auth/me').then((res) => {
                    // console.log(res.data)
                    let user = res.data.auth_id;
                    // console.log(user);
                    if (res.data.brick_breaker_highscore < score) {
                        axios.put('/api/editUserScoreBreak', {
                            // score: localStorage.getItem('score'),
                            score: score,
                            auth_id: user
                        })
                    }
                })
        },
        restart: function(){
            this.game.state.start('menu')
        },
        createButton: function(game, string, x, y, w, h, callback){
            var button1 = game.add.button(x, y, 'button', callback, this, 1, 0, 2);
            button1.anchor.setTo(0.5, 0.5);
            button1.width = w;
            button1.height = h;

            var text = game.add.text(
                button1.x, button1.y, string, 
                textType
            );
            text.anchor.setTo(0.5, 0.5);
        }
    }
}