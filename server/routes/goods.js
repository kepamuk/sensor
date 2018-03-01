const Goods = require('../models/goods');

module.exports = (router) => {

    router.get('/getGoods', (req, res) => {
        Goods.find({}, function(err, posts){
            if (err) {
                console.log('Error getting the posts');
            } else {
                res.json(posts);
            }
        })
    });

    return router;
};