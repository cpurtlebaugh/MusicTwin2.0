var express = require('express');
var router = express.Router();
var resourcesController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get(    '/resources',          resourcesController.index);
router.get(    '/resources/new',      resourcesController.new)
router.get(    '/resources/:id',      resourcesController.show)
router.get(    '/resources/:id/edit', resourcesController.edit)
router.post(   '/resources',          resourcesController.create)
router.put(    '/resources/:id',      resourcesController.update)
router.delete( '/resources/:id',      resourcesController.destroy)


module.exports = router;
