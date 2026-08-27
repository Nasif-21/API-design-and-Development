import app from "./app.js";
import dotenv from "dotenv";
dotenv.config()
import sequelize from "./config/db.js";

//Import database into server

const PORT=process.env.PORT||5001

await sequelize.authenticate();
await sequelize.sync({alter:true});
console.log('DB is connected');
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})