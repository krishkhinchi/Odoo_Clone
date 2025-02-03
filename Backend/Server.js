const express = require('express');
const app = express();
const userModel = require('./Model/userSchema');
const connectDB = require('./Config/database');
const bcrypt = require('bcrypt')
require('dotenv').config()

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/Signup",async (req,res)=>{
    try{
        const {name, email, password, confirmPassword} = req.body;
        const userExist = await userModel.findOne({email}) 
        if(userExist){
            return res.send({message: "User Already Exist"});
        }
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({name, email, password: hashPassword, confirmPassword});
        await newUser.save();
        res.send({ message: "User Created Successfully" });
    }
    catch(err){
        res.send(err)
    }
});

app.post("/Login", async(req,res)=>{
    try{
        const {email, password} = req.body;
        const userExist = await userModel.findOne({email});
        if(!userExist){
            return res.send({message: "User not Exist"});
        }
        const userValidation = await bcrypt.compare(password, userExist.password);
        if(!userValidation){
            return res.send({message: "Invalid Email or Password"});
        }
        res.send({message: "Login Succesfully"});
    }
    catch(err){
        res.send(err);
    }
});

app.listen(process.env.PORT, ()=>{
    console.log("Server is running...");
});