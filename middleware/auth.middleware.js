import jwt from "jsonwebtoken";
const authMiddleWare=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader||authHeader.startsWith("Bearer"))
    {

        res.status(403).json({
            message: "Auth token is required"
        })
    }
    const token=authHeader.split(" ")[1]
    const decoded=jwt.verify(token,process.env.SECRET_KEY);
    req.user=decoded;
    next();

}

export const isAdmin=(req,res,next)=>{
    if(req.user?.role!=="admin"){
        return res.status(403).json({
            message:"Access denined, Admin only"
        })
    }
    next();
}

export default authMiddleWare;