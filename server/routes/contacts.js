const Contacts = require('../models/contacts');

module.exports = (router) => {

    router.get('/getContacts', (req, res) => {
        Contacts.find({}, function(err, posts){
            if (err) {
                console.log('Error getting the posts');
            } else {
                res.json(posts);
            }
        })
    });

    return router;
};