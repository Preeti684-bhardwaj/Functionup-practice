const jwt = require("jsonwebtoken");
const userModel = require("../models/user.js");

const createUser = async function (req, res) {
  try{let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData })}
  catch(error){
    res.status(400).send({error:"An error occurred while creating the user's data"})
  }
};

const loginUser = async function (req, res) {
  try{let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign({userId: user._id.toString()},"technetium-batch");
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });}
  catch(error){
  res.status(500).send({error:"user login failed"})}5
  
};

const getUserData = async function (req, res) {

  try{let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(201).send({ status: true, data: userDetails });}
  catch(error){
    res.status(500).send({error:"failed to get user data"})
  }
};

const updatedUserAttribute = async function (req, res) {

  try{let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userAttribute = req.body;
  let updatedUserAttribute = await userModel.findOneAndUpdate(
    { _id: userId },
    userAttribute,
    {new: true}
  );
  res.status(201).send({ status:true , data: updatedUserAttribute });}
  catch(error){
    res.status(500).send({error:"cannot update user detail"})
  }
};

const updateIsDelete = async function (req, res) {
  try{const userIdInfo = req.params.userId;
  let user = await userModel.findById(userIdInfo);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

 if(userIdInfo){
  let updatedIsDeleted= await userModel.findOneAndUpdate({ _id: userIdInfo },{ isDeleted:true},{new:true});
  res.status(201).send({ status: updatedIsDeleted, data: updatedIsDeleted });
 }}
 catch(error){
  res.staus(500).send({error:"cannot delete user data"})
 }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updatedUserAttribute = updatedUserAttribute;
module.exports.updateIsDelete = updateIsDelete;
