export default function bootState(){
    return{
        create:function(){
            this.game.state.start('load');
        }
    }
}