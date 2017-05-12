var express = require("express");
var db = require("../models");

module.exports = function (app) {

     app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            console.log(dbBurger);
            res.render("index", {result:dbBurger});
        });
    });

    app.post("/add", function(req, res) {

        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function(dbBurger) {
            res.redirect("/");
            console.log(dbBurger);
        })
        .catch(function (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        });
    });



    app.put("/:id", function(req,res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.redirect("/");
        })
    });

};