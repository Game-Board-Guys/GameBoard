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
        console.log('test');
        console.log('test');
        console.log('test');
        console.log(req.body);
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
    },
    editUserScoreBreak: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body.score)
        console.log(req.body.auth_id)
        db.edit_user_score_break([req.body.score, req.body.auth_id]).then(response => {
            res.status(200).send(response)
        })
    },
    editUserScoreMaze: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body.score)
        console.log(req.body.auth_id)
        db.edit_user_score_maze([req.body.score, req.body.auth_id]).then(response => {
            res.status(200).send(response)
        })
    },
    getPongOrder: (req, res) => {
        const db = req.app.get('db');
        db.get_pong_order().then(users => {
            console.log("user's length", users.length)
            res.status(200).send(users)
        })
    },
    getBreakOrder: (req, res) => {
        const db = req.app.get('db');
        db.get_break_order().then(users => {
            console.log(users)
            res.status(200).send(users)
        })
    },
    getInvadeOrder: (req, res) => {
        const db = req.app.get('db');
        db.get_invade_order().then(users => {
            console.log(users)
            res.status(200).send(users)
        })
    },
    getOrbOrder: (req, res) => {
        const db = req.app.get('db');
        db.get_orb_order().then(users => {
            console.log(users)
            res.status(200).send(users)
        })
    }
}