const router = require('express').Router();
const emailRoutes = require('./emails');

// Book routes
router.use('/subscribers', emailRoutes);

module.exports = router;
