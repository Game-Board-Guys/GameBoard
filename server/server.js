require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , passport = require('passport')
    , session = require('express-session')
    , Auth0Strategy = require('passport-auth0')
    , socketIO = require('socket.io')
    , controller = require('./controller.js');

const port = process.env.SERVER_PORT;
const app = express()
const io = socketIO(app.listen(port, console.log(`this server is running on port ${port}.`)))

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

app.use("/js", express.static(__dirname + "/client/js"));
app.use(bodyParser.json());
app.use(cors());

var players = {}; //Keeps a table of all players, the key is the socket id
var bullet_array = []; // Keeps track of all the bullets to update them on the server 

io.on('connection', socket => {
  console.log('User Connected');

  	// Listen for a new player trying to connect
	socket.on('new-player',function(state){
	  console.log("New player joined with state:",state);
	  players[socket.id] = state;
	  // Broadcast a signal to everyone containing the updated players list
	  io.emit('update-players',players);
	})

  // When player dies, remove player from game. - W
  socket.on('remove_player', function(id) {
    delete players[id.id];
    io.emit('update-players', players);
  });

  // Listen for a disconnection and update our player table 
  socket.on('disconnect',function(state){
    delete players[socket.id];
    io.emit('update-players',players);
  })

  // Listen for move events and tell all other clients that something has moved 
  socket.on('move-player',function(position_data){
    if(players[socket.id] == undefined) return; // Happens if the server restarts and a client is still connected 
    players[socket.id].x = position_data.x;
    players[socket.id].y = position_data.y;
    players[socket.id].angle = position_data.angle;
    io.emit('update-players',players);
  })

  // Listen for shoot-bullet events and add it to our bullet array
  socket.on('shoot-bullet',function(data){
    if(players[socket.id] == undefined) return;
    var new_bullet = data;
    data.owner_id = socket.id; // Attach id of the player to the bullet 
    if(Math.abs(data.speed_x) > 20 || Math.abs(data.speed_y) > 20){
      console.log("Player",socket.id,"is cheating!");
    }
    bullet_array.push(new_bullet);
  });

  socket.emit("welcome", {userID: socket.id});

  socket.on('message sent', (data) => {
    data.user = this.id
    console.log(data)

    socket.broadcast.emit('message dispatched', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
});

// Update the bullets 60 times per frame and send updates 
function ServerGameLoop(){
    for(var i=0;i<bullet_array.length;i++){
      var bullet = bullet_array[i];
      bullet.x += bullet.speed_x;
      bullet.y += bullet.speed_y;
  
      // Check if this bullet is close enough to hit any player 
      for(var id in players){
        if(bullet.owner_id != id){
          // And your own bullet shouldn't kill you
          var dx = players[id].x - bullet.x; 
          var dy = players[id].y - bullet.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if(dist < 70){
            io.emit('player-hit',id); // Tell everyone this player got hit
          }
        }
      }
  
      // Remove if it goes too far off screen 
      if(bullet.x < -10 || bullet.x > 1000 || bullet.y < -10 || bullet.y > 1000){
          bullet_array.splice(i,1);
          i--;
      }
  
    }
    // Tell everyone where all the bullets are by sending the whole array
    io.emit("bullets-update",bullet_array);
  }
  
  setInterval(ServerGameLoop, 16); 

// ---------SESSIONS--------
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

// -------------AUTH0------------
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refresjToken, extraParams, profile, done){
    let {_json} = profile;

    let {displayName, user_id, picture} = profile;
    const db = app.get('db')

    db.find_user(user_id).then(function(user) {
        console.log('this is the user', user)
        if (!user[0]) {
            db.create_user([
                displayName,
                null,
                picture,
                user_id
            ]).then(user => {
                return done(null, user[0].id)
            })
        } else {
            return done(null, user[0].id)
        }
    })

}))

passport.serializeUser((id, done) => {
    done(null, id);
})
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user(id).then(function(user) {
        return done(null,user[0])
    })
})

// -------AUTH0 END POINTS-------
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3001/landing',
    failureRedirect: 'http://localhost:3001/'
}));
app.get('/auth/me', (req,res) => {
    if (!req.user) {
        res.status(404).send('user not found');
    } else {
        res.status(200).send(req.user);
    }
})

app.get('/auth/logout', function(req,res) {
    req.logOut();
    res.redirect('http://localhost:3001/')
})

// -------  AVATAR CHANGE ENDPOINTS -------

app.get('/api/testuser', controller.getTestUser);


app.put('/api/editUserInfo', controller.editUserInfo);


// ---updates high score for invaders---
app.put('/api/editUserScore', controller.editUserScore);
// ---updates win score for pong---
app.put('/api/editUserScorePong', controller.editUserScorePong);

app.put('/api/editUserScoreBreak', controller.editUserScoreBreak);

app.put('/api/editUserScoreMaze', controller.editUserScoreMaze);



// ---get users in order of highest rated player to lowest pong---
app.get('/api/getPongOrder', controller.getPongOrder);
//  ---get users in order for brick breaker---
app.get('/api/getBreakOrder', controller.getBreakOrder);
//  --- invaders
app.get('/api/getInvadeOrder', controller.getInvadeOrder);
// --- orb
app.get('/api/getOrbOrder', controller.getOrbOrder);
