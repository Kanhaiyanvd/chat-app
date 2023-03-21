const User = require('../models/user');
const bcrypt = require('bcrypt');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
         return true
    }
    else{
        return false
    }
}
exports.signup = async(req,res,next)=>{
 try{
    const {name, email, phonenumber, password} = req.body;
    if(isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(phonenumber) || isstringinvalid(password)){
        return res.status(400).json({error:"All fields are required"})
    }
    const signupuser = await User.findAll({where: {email}})
    if(signupuser.length>0){
        console.log(signupuser);
        res.status(401).json({message: 'User already exits, please login'});
    }
    else{
     const saltround = 10;
    
     bcrypt.hash(password, saltround, async(err, hash)=>{
        console.log(err);
        await User.create({name, email, phonenumber, password: hash})
        res.status(201).json({message: 'User created successfully'})
     })
    }

 }catch(err){
   console.log(err)
    res.status(500).json({error: err})
 }
}



