const express = require('express')
const controller = require('../controllers/productController')
const router = express.Router()
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/newProdImg"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
router.get("/addProd", controller.admin);

router.post("/addProd",upload.single("Image"), controller.newProd);





module.exports = router