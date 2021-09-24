const express = require('express');
const controller = require('../controllers/mainController.js')
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/imagenes-details"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });


router.get('/',controller.home);

router.get('/register',controller.register);

router.get('/login',controller.login);

router.get('/cart',controller.cart);

router.get('/:id', controller.product);






module.exports = router;