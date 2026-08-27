import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const signup=async(req,res)=>{
    const {firstname,lastname,email,phonenumber,password}=req.body;
    if(!firstname||!email||!password)
    {
        return res.status(400).json({
            message:"firstname, email and password cannot be error"
        })
    }
    const existingUser=await User.findOne({where:{email}});
    if(existingUser)
    {
        return res.status(409).json({
            message:"User is already exist in similar email"
        })
    }
    

    const hashedPassword=await bcrypt.hash(password,10) //Using password to be bcrypt
    const user=await User.create({
        firstName:firstname,   //Similar to database field
        lastName:lastname,
        email,
        phoneNumber:phonenumber,
        password:hashedPassword
    })


    res.status(201).json({
        message:"User created successfully",
        data:
        {
         id:user.id,
         firstname:user.firstName,
         lastname:user.lastName,
         email:user.email,
         phonenumber:user.phoneNumber   
        }
    })


}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({where:{email}})
    if(!user)
    {
        return res.status(401).json({
            message:"Invalid credencial"
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid)
    {
     return res.status(400).json(
            {
                message:"Wrong credencial"
            }
        )
    }
    const token=jwt.sign({id:user.id, email:user.email,role:user.role},process.env.SECRET_KEY,{expiresIn:3600})
    res.status(200).json({
        message:"Login Successful",
        data:{
            token,
            user:{
                id:user.id,
                email:user.email
            }
        }
    })
    
    
}