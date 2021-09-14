const express = require('express')
const controller = require('../controllers/productController')
const router = express.Router()

router.get("/addProd", controller.admin);

router.post("/addProd", controller.newProd);





module.exports = router