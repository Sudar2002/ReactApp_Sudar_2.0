const mongoose = require("mongoose");


const signUpSchema=new mongoose.Schema({
    user_id:{
        type:Number,
        required:true
    },
    user_name:{
        type:String,
        required:true,
        lowercase:true
    },
    user_email:{
        type:String,
        required:true,
        lowercase:true
    },
    user_password:{
        type:String,
        required:true,
    }

});

const signUpModel=mongoose.model('Users',signUpSchema);

module.exports=signUpModel;