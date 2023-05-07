
const userModel= require("../models/user.js")

const createUser= async function (req, res) {
    let userData= req.body;
    let userSavedData= await userModel.create(userData)
    res.send({msg: userSavedData})
}


module.exports.createUser = createUser;
