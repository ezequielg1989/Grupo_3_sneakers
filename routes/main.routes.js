const express = require('express');
const controller = require('../controllers/mainController.js')
const controller1 = require('../controllers/productController.js')
const router = express.Router();
const multer = require('multer');
const path = require("path");
const uploadfile = require('../middlewares/multer.js');
const validations = require('../middlewares/validationRegister')
/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/perfil"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });*/



router.get('/',controller.home);//ruta a la pagina principal
//router.delete("/:id",controller1.deleteProd);
router.get('/register',controller.register);//ruta a la pagina de registro
router.post('/register',uploadfile.single('perfil'),validations,controller.registerProcess);//carga de datos de usuario

router.get('/login',controller.login);//ruta a la pagina de login
//router.post('/login'.controller.loginIn);

router.get('/cart',controller.cart);//ruta al carrito de compras

router.get('/:id', controller.product);//ruta al detalle de producto por id






module.exports = router;