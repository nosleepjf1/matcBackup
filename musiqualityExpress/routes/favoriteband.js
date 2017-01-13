var express = require('express');
var router = express.Router();
var UserFavoriteBand = require('../models/models.js').UserFavoriteBand;

router.get('/:userid', function(req, res){

});

router.post('/save', function(req, res){
    UserFavoriteBand.findOne(req.body,  function(err, bandObject) {
        if(err) {
            res.status(400).send(err);
        }
        else if(bandObject !== null) {
            res.status(401).send('You have already liked this band');
        }
        else {
            UserFavoriteBand.create(req.body, function(theErr, object){
                if(err) {
                    res.status(400).send(theErr);
                }
                else {
                    res.send(req.body.bandname + ' has now marked as a favorite.');
                }
            });
        }
    });

});

router.post('/delete', function(req, res){
    UserFavoriteBand.remove({_id: req.id}, function(err) {
        if(err) {
            res.status(400).send(err);
        }
        else {
            res.send("That band has now been removed from your favorite's list");
        }
    });
});

module.exports = router;
