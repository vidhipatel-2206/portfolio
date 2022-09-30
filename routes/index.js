


var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/*  home page. */
router.get('/', indexController.home);

/*  Project page. */
router.get('/projects', indexController.projects);

/*  about page. */
router.get('/about', indexController.about);

/*  services page. */
router.get('/services', indexController.services);

/*  contact page. */
router.get('/contact', indexController.contact);


module.exports = router;
