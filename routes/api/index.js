const router = require('express').Router();
const emailRoutes = require('./emails');
const blogRoute = require("./blogs");

router.use('/blogs', blogRoute);

router.use('/subscribers', emailRoutes);

module.exports = router;








