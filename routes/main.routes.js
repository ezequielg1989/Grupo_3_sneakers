const express = require('express');
const controller = require('../controllers/mainController.js')
const router = express.Router();
const path = require("path");
const uploadFile = require('../middlewares/multer.js');
const validations = require('../middlewares/validationRegister')



router.get('/',controller.home);//ruta a la pagina principal

router.get('/admin',controller.homeAdmin);

//router.delete("/:id",controller1.deleteProd);
router.get('/register',controller.register);//ruta a la pagina de registro
router.post('/register',uploadFile.single('perfil'),validations,controller.registerProcess);//carga de datos de usuario

router.get("/addProd", controller.admin);//ruta al formulario para sumar un producto
router.post("/addProd",uploadFile.single("imagenProd"), controller.newProd);//procesa la suma de un nuevo producto

router.get('/login',controller.login);//ruta a la pagina de login
router.post('/login',controller.loginIn);
//router.post('/login'.controller.loginIn);

router.get('/cart',controller.cart);//ruta al carrito de compras

router.get('/:id', controller.product);//ruta al detalle de producto por id

router.get("/editProd/:id", controller.getEditAdmin);//ruta al formulario de edicion de producto
router.put("/editProd/:id", uploadFile.single("imagenProd"),controller.editProd)//ruta q edita el formulario y lo carga
router.delete("/:id",controller.deleteProd);






module.exports = router;