const express = require("express");

const router = express.Router();

router.get("/get/2", (req, res) => {
    res.status(200).json({
        title: "An erroroccurred",
        error: " vy sociu"
    });
})
module.exports = router;