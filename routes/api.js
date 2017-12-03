const express = require('express');
const router = express.Router();

// get a list a ninjss from db
router.get('/ninjas', function(req,res){

});

// add a new ninjas to the db
router.post('/ninjas', function(req,res){
    console.log(req.body)
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    })
});

// update a new ninjas to the db
router.put('/ninjas/:id', function(req,res){
    
});

// delete a new ninjas to the db
router.delete('/ninjas/:id', function(req,res){
    
});

module.exports = router;