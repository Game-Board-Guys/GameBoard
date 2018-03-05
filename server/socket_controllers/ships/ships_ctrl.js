module.exports = {
  new_player: function(state){
    console.log("New player joined with state:",state);
    players[socket.id] = state;
    // Broadcast a signal to everyone containing the updated players list
    io.emit('update-players',players);
  },

  remove_player: function(id) {
    delete players[id.id];
    io.emit('update-players', players);
  },

  move_player: function(position_data){
    if(players[socket.id] == undefined) return; // Happens if the server restarts and a client is still connected 
    players[socket.id].x = position_data.x;
    players[socket.id].y = position_data.y;
    players[socket.id].angle = position_data.angle;
    io.emit('update-players',players);
  },

  shoot_bullet: function(data){
    if(players[socket.id] == undefined) return;
    var new_bullet = data;
    data.owner_id = socket.id; // Attach id of the player to the bullet 
    if(Math.abs(data.speed_x) > 20 || Math.abs(data.speed_y) > 20){
      console.log("Player",socket.id,"is cheating!");
    }
    bullet_array.push(new_bullet);
  }
};

