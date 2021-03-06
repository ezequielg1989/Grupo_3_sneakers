const express = require('express');
const router = express.Router();
const controllerUser= require('../controllers/users')
const path = require("path");
const uploadFile = require('../middlewares/multer.js');
const validations = require('../middlewares/validationRegister')



/*REGISTER user*/

router.get('/register',controllerUser.registerUsers);//ruta a la pagina de registro
router.post('/register',uploadFile.single('perfil'),validations,controllerUser.createUsers);//carga de datos de usuario

