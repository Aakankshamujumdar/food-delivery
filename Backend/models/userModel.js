const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name:{
         type:String,
         required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartData:{
        type:Object,
        default:{}
    },
   // if we not provide the false in that case cart will not created bz we haven't provide the date here 
},{minimize:false})

//if the model is already created  then used this || else Create the model
const userModel = mongoose.Model.user || mongoose.model("user",userSchema)

module.exports = userModel;