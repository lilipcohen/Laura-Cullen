const router = require("express").Router();
const blogsController = require("../../controllers/blogsController");

// Match with "/api/blogs"
router.route("/")
    .get(blogsController.findAll)
    .post(blogsController.create);

// Match with "/api/blogs/:id"
router
    .route("/:id")
    .get(blogsController.findById)
    .put(blogsController.update)
    .delete(blogsController.remove);

module.exports = router;