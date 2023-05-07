const orderModel = require("../models/order.js");
const productModel = require("../models/product.js");
const userModel = require("../models/user.js");

const createOrder = async function (req, res) {
  let order = req.body;
  if (order.userId) {
    if (order.productId) {
      const user_Id = await userModel.findById(order.userId);
      const product_Id = await productModel.findById(order.productId);
      if (user_Id) {
        if (product_Id) {
          if (order.isFreeAppUser) {
            order.amount = 0;
            data = await orderModel.create(order);
            res.send(data);
          } else {
              userBal =user_Id.balance - product_Id.price;
              if (userBal > 0) {
                let x = await userModel.findOneAndUpdate(
                  { _id: req.body.userId },
                  { $set: { balance: userBal } },
                  { new: true }
                );
                order.amount = product_Id.price;

                data = await orderModel.create(order);
                // console.log(x);
                res.send({ response: data });
              } else {
                res.send("user doesn't have enough balance");
              }
          }
        }else{
            res.send("Enter valid ProductId")
        }
      }else{
        res.send("Enter valid UserId")
      }
    } else {
      res.send("productId is required");
    }
  } else {
    res.send("userId is required");
  }
  
};

module.exports.createOrder = createOrder;
