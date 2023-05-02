const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



router.post("/createAuthor", BookController.createAuthor)
router.post("/createBook", BookController.createBook)

router.get("/getAuthorById", BookController.getAuthorById)

router.get("/updateBookName", BookController.updateBookName )
router.get("/bookAndAuthor", BookController.bookAndAuthor)

module.exports = router;