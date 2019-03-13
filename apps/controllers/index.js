var express = require("express");

var router = express.Router();

// router.use("/api/user", require(__dirname + "/user/user.controller"));
router.get("/", (req, res) => {
    result = {
        hello: "hello"
    }
    res.status(200).json({
        result
    });
});

router.use("/api/demo", require(__dirname + "/demo/demo"));


module.exports = router;