
const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const middlewareModule=require("../middleware/middleware")

router.post("/createUser",userController.createUser )
router.post("/loginUser",userController.loginUser)
router.get("/users/:userId",middlewareModule.middleware1, userController.getUserData);
router.put("/users/:userId",middlewareModule.middleware1,userController.updatedUserAttribute);
router.delete("/users/:userId",middlewareModule.middleware1, userController.updateIsDelete);


module.exports = router;