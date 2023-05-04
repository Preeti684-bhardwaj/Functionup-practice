const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


router.get("/assignment", BookController.assignment)




module.exports = router;