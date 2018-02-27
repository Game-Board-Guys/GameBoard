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
    }
}