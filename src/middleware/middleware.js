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
module.exports.middleware1 = middleware1;
