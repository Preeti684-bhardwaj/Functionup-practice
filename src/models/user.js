const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
	lastName:String,
	emailId:String,
	password:String,
	age: Number,
 	gender:{
        type:String,
        enum:["male","female","other"]
      },
	isDeleted : {type:Boolean,default:false} 

}, { timestamps: true });

module.exports = mongoose.model('userList', userSchema);
