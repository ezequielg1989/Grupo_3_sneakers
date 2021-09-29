const express = require('express')
const controller = require('../controllers/productController')
const router = express.Router()
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
router.get("")
router.get("/addProd", controller.admin);//ruta al formulario para sumar un producto

router.post("/addProd",upload.single("imagenProd"), controller.newProd);//ruta a la pagina q suma producto

router.get("/editProd/:id", controller.getEditAdmin);//ruta al formulario de edicion de producto
router.put("/editProd/:id", upload.single("imagenProd"),controller.editProd)//ruta q edita el formulario y lo carga



module.exports = router