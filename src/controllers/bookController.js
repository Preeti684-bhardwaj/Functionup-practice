const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const PublisherModel = require("../models/publisherModel")


const createAuthor = async function (req, res) {
    let authorData = req.body

    let savedAuthor = await AuthorModel.create(authorData)
    res.send({ msg: savedAuthor })
}

const createPublisher = async function (req, res) {
    let publisherData = req.body

    let savedPublisher = await PublisherModel.create(publisherData)
    res.send({ msg: savedPublisher })
}

const createBook = async function (req, res) {
    let book = req.body
    if (book.author) {
        if (book.publisher) {
            let authId = await AuthorModel.findById(book.author);
            let pubId = await PublisherModel.findById(book.publisher);
            if (authId) {
                if (pubId) {
                    let result = await BookModel.create(book);
                    res.send(result);
                } else {
                    res.send("Publisher is not present")
                }
            } else {
                res.send("Author is not present");
            }
        } else {
            res.send("Publisher Id is required");
        }
    } else {
        res.send("Author Id is required")
    }
}

const getBook= async function (req, res) {
    let authors = await BookModel.find().populate('author').populate('publisher')
    res.send({data:authors})
}

const updateKey =async function(req,res)
{
    let pubName= await PublisherModel.find({name:{$in:["Penguin","HarperCollins"]}});
    let updateBook= await BookModel.updateMany({publisher_id:pubName._id},{$set:{isHardCover:true}},{new:true});
    console.log(updBook)
    //  For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
    let authName = await AuthorModel.find({rating :{$gt:"3.5"}}).select({_id:1})
    let updatePrice= await BookModel.updateMany({author:authName},{$inc:{price:10}},{new:true});//inc for increase
    res.send({msg:{updateBook,updatePrice}});
}






module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook
module.exports.getBook= getBook
module.exports.updateKey=updateKey


