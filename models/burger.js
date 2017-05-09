//Importing ORM
var orm = require('../config/orm.js');

//object

var burger = {
    //Select All
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    //Insert one
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },
    //updateone

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    }
}; //ends burger object
//export
module.exports = burger;