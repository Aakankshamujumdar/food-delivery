const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken"); // authentication purpose
const bcrypt = require("bcrypt");
const validator = require("validator");

//Login user
const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
      const user = await userModel.findOne({email});

      if(!user) {
        return res.json({success:false,message:"User Doesn't exist"})
      }
      // matching the password with previous one// user.password- stored in the database//if it is not match then it is false
      const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
          return res.json({success:false,message:"Invalid Credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
      
    }

};

const createToken = (id) =>{
      return jwt.sign({id},process.env.JWT_SECRET)
}

//Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body; // this variable are used to store name email etc
  try {
    // checking is user is already exist
    //if This email is available for any account then it will stored in this vaiable
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exist" });
    }
    // validating email and strong password
    if(!validator.isEmail(email)){
        return res.json({success:false, message: "Enter a valid email"})
    }
    if(password.length<8){
        return res.json({success:false, message: "Enter a strong password"})
    }

    // hashing user password-find out the purpose of this lines
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new userModel({
      name:name,
      email:email,
      password:hashedPassword
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:'Error'})

  }
};

module.exports = { loginUser, registerUser };
