const jwt = require("jsonwebtoken");

const middleware1 = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  //   if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

   jwt.verify(token, "technetium-batch",
   (error,token)=>{
    console.log(token,error)
    if (!token)
      return res.send({ status: false, msg: "token is invalid" });

  });


  next();
};

const middleware2= async  function(req,res,next){
  let token = req.headers["x-auth-token"];
  let decodedToken=jwt.verify(token, "technetium-batch")
  let userToBeModified = req.params.userId
    let userLoggedIn =decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    next()

}
module.exports.middleware1 = middleware1;
module.exports.middleware2=middleware2
