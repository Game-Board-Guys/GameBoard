export default function howToState(){
    return{
        create: function(){

        },
        backtoMenu: function(){
            this.game.state.start('menu')
        }
    }
}