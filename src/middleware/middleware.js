const jwt = require("jsonwebtoken");

const middleware1 = function (req, res, next) {
  try{let token = req.headers["x-auth-token"];
  //   if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  // console.log(token);

   jwt.verify(token, "technetium-batch")
  next();}

  catch(error){
    res.status(401).send({status:false , msg:"token is invalid"})
  }
};

const middleware2=  function(req,res,next){
  let token = req.headers["x-auth-token"];
  let decodedToken=jwt.verify(token, "technetium-batch")
  let verifyUserId = req.params.userId
    let userLoggedIn =decodedToken.userId
    if( verifyUserId != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    next()

}
module.exports.middleware1 = middleware1;
module.exports.middleware2=middleware2
