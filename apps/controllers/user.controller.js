const express = require("express");

const User = require("../models/user");
const bcrypt = require("../commons/password.encoder");

const router = express.Router();

router.get("/get-list-user", (req, res) => {
    User.find({}, function (err, users) {
      let userMap = {};
  
      users.forEach(function (user) {
        userMap[user._id] = user;
      });
      res.render("user", {
        userMap
      });
    });
  });


  router.post("/add", (req, res) => {

    console.log(req.body.password);
    console.log(req.body.email);
    try {
        new User({
            password: bcrypt.hashPassword(req.body.password),
            email: req.body.email
          }).save();
        res.redirect("/index");
    } catch (error) {
        console.log(error);
    }
   
  });


  module.exports = router;