//import express
var express = require('express');
//import burger.js
var burgers = require('../models/burger.js');
//create router for app
var router = express.Router();


//Actual routes
//Get
router.get('/', function(req, res){
//select all
    burgers.selectAll(function(data){
        var burObject = {
            burgers: data
        };
        console.log(burObject);
        res.render('index', burObject);
    });
});

router.post('/burgers', function(req, res){
    //insert one
    burgers.insertOne([
        'burger_name'
    ],[
        req.body.burger_name
    ], 
    function(){
        res.redirect('/');
    });
});



router.put('/burgers/:id', function(req, res) {
    //update one
    var condition = 'id = ' + req.params.id;

    burgers.updateOne({
        devoured: true
    }, condition, function() {
        res.redirect('/');
    });
});
//export router
module.exports = router;