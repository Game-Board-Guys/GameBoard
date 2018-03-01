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

io.on('connection', socket => {
  console.log('User Connected');

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

// app.get('/api/user/:auth_id', (req, res, next) => {
//     const db = req.app.get('db');
//     const { id } = req.params
//     db.find_user([id])
//         .then(user => {
//             console.log('this is the user', user.username)
//             res.status(200).send(user)
//         })
// })

app.put('/api/editUserInfo', controller.editUserInfo);

// app.put('/api/user/:auth_id', (req, res, next) => {
//     const db = req.app.get('db');
//     const { id } = req.params
//     const user = req.user
//     console.log('this is the awesome user', user.auth_id)
//     console.log('this is the id =', id)
//     console.log('I am the body', req.body)
//     if (req.body.username){
//         db.update_user_username([req.body.username, user.auth_id])
//             .then(user => {
//                 res.status(200).send(user)
//             })
//     } if (req.body.aboutMe){
//         db.update_user_bio([req.body.aboutMe, user.auth_id])
//             .then(user => {
//                 res.status(200).send(user)
//             })
//     } if (req.body.img){
//         db.update_user_img([req.body.img, user.auth_id])
//             .then(user => {
//                 res.status(200).send(user)
//             })
//     }
// })

// ---updates high score for invaders---
app.put('/api/editUserScore', controller.editUserScore);
// ---updates win score for pong---
app.put('/api/editUserScorePong', controller.editUserScorePong);

app.put('/api/editUserScoreBreak', controller.editUserScoreBreak);

app.put('/api/editUserScoreMaze', controller.editUserScoreMaze);