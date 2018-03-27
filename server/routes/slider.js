const Slider = require('../models/slider');

module.exports = (router) => {

    router.get('/getSliders', (req, res) => {
        
        Slider.find({}, function(err, posts){
            if (err) {
                console.log('Error getting the posts');
            } else {
                res.json(posts);
            }
        })
    });

    return router;
};