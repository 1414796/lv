const express = require("express");
const User = require("../models/user");
const bcrypt = require("../commons/password.encoder");

const router = express.Router();

// router.use("/api/user", require(__dirname + "/user/user.controller"));
router.get("/", (req, res) => {
  try {
    const password = "demo123";

    new User({
      password: bcrypt.hashPassword(password),
      email: "demo123@gmmail.com"
    }).save();

    const result = {
      hello: "hello"
    };
    res.status(200).json({
      result
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/form", (req, res) => {
  res.render("form");
});

router.get("/setcookie", function (req, res) {
  // setting cookies
  res.cookie("username", "john doe", {
    maxAge: 900000,
    httpOnly: true
  });
  return res.send("Cookie has been set");
});

router.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  const username = req.cookies["username"];
  console.log(username);
  if (username) {
    return res.send(username);
  }

  return res.send("No cookie found");
});

router.use("/user", require(__dirname + "/user.controller"));


module.exports = router;

// exports["router"] = router;
// module.exports = exports["router"];