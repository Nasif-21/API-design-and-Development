import  { readFileSync } from "fs";
import path from "path";
import User from "../models/user.model.js";

//Define business logic

/*export const getusers=(req,res)=>{
    const userFilePath=path.join(process.cwd(),"data","users.json");
    const userData=readFileSync(userFilePath,'utf-8');
    const users=JSON.parse(userData);
    res.status(200).json({
        message:"Users data",
        data:users
    })

}
*/

 export const getByUserId=async(req,res)=>{
        try{
            const userId=req.params.id;
            const user=await User.findByPk(userId)
    if(!user)
    {
        return res.status(404).json({
            message:"User not found"

        })
    }
    res.status(200).json({
        message:"User found",
        data:user
    })
    }
    catch(error){
        res.status(500).json({
        message:"User not found",
        data:user
    })
    }
}


export const getusers=async(req,res)=>{
    const users=await User.findAll({attributes:{exclude:["password"]}});
    res.status(200).json({
        message:"Users data",
        data:users
    })

}