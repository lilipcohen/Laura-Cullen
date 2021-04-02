const router = require("express").Router();
const blogsController = require("../../controllers/blogsController");

// Match with "/api/blogs"
router.route("/blogs")
    .get(blogsController.findAll)
    .post(blogsController.create);

// Match with "/api/blogs/:id"
router
    .route("/blogs/:id")
    .get(blogsController.findById)
    .put(blogsController.update)
    .delete(blogsController.remove);

module.exports = router;