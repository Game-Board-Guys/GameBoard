module.exports = {
    getTestUser: (req, res) => {
        console.log('test',req.query);
        var auth_id = req.query.user
        const db = req.app.get("db");
        db.find_user([auth_id]).then(users => {
            res.status(200).send(users)
        })
    }
}