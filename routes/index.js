var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("shop/index", { title: "Online Shop" });
});

module.exports = router;
