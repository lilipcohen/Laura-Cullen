const router = require("express").Router();
const blogRoutes = require("./blogs");

// Blog routes
router.use("/blogs", blogRoutes);

module.exports = router;

