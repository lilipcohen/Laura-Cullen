const router = require("express").Router();

const blogRoute = require("./blogs");

router.use('/blogs', blogRoute);

module.exports = router;