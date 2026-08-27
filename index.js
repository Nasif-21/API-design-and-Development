import express from "express";
import dotenv from "dotenv";
import fs, { readFileSync } from "fs";
import path from "path";

const app=express();
const PORT=process.env.PORT|5001;

app.get("/",(req,res)=>{
    
})

app.get("/users",(req,res)=>{
   

})

app.get("/user/:id",(req,res)=>{

  

})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})