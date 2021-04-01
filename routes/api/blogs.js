const router = require("express").Router();
const blogsController = require("../../controllers/blogsController");

// Match with "/api/blogs"
router.route("/press")
    .get(blogsController.findAll)
    .post(blogsController.create);

// Match with "/api/blogs/:id"
router
    .route("/press/:id")
    .get(blogsController.findById)
    .put(blogsController.update)
    .delete(blogsController.remove);

module.exports = router;