const Content = require('../models/content');

module.exports = (router) => {

    router.get('/getContent', (req, res) => {
        Content.find({}, function(err, posts){
            if (err) {
                console.log('Error getting the posts');
            } else {
                res.json(posts);
            }
        })
    });

    return router;
};