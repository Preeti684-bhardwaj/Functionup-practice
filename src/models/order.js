const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId;


const orderSchema= new mongoose.Schema({ 
	userId:  {type: ObjectId,
    ref: "userList"},
	productId:{type: ObjectId,
        ref: "productList"},
	amount: Number,
	isFreeAppUser: Boolean, 
	date:Date

});

module.exports = mongoose.model('orderList', orderSchema);