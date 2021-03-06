const express = require('express');
const router = express.Router();
const controllerShoes = require('../controllers/shoes');
const controllerUser= require('../controllers/users')
const path = require("path");
const uploadFile = require('../middlewares/multer.js');
const validations = require('../middlewares/validationRegister')
const guestMiddleware = require('../middlewares/guestMiddleware')


/* GET home page*/

 router.get('/',controllerShoes.getShoes);

 /*CREATE prod*/

// router.get('/addProd', controllerShoes.getShoesAdmin);//ruta al formulario para sumar un producto
// router.post('/addProd',uploadFile.single("imagenProd"), controllerShoes.createShoes)

// /*SELECT prod*/
//router.get("/:id",controllerShoes.shoes);

// router.get("/editProd/:id", controllerShoes.showEditShoes);//ruta al formulario de edicion de producto
// router.put("/editProd/:id", uploadFile.single("imagenProd"),controllerShoes.editShoes)//ruta q edita el formulario y lo carga

// /*DELETE */
 //router.delete("/:id",controllerShoes.deleteShoes);

/*LOGIN user*/
router.get('/login',guestMiddleware, controllerUser.loginIn); //si agrego middleware rompe
router.post('/login',controllerUser.loginUsers);//ruta a la pagina de login
router.get('/logout', controllerUser.logout);
router.get('/profile',controllerUser.getUsers)


/*REGISTER user*/

router.get('/register',guestMiddleware, controllerUser.registerUsers);//ruta a la pagina de registro //si agrego middleware rompe
router.post('/register',uploadFile.single('perfil'),validations,controllerUser.createUsers);//carga de datos de usuario




module.exports = router;