module.exports = {
    getTestUser: (req, res) => {
        const db = req.app.get("db");
        db.find_user_test().then(e => {
            res.status(200).send(e)
        })
    }
}