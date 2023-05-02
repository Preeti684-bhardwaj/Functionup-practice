const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel")


const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}
const createAuthor = async function (req, res) {
    let authorData = req.body

    let savedAuthor = await AuthorModel.create(authorData)
    res.send({ msg: savedAuthor })
}


const getAuthorById = async function (req, res) {
    let Book = await AuthorModel.find({ author_name: "Therepy"})
    // console.log(Book);
    let x= Book.map(x=>x.author_id);
    // console.log(x)
    let result= await BookModel.find({author_id:x}).select({name:1,_id:0})
    // console.log(result)
    res.send({msg: result});
}

const updateBookName= async function (req, res) {
    let allBooks= await BookModel.findOneAndUpdate( 
        { name: "gunther"} , 
        { $set: {price:100} },
        { new: true}  
     )
     console.log(allBooks)
     let x= allBooks.author_id
    //  console.log(x)  
    let result= await AuthorModel.find({author_id:{ $eq:allBooks.author_id}}).select({author_name:1,_id:0});
    result.push({"updatedPrice":allBooks.price});
    res.send(result)
}
const bookAndAuthor=async function(req,res){
    let authorName= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1});
    // console.log(authorName)
    let authorAndBook= authorName.map(x=>x.author_id);
    let authorDetail=await AuthorModel.find({author_id:authorAndBook}).select({author_name:1,_id:0});
    res.send(authorDetail)
}  

module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getAuthorById = getAuthorById
module.exports.updateBookName = updateBookName
module.exports.bookAndAuthor=  bookAndAuthor

