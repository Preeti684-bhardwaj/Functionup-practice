const userModel = require("../models/userModel")


const createNewBook= async function(req,res){
    let bookDetail=req.body
    let newBook= await userModel.create(bookDetail)
    res.send({msg: newBook})
}
const getListOfBooks= async function (req, res) {
    let bookList= await userModel.find()
    res.send({msg: bookList})
}



// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createNewBook= createNewBook
module.exports.getListOfBooks= getListOfBooks