const express = require('express');
const controller = require('../controllers/mainController.js')
const router = express.Router();


router.get('/',controller.home);

router.get('/register',controller.register);

router.get('/login',controller.login);

router.get('/cart',controller.cart);

router.get('/details',controller.details);


module.exports = router;