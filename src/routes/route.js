const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



router.post("/createAuthor", BookController.createAuthor)
router.post("/createPublisher", BookController.createPublisher)
router.post("/createBook", BookController.createBook)

router.get("/getBook", BookController.getBook)

router.put("/updateKey",BookController.updateKey)


module.exports = router;