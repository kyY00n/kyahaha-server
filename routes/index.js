var express = require("express");
var router = express.Router();

/* GET home page. */
router.use("/users", require("./usersRouter"));
router.use("/posts", require("./postsRouter"));
router.use("/healings", require("./healingsRouter"));

module.exports = router;
