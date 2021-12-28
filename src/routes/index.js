const express = require('express');
const router = express.Router();
const controllerShoes = require('../controllers/shoes');
const controllerUser= require('../controllers/users')
const path = require("path");
const uploadFile = require('../middlewares/multer.js');
const validations = require('../middlewares/validationRegister')



/* GET home page*/

 router.get('/',controllerShoes.getShoes);

 /*CREATE prod*/

 router.get('/addProd', controllerShoes.getShoesAdmin);//ruta al formulario para sumar un producto
 router.post('/addProd',uploadFile.single("imagenProd"), controllerShoes.createShoes)

// /*SELECT prod*/
 router.get("/:id",controllerShoes.ProdShoes);

 router.get("/editProd/:id", controllerShoes.showEditShoes);//ruta al formulario de edicion de producto
 router.put("/editProd/:id", uploadFile.single("imagenProd"),controllerShoes.editShoes)//ruta q edita el formulario y lo carga

// /*DELETE */
 router.delete("/:id",controllerShoes.deleteShoes);

/*LOGIN user*/
router.get('/login',controllerUser.loginUser);//ruta a la pagina de login



/*REGISTER user*/

router.get('/register',controllerUser.registerUser);//ruta a la pagina de registro
router.post('/register',uploadFile.single('perfil'),validations,controllerUser.createUser);//carga de datos de usuario




module.exports = router;