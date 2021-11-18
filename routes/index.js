const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const path = require("path");
const uploadFile = require('../middlewares/multer.js');



/* GET home page*/

router.get('/',controller.shoes.getShoes);

/*CREATE prod*/

router.get('/addProd', controller.shoes.getShoesAdmin);//ruta al formulario para sumar un producto
router.post('/addProd',uploadFile.single("imagenProd"), controller.shoes.createShoes)

/*SELECT prod*/
router.get("/:id",controller.shoes.ProdShoes);

router.get("/editProd/:id", controller.shoes.showEditShoes);//ruta al formulario de edicion de producto
router.put("/editProd/:id", uploadFile.single("imagenProd"),controller.shoes.editShoes)//ruta q edita el formulario y lo carga

/*DELETE */
router.delete("/:id",controller.shoes.deleteShoes);





module.exports = router;