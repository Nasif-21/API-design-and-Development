export const getHello=(req,res)=>{
    const username=req.query.username; //query param
        if(!username)
        {
            return res.status(400).json({
                message:`Username is required`
            })
        }
        res.status(200).json(
            {
            data:`Hello ${username}`
        })
       
}