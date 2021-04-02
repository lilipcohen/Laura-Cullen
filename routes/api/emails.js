const router = require('express').Router();
const emailsController = require('../../controllers/emailsControllers');

// Match with "/api/email"
router.route('/').get(emailsController.findAll).post(emailsController.create);

// Match with "/api/email/:id"
router
  .route('/:id')
  .get(emailsController.findById)
  .put(emailsController.update)
  .delete(emailsController.remove);

module.exports = router;
