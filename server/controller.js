module.exports = {
    getTestUser: (req, res) => {
        console.log('test',req.query);
        var auth_id = req.query.auth
        console.log('authid', auth_id)
        const db = req.app.get("db");
        db.find_user(auth_id).then(users => {
            console.log(users)
            res.status(200).send(users)
        })
    },
    editUserInfo: (req, res, next) => {
        const db = req.app.get('db');
        db.edit_user_info([req.body.handle, req.body.bio, req.body.img, req.body.auth_id]).then(response => {
            res.status(200).send(response)
        })
    },
    editUserScore: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body.score)
        console.log(req.body.auth_id)
        db.edit_user_score([req.body.score, req.body.auth_id]).then(response => {
            res.status(200).send(response)
        })
    },
    editUserScorePong: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body.score)
        console.log(req.body.auth_id)
        db.edit_user_wins_pong([req.body.score, req.body.auth_id]).then(response => {
            res.status(200).send(response)
        })
    }
}