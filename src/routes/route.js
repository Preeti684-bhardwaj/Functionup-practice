
const express = require('express');
const router = express.Router();
const productController= require("../controllers/productcontroller");
const userController= require("../controllers/userController");
const orderController= require("../controllers/ordercontroller");
const middlewareModule=require("../middleware/middleware")



router.post("/createProduct", productController.createProduct );
router.post("/createUser", middlewareModule.headerValidation,userController.createUser )
router.post("/creatOrder", middlewareModule.headerValidation,orderController.createOrder )


module.exports = router;