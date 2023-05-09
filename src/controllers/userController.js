const jwt = require("jsonwebtoken");
const userModel = require("../models/user.js");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign({userId: user._id.toString()},"technetium-batch");
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updatedUserAttribute = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userAttribute = req.body;
  let updatedUserAttribute = await userModel.findOneAndUpdate(
    { _id: userId },
    userAttribute,
    {new: true}
  );
  res.send({ status:true , data: updatedUserAttribute });
};

const updateIsDelete = async function (req, res) {
  const userIdInfo = req.params.userId;
  let user = await userModel.findById(userIdInfo);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

 if(userIdInfo){
  let updatedIsDeleted= await userModel.findOneAndUpdate({ _id: userIdInfo },{ isDeleted:true},{new:true});
  res.send({ status: updatedIsDeleted, data: updatedIsDeleted });
 }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updatedUserAttribute = updatedUserAttribute;
module.exports.updateIsDelete = updateIsDelete;
